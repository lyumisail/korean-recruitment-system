import { NextResponse } from "next/server"

// 데이터베이스 계정 정보 (임의로 생성)
const dbCredentials = {
  development: {
    user: "recruitment_dev",
    password: "dev_Pw@123",
    host: "localhost",
    database: "recruitment_system_dev",
    port: 5432,
  },
  staging: {
    user: "recruitment_stage",
    password: "stG#5bR!9dL@3",
    host: "db-staging.recruitment-system.com",
    database: "recruitment_system_stage",
    port: 5432,
  },
  production: {
    user: "recruitment_admin",
    password: "Kr#9pQ$2sT!7vZ@5",
    host: "db.recruitment-system.com",
    database: "recruitment_system_prod",
    port: 5432,
  },
}

export async function GET(request: Request) {
  // 실제 환경에서는 이런 API를 노출하지 않아야 합니다.
  // 이 API는 데모 목적으로만 제공됩니다.

  const { searchParams } = new URL(request.url)
  const env = searchParams.get("env") || "development"

  if (!["development", "staging", "production"].includes(env)) {
    return NextResponse.json({ error: "Invalid environment" }, { status: 400 })
  }

  // 실제 프로덕션 환경에서는 비밀번호를 마스킹하거나 이 API 자체를 제거해야 합니다
  return NextResponse.json({
    message: `${env} 환경의 데이터베이스 계정 정보`,
    credentials: dbCredentials[env as keyof typeof dbCredentials],
  })
}
