import { type NextRequest, NextResponse } from "next/server"
import { memberQueries } from "@/lib/db"

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const id = Number.parseInt(params.id)
    const member = await memberQueries.getMemberById(id)

    if (!member) {
      return NextResponse.json({ message: "회원을 찾을 수 없습니다" }, { status: 404 })
    }

    return NextResponse.json(member)
  } catch (error) {
    console.error("회원 상세 조회 API 오류:", error)
    return NextResponse.json({ message: "서버 오류", error }, { status: 500 })
  }
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const id = Number.parseInt(params.id)
    const memberData = await request.json()
    const updatedMember = await memberQueries.updateMember(id, memberData)

    if (!updatedMember) {
      return NextResponse.json({ message: "회원을 찾을 수 없습니다" }, { status: 404 })
    }

    return NextResponse.json(updatedMember)
  } catch (error) {
    console.error("회원 수정 API 오류:", error)
    return NextResponse.json({ message: "서버 오류", error }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const id = Number.parseInt(params.id)
    await memberQueries.deleteMember(id)
    return NextResponse.json({ message: "회원이 삭제되었습니다" })
  } catch (error) {
    console.error("회원 삭제 API 오류:", error)
    return NextResponse.json({ message: "서버 오류", error }, { status: 500 })
  }
}
