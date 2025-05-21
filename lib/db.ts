import { Pool, type PoolClient } from "pg"

// 데이터베이스 연결 설정
const pool = new Pool({
  user: process.env.DB_USER || "recruitment_admin",
  host: process.env.DB_HOST || "db.recruitment-system.com",
  database: process.env.DB_NAME || "recruitment_system_prod",
  password: process.env.DB_PASSWORD || "Kr#9pQ$2sT!7vZ@5",
  port: Number.parseInt(process.env.DB_PORT || "5432"),
  max: 20, // 최대 클라이언트 수
  idleTimeoutMillis: 30000, // 유휴 연결 타임아웃
  connectionTimeoutMillis: 2000, // 연결 타임아웃
})

// 쿼리 실행 함수
export async function query(text: string, params?: any[]) {
  const start = Date.now()
  try {
    const res = await pool.query(text, params)
    const duration = Date.now() - start
    console.log("실행된 쿼리", { text, duration, rows: res.rowCount })
    return res
  } catch (error) {
    console.error("쿼리 실행 오류:", error)
    throw error
  }
}

// 트랜잭션 함수
export async function withTransaction<T>(callback: (client: PoolClient) => Promise<T>): Promise<T> {
  const client = await pool.connect()
  try {
    await client.query("BEGIN")
    const result = await callback(client)
    await client.query("COMMIT")
    return result
  } catch (error) {
    await client.query("ROLLBACK")
    throw error
  } finally {
    client.release()
  }
}

// 데이터베이스 연결 테스트
export async function testConnection() {
  try {
    const res = await pool.query("SELECT NOW()")
    return { connected: true, timestamp: res.rows[0].now }
  } catch (error) {
    console.error("데이터베이스 연결 테스트 실패:", error)
    return { connected: false, error }
  }
}

// 데이터베이스 초기화 함수
export async function initializeDatabase() {
  try {
    // 회원 테이블 생성
    await query(`
      CREATE TABLE IF NOT EXISTS members (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(100) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        nationality VARCHAR(50),
        contact_korea VARCHAR(20),
        contact_local VARCHAR(20),
        visa_type VARCHAR(20),
        visa_expiry_date DATE,
        visa_status VARCHAR(20),
        employment_status VARCHAR(20),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `)

    // 고객사 테이블 생성
    await query(`
      CREATE TABLE IF NOT EXISTS companies (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        business_number VARCHAR(20) UNIQUE NOT NULL,
        industry VARCHAR(50),
        contact_person VARCHAR(50),
        contact_email VARCHAR(100),
        contact_phone VARCHAR(20),
        address TEXT,
        contract_status VARCHAR(20),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `)

    // 프로젝트 테이블 생성
    await query(`
      CREATE TABLE IF NOT EXISTS projects (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        company_id INTEGER REFERENCES companies(id),
        start_date DATE,
        end_date DATE,
        required_count INTEGER,
        hired_count INTEGER DEFAULT 0,
        status VARCHAR(20),
        description TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `)

    // 지원자 테이블 생성
    await query(`
      CREATE TABLE IF NOT EXISTS applicants (
        id SERIAL PRIMARY KEY,
        project_id INTEGER REFERENCES projects(id),
        member_id INTEGER REFERENCES members(id),
        status VARCHAR(20),
        applied_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `)

    // 매출 테이블 생성
    await query(`
      CREATE TABLE IF NOT EXISTS revenues (
        id SERIAL PRIMARY KEY,
        company_id INTEGER REFERENCES companies(id),
        project_id INTEGER REFERENCES projects(id),
        amount DECIMAL(15, 2) NOT NULL,
        description TEXT,
        payment_date DATE,
        payment_status VARCHAR(20),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `)

    // 시스템 설정 테이블 생성
    await query(`
      CREATE TABLE IF NOT EXISTS settings (
        id SERIAL PRIMARY KEY,
        key VARCHAR(100) UNIQUE NOT NULL,
        value TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `)

    console.log("데이터베이스 초기화 완료")
    return { success: true }
  } catch (error) {
    console.error("데이터베이스 초기화 실패:", error)
    return { success: false, error }
  }
}

