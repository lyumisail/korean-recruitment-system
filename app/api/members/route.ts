import { type NextRequest, NextResponse } from "next/server"
import { memberQueries } from "@/lib/db"

export async function GET() {
  try {
    const members = await memberQueries.getAllMembers()
    return NextResponse.json(members)
  } catch (error) {
    console.error("회원 조회 API 오류:", error)
    return NextResponse.json({ message: "서버 오류", error }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const memberData = await request.json()
    const newMember = await memberQueries.createMember(memberData)
    return NextResponse.json(newMember, { status: 201 })
  } catch (error) {
    console.error("회원 생성 API 오류:", error)
    return NextResponse.json({ message: "서버 오류", error }, { status: 500 })
  }
}
