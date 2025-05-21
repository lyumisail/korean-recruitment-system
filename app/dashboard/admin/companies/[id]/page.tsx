import Link from "next/link"
import { ArrowLeft, Edit, Trash, Download, Building, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

// 더미 데이터 - 실제 구현에서는 데이터베이스에서 가져옴
const companyData = {
  id: 1,
  basicInfo: {
    name: "(주)테크솔루션",
    businessNumber: "123-45-67890",
    industry: "IT/소프트웨어",
    foundedDate: "2010-03-15",
    employeeCount: 120,
    website: "https://techsolution.com",
    logo: "/placeholder.svg?height=120&width=120",
    contractStatus: "활성",
    registrationDate: "2025-05-19",
    lastUpdated: "2025-05-20",
  },
  contactInfo: {
    address: "서울특별시 강남구 테헤란로 123, 7층",
    phone: "02-123-4567",
    fax: "02-123-4568",
    email: "info@techsolution.com",
    primaryContact: {
      name: "홍길동",
      position: "인사팀장",
      phone: "010-1234-5678",
      email: "hong@techsolution.com",
    },
    secondaryContact: {
      name: "김영희",
      position: "채용담당자",
      phone: "010-2345-6789",
      email: "kim@techsolution.com",
    },
  },
  contractInfo: {
    contractType: "연간 계약",
    startDate: "2025-01-01",
    endDate: "2025-12-31",
    renewalDate: "2025-11-30",
    paymentTerms: "월 단위 정산",
    contractDocuments: ["계약서.pdf", "부속합의서.pdf"],
  },
  projects: [
    {
      id: 101,
      name: "웹 개발자 채용",
      startDate: "2025-04-01",
      endDate: "2025-07-31",
      requiredCount: 5,
      hiredCount: 3,
      status: "진행 중",
    },
    {
      id: 102,
      name: "모바일 앱 개발자",
      startDate: "2025-05-15",
      endDate: "2025-08-15",
      requiredCount: 3,
      hiredCount: 2,
      status: "진행 중",
    },
    {
      id: 103,
      name: "백엔드 개발자",
      startDate: "2025-03-01",
      endDate: "2025-04-30",
      requiredCount: 4,
      hiredCount: 4,
      status: "완료",
    },
  ],
  billingHistory: [
    {
      id: 1001,
      date: "2025-05-01",
      amount: 5000000,
      description: "4월 인력 채용 수수료",
      status: "결제완료",
      paymentMethod: "계좌이체",
    },
    {
      id: 1002,
      date: "2025-04-01",
      amount: 4500000,
      description: "3월 인력 채용 수수료",
      status: "결제완료",
      paymentMethod: "계좌이체",
    },
    {
      id: 1003,
      date: "2025-03-01",
      amount: 3800000,
      description: "2월 인력 채용 수수료",
      status: "결제완료",
      paymentMethod: "계좌이체",
    },
  ],
  notes: [
    {
      id: 2001,
      date: "2025-05-20",
      author: "김관리자",
      content: "5월 계약 갱신 관련 미팅 진행. 내년 계약 조건 협의 중.",
    },
    {
      id: 2002,
      date: "2025-04-15",
      author: "박담당자",
      content: "신규 프로젝트 관련 요구사항 접수. 6월부터 데이터 분석가 채용 예정.",
    },
  ],
}

export default function CompanyDetailPage({ params }: { params: { id: string } }) {
  const { id } = params

  return (
    <div className="flex-1 space-y-4 p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/dashboard/admin/companies">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <h2 className="text-2xl font-bold">고객사 상세 정보</h2>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Download className="mr-2 h-4 w-4" />
            내보내기
          </Button>
          <Button variant="outline" size="sm">
            <Edit className="mr-2 h-4 w-4" />
            수정
          </Button>
          <Button variant="destructive" size="sm">
            <Trash className="mr-2 h-4 w-4" />
            삭제
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-7">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>기본 정보</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-col items-center space-y-2">
              <div className="h-24 w-24 rounded-md bg-muted flex items-center justify-center">
                <Building className="h-12 w-12 text-muted-foreground" />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-medium">{companyData.basicInfo.name}</h3>
                <p className="text-sm text-muted-foreground">{companyData.contactInfo.email}</p>
                <div className="mt-1">
                  <Badge variant={companyData.basicInfo.contractStatus === "활성" ? "default" : "destructive"}>
                    {companyData.basicInfo.contractStatus}
                  </Badge>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="grid grid-cols-3 gap-1">
                <div className="text-sm font-medium">사업자등록번호</div>
                <div className="col-span-2 text-sm">{companyData.basicInfo.businessNumber}</div>
              </div>
              <div className="grid grid-cols-3 gap-1">
                <div className="text-sm font-medium">업종</div>
                <div className="col-span-2 text-sm">{companyData.basicInfo.industry}</div>
              </div>
              <div className="grid grid-cols-3 gap-1">
                <div className="text-sm font-medium">설립일</div>
                <div className="col-span-2 text-sm">{companyData.basicInfo.foundedDate}</div>
              </div>
              <div className="grid grid-cols-3 gap-1">
                <div className="text-sm font-medium">직원 수</div>
                <div className="col-span-2 text-sm">{companyData.basicInfo.employeeCount}명</div>
              </div>
              <div className="grid grid-cols-3 gap-1">
                <div className="text-sm font-medium">웹사이트</div>
                <div className="col-span-2 text-sm">{companyData.basicInfo.website}</div>
              </div>
              <div className="grid grid-cols-3 gap-1">
                <div className="text-sm font-medium">등록일</div>
                <div className="col-span-2 text-sm">{companyData.basicInfo.registrationDate}</div>
              </div>
              <div className="grid grid-cols-3 gap-1">
                <div className="text-sm font-medium">최근 업데이트</div>
                <div className="col-span-2 text-sm">{companyData.basicInfo.lastUpdated}</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="md:col-span-5 space-y-4">
          <Tabs defaultValue="contact">
            <TabsList className="grid grid-cols-4 w-full">
              <TabsTrigger value="contact">연락처 정보</TabsTrigger>
              <TabsTrigger value="contract">계약 정보</TabsTrigger>
              <TabsTrigger value="projects">프로젝트</TabsTrigger>
              <TabsTrigger value="billing">매출 정보</TabsTrigger>
            </TabsList>

            <TabsContent value="contact" className="space-y-4 mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>회사 연락처</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="grid grid-cols-3 gap-1">
                      <div className="text-sm font-medium">주소</div>
                      <div className="col-span-2 text-sm">{companyData.contactInfo.address}</div>
                    </div>
                    <div className="grid grid-cols-3 gap-1">
                      <div className="text-sm font-medium">전화번호</div>
                      <div className="col-span-2 text-sm">{companyData.contactInfo.phone}</div>
                    </div>
                    <div className="grid grid-cols-3 gap-1">
                      <div className="text-sm font-medium">팩스</div>
                      <div className="col-span-2 text-sm">{companyData.contactInfo.fax}</div>
                    </div>
                    <div className="grid grid-cols-3 gap-1">
                      <div className="text-sm font-medium">이메일</div>
                      <div className="col-span-2 text-sm">{companyData.contactInfo.email}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>담당자 정보</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">주 담당자</h4>
                    <div className="grid grid-cols-3 gap-1">
                      <div className="text-sm font-medium">이름</div>
                      <div className="col-span-2 text-sm">{companyData.contactInfo.primaryContact.name}</div>
                    </div>
                    <div className="grid grid-cols-3 gap-1">
                      <div className="text-sm font-medium">직책</div>
                      <div className="col-span-2 text-sm">{companyData.contactInfo.primaryContact.position}</div>
                    </div>
                    <div className="grid grid-cols-3 gap-1">
                      <div className="text-sm font-medium">연락처</div>
                      <div className="col-span-2 text-sm">{companyData.contactInfo.primaryContact.phone}</div>
                    </div>
                    <div className="grid grid-cols-3 gap-1">
                      <div className="text-sm font-medium">이메일</div>
                      <div className="col-span-2 text-sm">{companyData.contactInfo.primaryContact.email}</div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">부 담당자</h4>
                    <div className="grid grid-cols-3 gap-1">
                      <div className="text-sm font-medium">이름</div>
                      <div className="col-span-2 text-sm">{companyData.contactInfo.secondaryContact.name}</div>
                    </div>
                    <div className="grid grid-cols-3 gap-1">
                      <div className="text-sm font-medium">직책</div>
                      <div className="col-span-2 text-sm">{companyData.contactInfo.secondaryContact.position}</div>
                    </div>
                    <div className="grid grid-cols-3 gap-1">
                      <div className="text-sm font-medium">연락처</div>
                      <div className="col-span-2 text-sm">{companyData.contactInfo.secondaryContact.phone}</div>
                    </div>
                    <div className="grid grid-cols-3 gap-1">
                      <div className="text-sm font-medium">이메일</div>
                      <div className="col-span-2 text-sm">{companyData.contactInfo.secondaryContact.email}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="contract" className="space-y-4 mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>계약 정보</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="grid grid-cols-3 gap-1">
                      <div className="text-sm font-medium">계약 유형</div>
                      <div className="col-span-2 text-sm">{companyData.contractInfo.contractType}</div>
                    </div>
                    <div className="grid grid-cols-3 gap-1">
                      <div className="text-sm font-medium">계약 시작일</div>
                      <div className="col-span-2 text-sm">{companyData.contractInfo.startDate}</div>
                    </div>
                    <div className="grid grid-cols-3 gap-1">
                      <div className="text-sm font-medium">계약 종료일</div>
                      <div className="col-span-2 text-sm">{companyData.contractInfo.endDate}</div>
                    </div>
                    <div className="grid grid-cols-3 gap-1">
                      <div className="text-sm font-medium">갱신 예정일</div>
                      <div className="col-span-2 text-sm">{companyData.contractInfo.renewalDate}</div>
                    </div>
                    <div className="grid grid-cols-3 gap-1">
                      <div className="text-sm font-medium">결제 조건</div>
                      <div className="col-span-2 text-sm">{companyData.contractInfo.paymentTerms}</div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">계약 문서</h4>
                    <ul className="list-disc pl-5 text-sm space-y-1">
                      {companyData.contractInfo.contractDocuments.map((doc, index) => (
                        <li key={index}>
                          <a href="#" className="text-blue-600 hover:underline">
                            {doc}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>메모</CardTitle>
                </CardHeader>
                <CardContent>
                  {companyData.notes.map((note) => (
                    <div key={note.id} className="border-l-2 border-muted-foreground/20 pl-3 mb-4">
                      <div className="flex justify-between items-center mb-1">
                        <div className="font-medium">{note.author}</div>
                        <div className="text-sm text-muted-foreground">{note.date}</div>
                      </div>
                      <p className="text-sm">{note.content}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="projects" className="space-y-4 mt-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>프로젝트 목록</CardTitle>
                  <Link href={`/dashboard/admin/companies/${id}/projects/new`}>
                    <Button size="sm">
                      <Plus className="mr-2 h-4 w-4" />
                      프로젝트 추가
                    </Button>
                  </Link>
                </CardHeader>
                <CardContent>
                  <div className="border rounded-md">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="p-2 text-left font-medium">프로젝트명</th>
                          <th className="p-2 text-left font-medium">시작일</th>
                          <th className="p-2 text-left font-medium">종료일</th>
                          <th className="p-2 text-left font-medium">필요 인원</th>
                          <th className="p-2 text-left font-medium">채용 인원</th>
                          <th className="p-2 text-left font-medium">상태</th>
                          <th className="p-2 text-left font-medium"></th>
                        </tr>
                      </thead>
                      <tbody>
                        {companyData.projects.map((project) => (
                          <tr key={project.id} className="border-b">
                            <td className="p-2">{project.name}</td>
                            <td className="p-2">{project.startDate}</td>
                            <td className="p-2">{project.endDate}</td>
                            <td className="p-2">{project.requiredCount}명</td>
                            <td className="p-2">{project.hiredCount}명</td>
                            <td className="p-2">
                              <Badge variant={project.status === "진행 중" ? "default" : "outline"}>
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
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="billing" className="space-y-4 mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>매출 내역</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="border rounded-md">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="p-2 text-left font-medium">날짜</th>
                          <th className="p-2 text-left font-medium">금액</th>
                          <th className="p-2 text-left font-medium">내용</th>
                          <th className="p-2 text-left font-medium">결제 방법</th>
                          <th className="p-2 text-left font-medium">상태</th>
                        </tr>
                      </thead>
                      <tbody>
                        {companyData.billingHistory.map((billing) => (
                          <tr key={billing.id} className="border-b">
                            <td className="p-2">{billing.date}</td>
                            <td className="p-2">{billing.amount.toLocaleString()}원</td>
                            <td className="p-2">{billing.description}</td>
                            <td className="p-2">{billing.paymentMethod}</td>
                            <td className="p-2">
                              <Badge variant={billing.status === "결제완료" ? "default" : "destructive"}>
                                {billing.status}
                              </Badge>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
