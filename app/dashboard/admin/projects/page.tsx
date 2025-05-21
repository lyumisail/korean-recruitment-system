import Link from "next/link"
import { Search, Download, Filter, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export default function ProjectsPage() {
  return (
    <div className="flex-1 space-y-4 p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">프로젝트 관리</h2>
        <div className="flex items-center gap-2">
          <Link href="/excel-upload?tab=projects">
            <Button variant="outline" size="sm">
              <Download className="mr-2 h-4 w-4" />
              엑셀 업로드
            </Button>
          </Link>
          <Link href="/dashboard/admin/projects/new">
            <Button size="sm">
              <Plus className="mr-2 h-4 w-4" />
              프로젝트 추가
            </Button>
          </Link>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>프로젝트 목록</CardTitle>
          <CardDescription>시스템에 등록된 모든 프로젝트 정보를 관리합니다.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex w-full max-w-sm items-center space-x-2">
                <Input placeholder="프로젝트명, 고객사 검색..." />
                <Button type="submit" size="icon">
                  <Search className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex flex-col gap-2 sm:flex-row">
                <Select defaultValue="all">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="고객사" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">모든 고객사</SelectItem>
                    <SelectItem value="techsolution">테크솔루션</SelectItem>
                    <SelectItem value="globalsystems">글로벌시스템즈</SelectItem>
                    <SelectItem value="smarttech">스마트테크</SelectItem>
                    <SelectItem value="futureinnovation">퓨처이노베이션</SelectItem>
                  </SelectContent>
                </Select>
                <Select defaultValue="all">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="상태" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">모든 상태</SelectItem>
                    <SelectItem value="active">진행 중</SelectItem>
                    <SelectItem value="completed">완료</SelectItem>
                    <SelectItem value="pending">대기 중</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" size="icon">
                  <Filter className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="border rounded-md">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="p-2 text-left font-medium">프로젝트명</th>
                    <th className="p-2 text-left font-medium">고객사</th>
                    <th className="p-2 text-left font-medium">시작일</th>
                    <th className="p-2 text-left font-medium">종료일</th>
                    <th className="p-2 text-left font-medium">필요 인원</th>
                    <th className="p-2 text-left font-medium">채용 현황</th>
                    <th className="p-2 text-left font-medium">상태</th>
                    <th className="p-2 text-left font-medium"></th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      id: 101,
                      name: "웹 개발자 채용",
                      company: "(주)테크솔루션",
                      startDate: "2025-04-01",
                      endDate: "2025-07-31",
                      requiredCount: 5,
                      hiredCount: 3,
                      status: "진행 중",
                    },
                    {
                      id: 102,
                      name: "모바일 앱 개발자",
                      company: "글로벌시스템즈",
                      startDate: "2025-05-15",
                      endDate: "2025-08-15",
                      requiredCount: 3,
                      hiredCount: 2,
                      status: "진행 중",
                    },
                    {
                      id: 103,
                      name: "데이터 분석가",
                      company: "스마트테크",
                      startDate: "2025-05-01",
                      endDate: "2025-08-31",
                      requiredCount: 2,
                      hiredCount: 1,
                      status: "진행 중",
                    },
                    {
                      id: 104,
                      name: "UI/UX 디자이너",
                      company: "퓨처이노베이션",
                      startDate: "2025-05-10",
                      endDate: "2025-07-10",
                      requiredCount: 1,
                      hiredCount: 0,
                      status: "진행 중",
                    },
                    {
                      id: 105,
                      name: "백엔드 개발자",
                      company: "(주)테크솔루션",
                      startDate: "2025-03-01",
                      endDate: "2025-04-30",
                      requiredCount: 4,
                      hiredCount: 4,
                      status: "완료",
                    },
                    {
                      id: 106,
                      name: "프론트엔드 개발자",
                      company: "글로벌시스템즈",
                      startDate: "2025-03-15",
                      endDate: "2025-04-15",
                      requiredCount: 3,
                      hiredCount: 2,
                      status: "완료",
                    },
                    {
                      id: 107,
                      name: "DevOps 엔지니어",
                      company: "스마트테크",
                      startDate: "2025-06-01",
                      endDate: "2025-09-30",
                      requiredCount: 2,
                      hiredCount: 0,
                      status: "대기 중",
                    },
                    {
                      id: 108,
                      name: "QA 엔지니어",
                      company: "퓨처이노베이션",
                      startDate: "2025-06-15",
                      endDate: "2025-08-15",
                      requiredCount: 2,
                      hiredCount: 0,
                      status: "대기 중",
                    },
                  ].map((project) => (
                    <tr key={project.id} className="border-b">
                      <td className="p-2">{project.name}</td>
                      <td className="p-2">{project.company}</td>
                      <td className="p-2">{project.startDate}</td>
                      <td className="p-2">{project.endDate}</td>
                      <td className="p-2">{project.requiredCount}명</td>
                      <td className="p-2">
                        <div className="flex items-center gap-2">
                          <Progress value={(project.hiredCount / project.requiredCount) * 100} className="h-2 w-24" />
                          <span className="text-sm">
                            {project.hiredCount}/{project.requiredCount}
                          </span>
                        </div>
                      </td>
                      <td className="p-2">
                        <Badge
                          variant={
                            project.status === "진행 중"
                              ? "default"
                              : project.status === "완료"
                                ? "outline"
                                : "secondary"
                          }
                        >
                          {project.status}
                        </Badge>
                      </td>
                      <td className="p-2">
                        <Link href={`/dashboard/admin/projects/${project.id}`}>
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

            <div className="flex items-center justify-end space-x-2">
              <Button variant="outline" size="sm">
                이전
              </Button>
              <Button variant="outline" size="sm">
                다음
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