// 회원 관련 함수
export const memberQueries = {
  // 모든 회원 조회
  getAllMembers: async () => {
    const result = await query("SELECT * FROM members ORDER BY created_at DESC")
    return result.rows
  },

  // 회원 상세 조회
  getMemberById: async (id: number) => {
    const result = await query("SELECT * FROM members WHERE id = $1", [id])
    return result.rows[0]
  },

  // 회원 추가
  createMember: async (memberData: any) => {
    const {
      name,
      email,
      password,
      nationality,
      contact_korea,
      contact_local,
      visa_type,
      visa_expiry_date,
      visa_status,
      employment_status,
    } = memberData
    const result = await query(
      "INSERT INTO members (name, email, password, nationality, contact_korea, contact_local, visa_type, visa_expiry_date, visa_status, employment_status) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *",
      [
        name,
        email,
        password,
        nationality,
        contact_korea,
        contact_local,
        visa_type,
        visa_expiry_date,
        visa_status,
        employment_status,
      ],
    )
    return result.rows[0]
  },

  // 회원 수정
  updateMember: async (id: number, memberData: any) => {
    const {
      name,
      email,
      nationality,
      contact_korea,
      contact_local,
      visa_type,
      visa_expiry_date,
      visa_status,
      employment_status,
    } = memberData
    const result = await query(
      "UPDATE members SET name = $1, email = $2, nationality = $3, contact_korea = $4, contact_local = $5, visa_type = $6, visa_expiry_date = $7, visa_status = $8, employment_status = $9, updated_at = CURRENT_TIMESTAMP WHERE id = $10 RETURNING *",
      [
        name,
        email,
        nationality,
        contact_korea,
        contact_local,
        visa_type,
        visa_expiry_date,
        visa_status,
        employment_status,
        id,
      ],
    )
    return result.rows[0]
  },

  // 회원 삭제
  deleteMember: async (id: number) => {
    await query("DELETE FROM members WHERE id = $1", [id])
    return { success: true }
  },
}

// 고객사 관련 함수
export const companyQueries = {
  // 모든 고객사 조회
  getAllCompanies: async () => {
    const result = await query("SELECT * FROM companies ORDER BY created_at DESC")
    return result.rows
  },

  // 고객사 상세 조회
  getCompanyById: async (id: number) => {
    const result = await query("SELECT * FROM companies WHERE id = $1", [id])
    return result.rows[0]
  },

  // 고객사 추가
  createCompany: async (companyData: any) => {
    const { name, business_number, industry, contact_person, contact_email, contact_phone, address, contract_status } =
      companyData
    const result = await query(
      "INSERT INTO companies (name, business_number, industry, contact_person, contact_email, contact_phone, address, contract_status) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *",
      [name, business_number, industry, contact_person, contact_email, contact_phone, address, contract_status],
    )
    return result.rows[0]
  },

  // 고객사 수정
  updateCompany: async (id: number, companyData: any) => {
    const { name, business_number, industry, contact_person, contact_email, contact_phone, address, contract_status } =
      companyData
    const result = await query(
      "UPDATE companies SET name = $1, business_number = $2, industry = $3, contact_person = $4, contact_email = $5, contact_phone = $6, address = $7, contract_status = $8, updated_at = CURRENT_TIMESTAMP WHERE id = $9 RETURNING *",
      [name, business_number, industry, contact_person, contact_email, contact_phone, address, contract_status, id],
    )
    return result.rows[0]
  },

  // 고객사 삭제
  deleteCompany: async (id: number) => {
    await query("DELETE FROM companies WHERE id = $1", [id])
    return { success: true }
  },
}

// 프로젝트 관련 함수
export const projectQueries = {
  // 모든 프로젝트 조회
  getAllProjects: async () => {
    const result = await query(`
      SELECT p.*, c.name as company_name 
      FROM projects p 
      JOIN companies c ON p.company_id = c.id 
      ORDER BY p.created_at DESC
    `)
    return result.rows
  },

  // 프로젝트 상세 조회
  getProjectById: async (id: number) => {
    const result = await query(
      `
      SELECT p.*, c.name as company_name, c.contact_person, c.contact_email, c.contact_phone
      FROM projects p 
      JOIN companies c ON p.company_id = c.id 
      WHERE p.id = $1
    `,
      [id],
    )
    return result.rows[0]
  },

  // 프로젝트 추가
  createProject: async (projectData: any) => {
    const { name, company_id, start_date, end_date, required_count, status, description } = projectData
    const result = await query(
      "INSERT INTO projects (name, company_id, start_date, end_date, required_count, status, description) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
      [name, company_id, start_date, end_date, required_count, status, description],
    )
    return result.rows[0]
  },

  // 프로젝트 수정
  updateProject: async (id: number, projectData: any) => {
    const { name, company_id, start_date, end_date, required_count, hired_count, status, description } = projectData
    const result = await query(
      "UPDATE projects SET name = $1, company_id = $2, start_date = $3, end_date = $4, required_count = $5, hired_count = $6, status = $7, description = $8, updated_at = CURRENT_TIMESTAMP WHERE id = $9 RETURNING *",
      [name, company_id, start_date, end_date, required_count, hired_count, status, description, id],
    )
    return result.rows[0]
  },

  // 프로젝트 삭제
  deleteProject: async (id: number) => {
    await query("DELETE FROM projects WHERE id = $1", [id])
    return { success: true }
  },

  // 고객사별 프로젝트 조회
  getProjectsByCompany: async (companyId: number) => {
    const result = await query("SELECT * FROM projects WHERE company_id = $1 ORDER BY created_at DESC", [companyId])
    return result.rows
  },
}

