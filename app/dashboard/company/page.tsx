import type React from "react"
import Link from "next/link"
import { FileSpreadsheet, Users, MessageSquare, Plus, Search } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

export default function CompanyDashboard() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex flex-1">
        <aside className="w-64 border-r bg-muted/40 hidden md:block">
          <div className="flex flex-col gap-2 p-4">
            <h2 className="text-lg font-semibold mb-4">고객사 메뉴</h2>
            <Link href="/dashboard/company">
              <Button variant="ghost" className="w-full justify-start">
                <FileSpreadsheet className="mr-2 h-4 w-4" />
                프로젝트 관리
              </Button>
            </Link>
            <Link href="/dashboard/company/talents">
              <Button variant="ghost" className="w-full justify-start">
                <Users className="mr-2 h-4 w-4" />
                인재 검색
              </Button>
            </Link>
            <Link href="/dashboard/company/board">
              <Button variant="ghost" className="w-full justify-start">
                <MessageSquare className="mr-2 h-4 w-4" />
                업무 게시판
              </Button>
            </Link>
          </div>
        </aside>
        <main className="flex-1 p-6">
          <div className="flex flex-col gap-6">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold">프로젝트 관리</h1>
              <Link href="/dashboard/company/projects/new">
                <Button>
                  <Plus className="mr-2 h-4 w-4" />새 프로젝트
                </Button>
              </Link>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">진행 중인 프로젝트</CardTitle>
                  <FileSpreadsheet className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">8개</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">채용 완료 인원</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">12명</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">채용 진행률</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">68%</div>
                  <Progress value={68} className="mt-2" />
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>프로젝트 목록</CardTitle>
                <CardDescription>귀사의 모든 프로젝트 현황을 확인하세요.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex w-full max-w-sm items-center space-x-2">
                    <Input placeholder="프로젝트 검색..." />
                    <Button type="submit" size="icon">
                      <Search className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="border rounded-md">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="p-2 text-left font-medium">프로젝트명</th>
                          <th className="p-2 text-left font-medium">시작일</th>
                          <th className="p-2 text-left font-medium">필요 인원</th>
                          <th className="p-2 text-left font-medium">채용 인원</th>
                          <th className="p-2 text-left font-medium">상태</th>
                          <th className="p-2 text-left font-medium"></th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { name: "웹 개발자 채용", start: "2025-04-01", required: 5, hired: 3, status: "진행 중" },
                          { name: "모바일 앱 개발", start: "2025-04-15", required: 3, hired: 2, status: "진행 중" },
                          { name: "데이터 분석가", start: "2025-05-01", required: 2, hired: 1, status: "진행 중" },
                          { name: "UI/UX 디자이너", start: "2025-05-10", required: 1, hired: 0, status: "진행 중" },
                          { name: "백엔드 개발자", start: "2025-03-01", required: 4, hired: 4, status: "완료" },
                          { name: "프론트엔드 개발자", start: "2025-03-15", required: 3, hired: 2, status: "완료" },
                        ].map((project, i) => (
                          <tr key={i} className="border-b">
                            <td className="p-2">{project.name}</td>
                            <td className="p-2">{project.start}</td>
                            <td className="p-2">{project.required}명</td>
                            <td className="p-2">{project.hired}명</td>
                            <td className="p-2">
                              <span
                                className={`px-2 py-1 rounded-full text-xs ${
                                  project.status === "진행 중"
                                    ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
                                    : "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                                }`}
                              >
                                {project.status}
                              </span>
                            </td>
                            <td className="p-2">
                              <Link href={`/dashboard/company/projects/${i}`}>
                                <Button variant="ghost" size="sm">
                                  상세보기
                                </Button>
                              </Link>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}

function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
      {...props}
    />
  )
}
