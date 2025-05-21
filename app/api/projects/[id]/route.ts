import { type NextRequest, NextResponse } from "next/server"
import { projectQueries } from "@/lib/db"

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const id = Number.parseInt(params.id)
    const project = await projectQueries.getProjectById(id)

    if (!project) {
      return NextResponse.json({ message: "프로젝트를 찾을 수 없습니다" }, { status: 404 })
    }

    return NextResponse.json(project)
  } catch (error) {
    console.error("프로젝트 상세 조회 API 오류:", error)
    return NextResponse.json({ message: "서버 오류", error }, { status: 500 })
  }
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const id = Number.parseInt(params.id)
    const projectData = await request.json()
    const updatedProject = await projectQueries.updateProject(id, projectData)

    if (!updatedProject) {
      return NextResponse.json({ message: "프로젝트를 찾을 수 없습니다" }, { status: 404 })
    }

    return NextResponse.json(updatedProject)
  } catch (error) {
    console.error("프로젝트 수정 API 오류:", error)
    return NextResponse.json({ message: "서버 오류", error }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const id = Number.parseInt(params.id)
    await projectQueries.deleteProject(id)
    return NextResponse.json({ message: "프로젝트가 삭제되었습니다" })
  } catch (error) {
    console.error("프로젝트 삭제 API 오류:", error)
    return NextResponse.json({ message: "서버 오류", error }, { status: 500 })
  }
}
