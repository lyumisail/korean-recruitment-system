import Link from "next/link"
import { Search, Download, Filter, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"

export default function CompaniesPage() {
  return (
    <div className="flex-1 space-y-4 p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">고객사 관리</h2>
        <div className="flex items-center gap-2">
          <Link href="/excel-upload?tab=companies">
            <Button variant="outline" size="sm">
              <Download className="mr-2 h-4 w-4" />
              엑셀 업로드
            </Button>
          </Link>
          <Link href="/dashboard/admin/companies/new">
            <Button size="sm">
              <Plus className="mr-2 h-4 w-4" />
              고객사 추가
            </Button>
          </Link>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>고객사 목록</CardTitle>
          <CardDescription>시스템에 등록된 모든 고객사 정보를 관리합니다.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex w-full max-w-sm items-center space-x-2">
                <Input placeholder="회사명, 담당자, 연락처 검색..." />
                <Button type="submit" size="icon">
                  <Search className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex flex-col gap-2 sm:flex-row">
                <Select defaultValue="all">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="업종" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">모든 업종</SelectItem>
                    <SelectItem value="it">IT/소프트웨어</SelectItem>
                    <SelectItem value="manufacturing">제조업</SelectItem>
                    <SelectItem value="service">서비스업</SelectItem>
                    <SelectItem value="construction">건설업</SelectItem>
                    <SelectItem value="finance">금융업</SelectItem>
                  </SelectContent>
                </Select>
                <Select defaultValue="all">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="계약 상태" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">모든 상태</SelectItem>
                    <SelectItem value="active">활성</SelectItem>
                    <SelectItem value="pending">대기중</SelectItem>
                    <SelectItem value="expired">만료</SelectItem>
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
                    <th className="p-2 text-left font-medium">회사명</th>
                    <th className="p-2 text-left font-medium">사업자등록번호</th>
                    <th className="p-2 text-left font-medium">담당자</th>
                    <th className="p-2 text-left font-medium">연락처</th>
                    <th className="p-2 text-left font-medium">업종</th>
                    <th className="p-2 text-left font-medium">계약 상태</th>
                    <th className="p-2 text-left font-medium">등록일</th>
                    <th className="p-2 text-left font-medium"></th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      id: 1,
                      name: "(주)테크솔루션",
                      businessNumber: "123-45-67890",
                      contactPerson: "홍길동",
                      phone: "010-1234-5678",
                      email: "hong@techsolution.com",
                      industry: "IT/소프트웨어",
                      contractStatus: "활성",
                      registrationDate: "2025-05-19",
                    },
                    {
                      id: 2,
                      name: "글로벌시스템즈",
                      businessNumber: "234-56-78901",
                      contactPerson: "김영희",
                      phone: "010-2345-6789",
                      email: "kim@globalsystems.com",
                      industry: "IT/소프트웨어",
                      contractStatus: "활성",
                      registrationDate: "2025-05-18",
                    },
                    {
                      id: 3,
                      name: "스마트테크",
                      businessNumber: "345-67-89012",
                      contactPerson: "이철수",
                      phone: "010-3456-7890",
                      email: "lee@smarttech.com",
                      industry: "제조업",
                      contractStatus: "활성",
                      registrationDate: "2025-05-17",
                    },
                    {
                      id: 4,
                      name: "퓨처이노베이션",
                      businessNumber: "456-78-90123",
                      contactPerson: "박지영",
                      phone: "010-4567-8901",
                      email: "park@futureinnovation.com",
                      industry: "서비스업",
                      contractStatus: "대기중",
                      registrationDate: "2025-05-16",
                    },
                    {
                      id: 5,
                      name: "건설산업",
                      businessNumber: "567-89-01234",
                      contactPerson: "최민준",
                      phone: "010-5678-9012",
                      email: "choi@construction.com",
                      industry: "건설업",
                      contractStatus: "활성",
                      registrationDate: "2025-05-15",
                    },
                    {
                      id: 6,
                      name: "금융파트너스",
                      businessNumber: "678-90-12345",
                      contactPerson: "정수민",
                      phone: "010-6789-0123",
                      email: "jung@financepartners.com",
                      industry: "금융업",
                      contractStatus: "만료",
                      registrationDate: "2025-05-14",
                    },
                    {
                      id: 7,
                      name: "디지털솔루션",
                      businessNumber: "789-01-23456",
                      contactPerson: "강현우",
                      phone: "010-7890-1234",
                      email: "kang@digitalsolution.com",
                      industry: "IT/소프트웨어",
                      contractStatus: "활성",
                      registrationDate: "2025-05-13",
                    },
                    {
                      id: 8,
                      name: "메디컬시스템",
                      businessNumber: "890-12-34567",
                      contactPerson: "윤서연",
                      phone: "010-8901-2345",
                      email: "yoon@medicalsystem.com",
                      industry: "서비스업",
                      contractStatus: "활성",
                      registrationDate: "2025-05-12",
                    },
                  ].map((company) => (
                    <tr key={company.id} className="border-b">
                      <td className="p-2">{company.name}</td>
                      <td className="p-2">{company.businessNumber}</td>
                      <td className="p-2">{company.contactPerson}</td>
                      <td className="p-2">{company.phone}</td>
                      <td className="p-2">{company.industry}</td>
                      <td className="p-2">
                        <Badge
                          variant={
                            company.contractStatus === "활성"
                              ? "default"
                              : company.contractStatus === "대기중"
                                ? "outline"
                                : "destructive"
                          }
                        >
                          {company.contractStatus}
                        </Badge>
                      </td>
                      <td className="p-2">{company.registrationDate}</td>
                      <td className="p-2">
                        <Link href={`/dashboard/admin/companies/${company.id}`}>
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
