import Link from "next/link"
import { Search, FileText, Bell, Info } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export default function GuestDashboard() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex flex-1">
        <aside className="w-64 border-r bg-muted/40 hidden md:block">
          <div className="flex flex-col gap-2 p-4">
            <h2 className="text-lg font-semibold mb-4">비회원 메뉴</h2>
            <Link href="/dashboard/guest">
              <Button variant="ghost" className="w-full justify-start">
                <Search className="mr-2 h-4 w-4" />
                인재 검색
              </Button>
            </Link>
            <Link href="/dashboard/guest/projects">
              <Button variant="ghost" className="w-full justify-start">
                <FileText className="mr-2 h-4 w-4" />
                프로젝트 목록
              </Button>
            </Link>
            <Link href="/dashboard/guest/notices">
              <Button variant="ghost" className="w-full justify-start">
                <Bell className="mr-2 h-4 w-4" />
                공지사항
              </Button>
            </Link>
            <Link href="/dashboard/guest/about">
              <Button variant="ghost" className="w-full justify-start">
                <Info className="mr-2 h-4 w-4" />
                서비스 소개
              </Button>
            </Link>
          </div>
        </aside>
        <main className="flex-1 p-6">
          <div className="flex flex-col gap-6">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold">인재 검색</h1>
              <Link href="/register">
                <Button>회원가입</Button>
              </Link>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>검색 필터</CardTitle>
                <CardDescription>원하는 조건으로 인재를 검색하세요.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                  <div className="space-y-2">
                    <label htmlFor="skill" className="text-sm font-medium">
                      기술 스택
                    </label>
                    <select
                      id="skill"
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    >
                      <option value="">선택하세요</option>
                      <option value="javascript">JavaScript</option>
                      <option value="react">React</option>
                      <option value="nodejs">Node.js</option>
                      <option value="python">Python</option>
                      <option value="java">Java</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="experience" className="text-sm font-medium">
                      경력
                    </label>
                    <select
                      id="experience"
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    >
                      <option value="">선택하세요</option>
                      <option value="0-1">0-1년</option>
                      <option value="1-3">1-3년</option>
                      <option value="3-5">3-5년</option>
                      <option value="5-10">5-10년</option>
                      <option value="10+">10년 이상</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="country" className="text-sm font-medium">
                      국적
                    </label>
                    <select
                      id="country"
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    >
                      <option value="">선택하세요</option>
                      <option value="vietnam">베트남</option>
                      <option value="philippines">필리핀</option>
                      <option value="indonesia">인도네시아</option>
                      <option value="thailand">태국</option>
                      <option value="india">인도</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="language" className="text-sm font-medium">
                      언어 능력
                    </label>
                    <select
                      id="language"
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    >
                      <option value="">선택하세요</option>
                      <option value="korean">한국어</option>
                      <option value="english">영어</option>
                      <option value="japanese">일본어</option>
                      <option value="chinese">중국어</option>
                    </select>
                  </div>
                </div>
                <div className="mt-4 flex justify-end">
                  <Button>검색</Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>인재 목록</CardTitle>
                <CardDescription>
                  검색 결과에 해당하는 인재 목록입니다. 비회원은 제한된 정보만 확인할 수 있습니다.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: "김*수", country: "베트남", skills: ["JavaScript", "React", "Node.js"], experience: "3년" },
                    { name: "이*은", country: "필리핀", skills: ["Python", "Django", "AWS"], experience: "5년" },
                    { name: "박*호", country: "인도네시아", skills: ["Java", "Spring", "MySQL"], experience: "7년" },
                    { name: "최*진", country: "태국", skills: ["PHP", "Laravel", "Vue.js"], experience: "4년" },
                    { name: "정*민", country: "인도", skills: ["C#", ".NET", "Azure"], experience: "6년" },
                  ].map((talent, i) => (
                    <div key={i} className="flex items-start space-x-4 p-4 border rounded-md">
                      <Avatar className="h-12 w-12">
                        <AvatarFallback>{talent.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 space-y-1">
                        <div className="flex justify-between">
                          <h3 className="font-medium">{talent.name}</h3>
                          <span className="text-sm text-muted-foreground">경력: {talent.experience}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">국적: {talent.country}</p>
                        <div className="flex flex-wrap gap-1 mt-2">
                          {talent.skills.map((skill, j) => (
                            <span key={j} className="bg-muted px-2 py-0.5 rounded-md text-xs">
                              {skill}
                            </span>
                          ))}
                        </div>
                        <div className="mt-2 text-sm">
                          <p className="text-muted-foreground">연락처: ***-****-****</p>
                          <p className="text-muted-foreground">이메일: ***@*****.com</p>
                        </div>
                      </div>
                      <div>
                        <Link href="/register">
                          <Button variant="outline" size="sm">
                            상세보기
                          </Button>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex justify-center">
                  <div className="flex space-x-1">
                    {[1, 2, 3, 4, 5].map((page) => (
                      <Button key={page} variant={page === 1 ? "default" : "outline"} size="icon" className="w-8 h-8">
                        {page}
                      </Button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>회원 가입 안내</CardTitle>
                <CardDescription>회원으로 가입하시면 더 많은 정보와 기능을 이용하실 수 있습니다.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="space-y-2 border rounded-md p-4">
                    <h3 className="font-medium">상세 정보 확인</h3>
                    <p className="text-sm text-muted-foreground">
                      회원 정보, 이력서, 프로젝트 경험 등 상세 정보를 확인할 수 있습니다.
                    </p>
                  </div>
                  <div className="space-y-2 border rounded-md p-4">
                    <h3 className="font-medium">직접 연락</h3>
                    <p className="text-sm text-muted-foreground">
                      인재에게 직접 연락하여 면접 및 채용을 진행할 수 있습니다.
                    </p>
                  </div>
                  <div className="space-y-2 border rounded-md p-4">
                    <h3 className="font-medium">프로젝트 등록</h3>
                    <p className="text-sm text-muted-foreground">
                      고객사로 등록하여 프로젝트를 등록하고 인재를 채용할 수 있습니다.
                    </p>
                  </div>
                </div>
                <div className="mt-4 flex justify-center">
                  <Link href="/register">
                    <Button size="lg">지금 회원가입하기</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}
