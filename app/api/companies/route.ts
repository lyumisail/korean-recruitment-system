import { type NextRequest, NextResponse } from "next/server"
import { companyQueries } from "@/lib/db"

export async function GET() {
  try {
    const companies = await companyQueries.getAllCompanies()
    return NextResponse.json(companies)
  } catch (error) {
    console.error("고객사 조회 API 오류:", error)
    return NextResponse.json({ message: "서버 오류", error }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const companyData = await request.json()
    const newCompany = await companyQueries.createCompany(companyData)
    return NextResponse.json(newCompany, { status: 201 })
  } catch (error) {
    console.error("고객사 생성 API 오류:", error)
    return NextResponse.json({ message: "서버 오류", error }, { status: 500 })
  }
}
