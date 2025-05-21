import { type NextRequest, NextResponse } from "next/server"
import { projectQueries } from "@/lib/db"

export async function GET() {
  try {
    const projects = await projectQueries.getAllProjects()
    return NextResponse.json(projects)
  } catch (error) {
    console.error("프로젝트 조회 API 오류:", error)
    return NextResponse.json({ message: "서버 오류", error }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const projectData = await request.json()
    const newProject = await projectQueries.createProject(projectData)
    return NextResponse.json(newProject, { status: 201 })
  } catch (error) {
    console.error("프로젝트 생성 API 오류:", error)
    return NextResponse.json({ message: "서버 오류", error }, { status: 500 })
  }
}
