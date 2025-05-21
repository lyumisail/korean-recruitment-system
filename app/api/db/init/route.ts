import { NextResponse } from "next/server"
import { setupDatabase } from "@/lib/db"

export async function GET() {
  try {
    const result = await setupDatabase()

    if (result.success) {
      return NextResponse.json({ message: "데이터베이스 초기화 완료", success: true })
    } else {
      return NextResponse.json({ message: "데이터베이스 초기화 실패", error: result.error }, { status: 500 })
    }
  } catch (error) {
    console.error("데이터베이스 초기화 API 오류:", error)
    return NextResponse.json({ message: "서버 오류", error }, { status: 500 })
  }
}
