import Link from "next/link"
import { BarChart3, Users, Building, FileSpreadsheet, DollarSign, Settings } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AdminDashboard() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex flex-1">
        <aside className="w-64 border-r bg-muted/40 hidden md:block">
          <div className="flex flex-col gap-2 p-4">
            <h2 className="text-lg font-semibold mb-4">관리자 메뉴</h2>
            <Link href="/dashboard/admin">
              <Button variant="ghost" className="w-full justify-start">
                <BarChart3 className="mr-2 h-4 w-4" />
                대시보드
              </Button>
            </Link>
            <Link href="/dashboard/admin/members">
              <Button variant="ghost" className="w-full justify-start">
                <Users className="mr-2 h-4 w-4" />
                회원 관리
              </Button>
            </Link>
            <Link href="/dashboard/admin/companies">
              <Button variant="ghost" className="w-full justify-start">
                <Building className="mr-2 h-4 w-4" />
                고객사 관리
              </Button>
            </Link>
            <Link href="/dashboard/admin/projects">
              <Button variant="ghost" className="w-full justify-start">
                <FileSpreadsheet className="mr-2 h-4 w-4" />
                프로젝트 관리
              </Button>
            </Link>
            <Link href="/dashboard/admin/revenue">
              <Button variant="ghost" className="w-full justify-start">
                <DollarSign className="mr-2 h-4 w-4" />
                매출 현황
              </Button>
            </Link>
            <Link href="/dashboard/admin/settings">
              <Button variant="ghost" className="w-full justify-start">
                <Settings className="mr-2 h-4 w-4" />
                시스템 설정
              </Button>
            </Link>
          </div>
        </aside>
        <main className="flex-1 p-6">
          <div className="flex flex-col gap-6">
            <h1 className="text-2xl font-bold">관리자 대시보드</h1>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">총 회원 수</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">1,248명</div>
                  <p className="text-xs text-muted-foreground">전월 대비 +12%</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">고객사 수</CardTitle>
                  <Building className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">86개</div>
                  <p className="text-xs text-muted-foreground">전월 대비 +5%</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">진행 중인 프로젝트</CardTitle>
                  <FileSpreadsheet className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">124개</div>
                  <p className="text-xs text-muted-foreground">전월 대비 +18%</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">월간 매출</CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">₩128,350,000</div>
                  <p className="text-xs text-muted-foreground">전월 대비 +8%</p>
                </CardContent>
              </Card>
            </div>

            <Tabs defaultValue="members" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="members">최근 등록 회원</TabsTrigger>
                <TabsTrigger value="companies">최근 등록 고객사</TabsTrigger>
                <TabsTrigger value="projects">최근 등록 프로젝트</TabsTrigger>
              </TabsList>
              <TabsContent value="members" className="border rounded-md p-4">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-medium">최근 등록 회원</h3>
                    <Link href="/dashboard/admin/members">
                      <Button variant="outline" size="sm">
                        모두 보기
                      </Button>
                    </Link>
                  </div>
                  <div className="border rounded-md">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="p-2 text-left font-medium">이름</th>
                          <th className="p-2 text-left font-medium">이메일</th>
                          <th className="p-2 text-left font-medium">국적</th>
                          <th className="p-2 text-left font-medium">등록일</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { name: "김민수", email: "kim@example.com", country: "베트남", date: "2025-05-18" },
                          { name: "이지은", email: "lee@example.com", country: "필리핀", date: "2025-05-17" },
                          { name: "박준호", email: "park@example.com", country: "인도네시아", date: "2025-05-16" },
                          { name: "최유진", email: "choi@example.com", country: "태국", date: "2025-05-15" },
                        ].map((member, i) => (
                          <tr key={i} className="border-b">
                            <td className="p-2">{member.name}</td>
                            <td className="p-2">{member.email}</td>
                            <td className="p-2">{member.country}</td>
                            <td className="p-2">{member.date}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="companies" className="border rounded-md p-4">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-medium">최근 등록 고객사</h3>
                    <Link href="/dashboard/admin/companies">
                      <Button variant="outline" size="sm">
                        모두 보기
                      </Button>
                    </Link>
                  </div>
                  <div className="border rounded-md">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="p-2 text-left font-medium">회사명</th>
                          <th className="p-2 text-left font-medium">담당자</th>
                          <th className="p-2 text-left font-medium">이메일</th>
                          <th className="p-2 text-left font-medium">등록일</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          {
                            name: "(주)테크솔루션",
                            contact: "홍길동",
                            email: "hong@techsolution.com",
                            date: "2025-05-19",
                          },
                          {
                            name: "글로벌시스템즈",
                            contact: "김영희",
                            email: "kim@globalsystems.com",
                            date: "2025-05-18",
                          },
                          { name: "스마트테크", contact: "이철수", email: "lee@smarttech.com", date: "2025-05-17" },
                          {
                            name: "퓨처이노베이션",
                            contact: "박지영",
                            email: "park@futureinnovation.com",
                            date: "2025-05-16",
                          },
                        ].map((company, i) => (
                          <tr key={i} className="border-b">
                            <td className="p-2">{company.name}</td>
                            <td className="p-2">{company.contact}</td>
                            <td className="p-2">{company.email}</td>
                            <td className="p-2">{company.date}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="projects" className="border rounded-md p-4">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-medium">최근 등록 프로젝트</h3>
                    <Link href="/dashboard/admin/projects">
                      <Button variant="outline" size="sm">
                        모두 보기
                      </Button>
                    </Link>
                  </div>
                  <div className="border rounded-md">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="p-2 text-left font-medium">프로젝트명</th>
                          <th className="p-2 text-left font-medium">고객사</th>
                          <th className="p-2 text-left font-medium">필요 인원</th>
                          <th className="p-2 text-left font-medium">등록일</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { name: "웹 개발자 채용", company: "(주)테크솔루션", count: "5명", date: "2025-05-19" },
                          { name: "모바일 앱 개발", company: "글로벌시스템즈", count: "3명", date: "2025-05-18" },
                          { name: "데이터 분석가", company: "스마트테크", count: "2명", date: "2025-05-17" },
                          { name: "UI/UX 디자이너", company: "퓨처이노베이션", count: "1명", date: "2025-05-16" },
                        ].map((project, i) => (
                          <tr key={i} className="border-b">
                            <td className="p-2">{project.name}</td>
                            <td className="p-2">{project.company}</td>
                            <td className="p-2">{project.count}</td>
                            <td className="p-2">{project.date}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  )
}
