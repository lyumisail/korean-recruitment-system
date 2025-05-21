import { type NextRequest, NextResponse } from "next/server"
import { companyQueries } from "@/lib/db"

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const id = Number.parseInt(params.id)
    const company = await companyQueries.getCompanyById(id)

    if (!company) {
      return NextResponse.json({ message: "고객사를 찾을 수 없습니다" }, { status: 404 })
    }

    return NextResponse.json(company)
  } catch (error) {
    console.error("고객사 상세 조회 API 오류:", error)
    return NextResponse.json({ message: "서버 오류", error }, { status: 500 })
  }
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const id = Number.parseInt(params.id)
    const companyData = await request.json()
    const updatedCompany = await companyQueries.updateCompany(id, companyData)

    if (!updatedCompany) {
      return NextResponse.json({ message: "고객사를 찾을 수 없습니다" }, { status: 404 })
    }

    return NextResponse.json(updatedCompany)
  } catch (error) {
    console.error("고객사 수정 API 오류:", error)
    return NextResponse.json({ message: "서버 오류", error }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const id = Number.parseInt(params.id)
    await companyQueries.deleteCompany(id)
    return NextResponse.json({ message: "고객사가 삭제되었습니다" })
  } catch (error) {
    console.error("고객사 삭제 API 오류:", error)
    return NextResponse.json({ message: "서버 오류", error }, { status: 500 })
  }
}
