import Link from "next/link"
import { Search, Download, Filter, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export default function MembersPage() {
  return (
    <div className="flex-1 space-y-4 p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">회원 관리</h2>
        <div className="flex items-center gap-2">
          <Link href="/excel-upload">
            <Button variant="outline" size="sm">
              <Download className="mr-2 h-4 w-4" />
              엑셀 업로드
            </Button>
          </Link>
          <Link href="/dashboard/admin/members/new">
            <Button size="sm">
              <Plus className="mr-2 h-4 w-4" />
              회원 추가
            </Button>
          </Link>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>회원 목록</CardTitle>
          <CardDescription>시스템에 등록된 모든 회원 정보를 관리합니다.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex w-full max-w-sm items-center space-x-2">
                <Input placeholder="이름, 이메일, 연락처 검색..." />
                <Button type="submit" size="icon">
                  <Search className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex flex-col gap-2 sm:flex-row">
                <Select defaultValue="all">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="국적" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">모든 국적</SelectItem>
                    <SelectItem value="vietnam">베트남</SelectItem>
                    <SelectItem value="philippines">필리핀</SelectItem>
                    <SelectItem value="indonesia">인도네시아</SelectItem>
                    <SelectItem value="thailand">태국</SelectItem>
                    <SelectItem value="india">인도</SelectItem>
                  </SelectContent>
                </Select>
                <Select defaultValue="all">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="비자 상태" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">모든 상태</SelectItem>
                    <SelectItem value="valid">유효</SelectItem>
                    <SelectItem value="expiring">만료 예정</SelectItem>
                    <SelectItem value="expired">만료됨</SelectItem>
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
                    <th className="p-2 text-left font-medium">이름</th>
                    <th className="p-2 text-left font-medium">이메일</th>
                    <th className="p-2 text-left font-medium">연락처</th>
                    <th className="p-2 text-left font-medium">국적</th>
                    <th className="p-2 text-left font-medium">비자 상태</th>
                    <th className="p-2 text-left font-medium">등록일</th>
                    <th className="p-2 text-left font-medium"></th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      id: 1,
                      name: "김민수",
                      nameEn: "Kim Min-soo",
                      nameLocal: "김민수",
                      email: "kim@example.com",
                      phone: "010-1234-5678",
                      country: "베트남",
                      visaStatus: "유효",
                      registrationDate: "2025-05-18",
                      avatar: "/placeholder.svg?height=40&width=40",
                    },
                    {
                      id: 2,
                      name: "이지은",
                      nameEn: "Lee Ji-eun",
                      nameLocal: "이지은",
                      email: "lee@example.com",
                      phone: "010-2345-6789",
                      country: "필리핀",
                      visaStatus: "만료 예정",
                      registrationDate: "2025-05-17",
                      avatar: "/placeholder.svg?height=40&width=40",
                    },
                    {
                      id: 3,
                      name: "박준호",
                      nameEn: "Park Jun-ho",
                      nameLocal: "박준호",
                      email: "park@example.com",
                      phone: "010-3456-7890",
                      country: "인도네시아",
                      visaStatus: "유효",
                      registrationDate: "2025-05-16",
                      avatar: "/placeholder.svg?height=40&width=40",
                    },
                    {
                      id: 4,
                      name: "최유진",
                      nameEn: "Choi Yu-jin",
                      nameLocal: "최유진",
                      email: "choi@example.com",
                      phone: "010-4567-8901",
                      country: "태국",
                      visaStatus: "만료됨",
                      registrationDate: "2025-05-15",
                      avatar: "/placeholder.svg?height=40&width=40",
                    },
                    {
                      id: 5,
                      name: "정민우",
                      nameEn: "Jung Min-woo",
                      nameLocal: "정민우",
                      email: "jung@example.com",
                      phone: "010-5678-9012",
                      country: "인도",
                      visaStatus: "유효",
                      registrationDate: "2025-05-14",
                      avatar: "/placeholder.svg?height=40&width=40",
                    },
                    {
                      id: 6,
                      name: "강지영",
                      nameEn: "Kang Ji-young",
                      nameLocal: "강지영",
                      email: "kang@example.com",
                      phone: "010-6789-0123",
                      country: "베트남",
                      visaStatus: "유효",
                      registrationDate: "2025-05-13",
                      avatar: "/placeholder.svg?height=40&width=40",
                    },
                    {
                      id: 7,
                      name: "윤서연",
                      nameEn: "Yoon Seo-yeon",
                      nameLocal: "윤서연",
                      email: "yoon@example.com",
                      phone: "010-7890-1234",
                      country: "필리핀",
                      visaStatus: "만료 예정",
                      registrationDate: "2025-05-12",
                      avatar: "/placeholder.svg?height=40&width=40",
                    },
                    {
                      id: 8,
                      name: "임현우",
                      nameEn: "Lim Hyun-woo",
                      nameLocal: "임현우",
                      email: "lim@example.com",
                      phone: "010-8901-2345",
                      country: "인도네시아",
                      visaStatus: "유효",
                      registrationDate: "2025-05-11",
                      avatar: "/placeholder.svg?height=40&width=40",
                    },
                  ].map((member) => (
                    <tr key={member.id} className="border-b">
                      <td className="p-2">
                        <div className="flex items-center gap-2">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={member.avatar || "/placeholder.svg"} alt={member.name} />
                            <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <span>{member.name}</span>
                        </div>
                      </td>
                      <td className="p-2">{member.email}</td>
                      <td className="p-2">{member.phone}</td>
                      <td className="p-2">{member.country}</td>
                      <td className="p-2">
                        <Badge
                          variant={
                            member.visaStatus === "유효"
                              ? "default"
                              : member.visaStatus === "만료 예정"
                                ? "outline"
                                : "destructive"
                          }
                        >
                          {member.visaStatus}
                        </Badge>
                      </td>
                      <td className="p-2">{member.registrationDate}</td>
                      <td className="p-2">
                        <Link href={`/dashboard/admin/members/${member.id}`}>
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