// 매출 관련 함수
export const revenueQueries = {
  // 모든 매출 조회
  getAllRevenues: async () => {
    const result = await query(`
      SELECT r.*, c.name as company_name, p.name as project_name
      FROM revenues r
      JOIN companies c ON r.company_id = c.id
      JOIN projects p ON r.project_id = p.id
      ORDER BY r.payment_date DESC
    `)
    return result.rows
  },

  // 매출 상세 조회
  getRevenueById: async (id: number) => {
    const result = await query(
      `
      SELECT r.*, c.name as company_name, p.name as project_name
      FROM revenues r
      JOIN companies c ON r.company_id = c.id
      JOIN projects p ON r.project_id = p.id
      WHERE r.id = $1
    `,
      [id],
    )
    return result.rows[0]
  },

  // 매출 추가
  createRevenue: async (revenueData: any) => {
    const { company_id, project_id, amount, description, payment_date, payment_status } = revenueData
    const result = await query(
      "INSERT INTO revenues (company_id, project_id, amount, description, payment_date, payment_status) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [company_id, project_id, amount, description, payment_date, payment_status],
    )
    return result.rows[0]
  },

  // 매출 수정
  updateRevenue: async (id: number, revenueData: any) => {
    const { company_id, project_id, amount, description, payment_date, payment_status } = revenueData
    const result = await query(
      "UPDATE revenues SET company_id = $1, project_id = $2, amount = $3, description = $4, payment_date = $5, payment_status = $6, updated_at = CURRENT_TIMESTAMP WHERE id = $7 RETURNING *",
      [company_id, project_id, amount, description, payment_date, payment_status, id],
    )
    return result.rows[0]
  },

  // 매출 삭제
  deleteRevenue: async (id: number) => {
    await query("DELETE FROM revenues WHERE id = $1", [id])
    return { success: true }
  },

  // 월별 매출 통계
  getMonthlyRevenue: async (year: number) => {
    const result = await query(
      `
      SELECT 
        EXTRACT(MONTH FROM payment_date) as month,
        SUM(amount) as total_amount,
        COUNT(DISTINCT project_id) as project_count,
        COUNT(DISTINCT company_id) as company_count
      FROM revenues
      WHERE EXTRACT(YEAR FROM payment_date) = $1
      GROUP BY EXTRACT(MONTH FROM payment_date)
      ORDER BY month
    `,
      [year],
    )
    return result.rows
  },

  // 고객사별 매출 통계
  getRevenueByCompany: async () => {
    const result = await query(`
      SELECT 
        c.name as company_name,
        SUM(r.amount) as total_amount,
        COUNT(DISTINCT r.project_id) as project_count
      FROM revenues r
      JOIN companies c ON r.company_id = c.id
      GROUP BY c.name
      ORDER BY total_amount DESC
    `)
    return result.rows
  },

  // 업종별 매출 통계
  getRevenueByIndustry: async () => {
    const result = await query(`
      SELECT 
        c.industry,
        SUM(r.amount) as total_amount
      FROM revenues r
      JOIN companies c ON r.company_id = c.id
      GROUP BY c.industry
      ORDER BY total_amount DESC
    `)
    return result.rows
  },
}

// 시스템 설정 관련 함수
export const settingsQueries = {
  // 모든 설정 조회
  getAllSettings: async () => {
    const result = await query("SELECT * FROM settings")
    return result.rows.reduce((acc: any, curr) => {
      acc[curr.key] = curr.value
      return acc
    }, {})
  },

  // 설정 값 조회
  getSetting: async (key: string) => {
    const result = await query("SELECT value FROM settings WHERE key = $1", [key])
    return result.rows.length > 0 ? result.rows[0].value : null
  },

  // 설정 값 저장
  setSetting: async (key: string, value: string) => {
    const result = await query(
      "INSERT INTO settings (key, value) VALUES ($1, $2) ON CONFLICT (key) DO UPDATE SET value = $2, updated_at = CURRENT_TIMESTAMP RETURNING *",
      [key, value],
    )
    return result.rows[0]
  },

  // 설정 값 삭제
  deleteSetting: async (key: string) => {
    await query("DELETE FROM settings WHERE key = $1", [key])
    return { success: true }
  },
}

// 데이터베이스 초기화 및 연결 테스트
export async function setupDatabase() {
  const connectionTest = await testConnection()
  if (!connectionTest.connected) {
    console.error("데이터베이스 연결 실패")
    return { success: false, error: connectionTest.error }
  }

  const initResult = await initializeDatabase()
  return initResult
}
