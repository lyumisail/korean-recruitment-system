import Link from "next/link"
import { User, FileText, Briefcase, Bell } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function MemberDashboard() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex flex-1">
        <aside className="w-64 border-r bg-muted/40 hidden md:block">
          <div className="flex flex-col gap-2 p-4">
            <h2 className="text-lg font-semibold mb-4">회원 메뉴</h2>
            <Link href="/dashboard/member">
              <Button variant="ghost" className="w-full justify-start">
                <User className="mr-2 h-4 w-4" />내 정보
              </Button>
            </Link>
            <Link href="/dashboard/member/resume">
              <Button variant="ghost" className="w-full justify-start">
                <FileText className="mr-2 h-4 w-4" />
                이력서 관리
              </Button>
            </Link>
            <Link href="/dashboard/member/projects">
              <Button variant="ghost" className="w-full justify-start">
                <Briefcase className="mr-2 h-4 w-4" />
                프로젝트 현황
              </Button>
            </Link>
            <Link href="/dashboard/member/notifications">
              <Button variant="ghost" className="w-full justify-start">
                <Bell className="mr-2 h-4 w-4" />
                알림
              </Button>
            </Link>
          </div>
        </aside>
        <main className="flex-1 p-6">
          <div className="flex flex-col gap-6">
            <h1 className="text-2xl font-bold">내 정보</h1>

            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>기본 정보</CardTitle>
                  <CardDescription>개인 정보를 확인하고 관리하세요.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-20 w-20">
                      <AvatarImage src="/placeholder.svg?height=80&width=80" alt="프로필 이미지" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-xl font-medium">John Doe</h3>
                      <p className="text-muted-foreground">웹 개발자</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="font-medium">이메일</div>
                      <div className="col-span-2">john.doe@example.com</div>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="font-medium">연락처</div>
                      <div className="col-span-2">010-1234-5678</div>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="font-medium">국적</div>
                      <div className="col-span-2">미국</div>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="font-medium">거주지</div>
                      <div className="col-span-2">서울특별시 강남구</div>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="font-medium">가입일</div>
                      <div className="col-span-2">2025-01-15</div>
                    </div>
                  </div>

                  <div className="pt-2">
                    <Link href="/dashboard/member/edit-profile">
                      <Button variant="outline" className="w-full">
                        정보 수정
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>이력서 요약</CardTitle>
                  <CardDescription>이력서 정보를 확인하고 관리하세요.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-medium">경력 사항</h3>
                    <div className="space-y-2">
                      <div className="border-l-2 border-muted-foreground/20 pl-3">
                        <div className="font-medium">ABC Company</div>
                        <div className="text-sm text-muted-foreground">시니어 웹 개발자 (2022-2025)</div>
                      </div>
                      <div className="border-l-2 border-muted-foreground/20 pl-3">
                        <div className="font-medium">XYZ Tech</div>
                        <div className="text-sm text-muted-foreground">웹 개발자 (2019-2022)</div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-medium">기술 스택</h3>
                    <div className="flex flex-wrap gap-2">
                      {["JavaScript", "React", "Node.js", "TypeScript", "HTML/CSS", "MongoDB"].map((skill, i) => (
                        <span key={i} className="bg-muted px-2 py-1 rounded-md text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-medium">학력</h3>
                    <div className="border-l-2 border-muted-foreground/20 pl-3">
                      <div className="font-medium">서울대학교</div>
                      <div className="text-sm text-muted-foreground">컴퓨터 공학 학사 (2015-2019)</div>
                    </div>
                  </div>

                  <div className="pt-2">
                    <Link href="/dashboard/member/resume">
                      <Button variant="outline" className="w-full">
                        이력서 관리
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle>프로젝트 현황</CardTitle>
                  <CardDescription>참여 중인 프로젝트와 지원 현황을 확인하세요.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="current">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="current">참여 중인 프로젝트</TabsTrigger>
                      <TabsTrigger value="applied">지원한 프로젝트</TabsTrigger>
                      <TabsTrigger value="completed">완료된 프로젝트</TabsTrigger>
                    </TabsList>
                    <TabsContent value="current" className="border rounded-md mt-4">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b">
                            <th className="p-2 text-left font-medium">프로젝트명</th>
                            <th className="p-2 text-left font-medium">고객사</th>
                            <th className="p-2 text-left font-medium">시작일</th>
                            <th className="p-2 text-left font-medium">종료 예정일</th>
                            <th className="p-2 text-left font-medium">상태</th>
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            {
                              name: "웹 애플리케이션 개발",
                              company: "(주)테크솔루션",
                              start: "2025-04-01",
                              end: "2025-07-31",
                              status: "진행 중",
                            },
                            {
                              name: "모바일 앱 개발",
                              company: "글로벌시스템즈",
                              start: "2025-05-15",
                              end: "2025-08-15",
                              status: "진행 중",
                            },
                          ].map((project, i) => (
                            <tr key={i} className="border-b">
                              <td className="p-2">{project.name}</td>
                              <td className="p-2">{project.company}</td>
                              <td className="p-2">{project.start}</td>
                              <td className="p-2">{project.end}</td>
                              <td className="p-2">
                                <span className="px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                                  {project.status}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </TabsContent>
                    <TabsContent value="applied" className="border rounded-md mt-4">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b">
                            <th className="p-2 text-left font-medium">프로젝트명</th>
                            <th className="p-2 text-left font-medium">고객사</th>
                            <th className="p-2 text-left font-medium">지원일</th>
                            <th className="p-2 text-left font-medium">상태</th>
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            {
                              name: "데이터 분석 프로젝트",
                              company: "스마트테크",
                              date: "2025-05-10",
                              status: "서류 심사 중",
                            },
                            {
                              name: "UI/UX 디자인",
                              company: "퓨처이노베이션",
                              date: "2025-05-05",
                              status: "면접 예정",
                            },
                          ].map((project, i) => (
                            <tr key={i} className="border-b">
                              <td className="p-2">{project.name}</td>
                              <td className="p-2">{project.company}</td>
                              <td className="p-2">{project.date}</td>
                              <td className="p-2">
                                <span className="px-2 py-1 rounded-full text-xs bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300">
                                  {project.status}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </TabsContent>
                    <TabsContent value="completed" className="border rounded-md mt-4">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b">
                            <th className="p-2 text-left font-medium">프로젝트명</th>
                            <th className="p-2 text-left font-medium">고객사</th>
                            <th className="p-2 text-left font-medium">완료일</th>
                            <th className="p-2 text-left font-medium">평가</th>
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            { name: "웹사이트 리뉴얼", company: "디지털솔루션", date: "2025-03-31", rating: "우수" },
                            { name: "API 개발", company: "테크스타트", date: "2025-02-28", rating: "우수" },
                          ].map((project, i) => (
                            <tr key={i} className="border-b">
                              <td className="p-2">{project.name}</td>
                              <td className="p-2">{project.company}</td>
                              <td className="p-2">{project.date}</td>
                              <td className="p-2">
                                <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                                  {project.rating}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
