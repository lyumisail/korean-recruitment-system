import Link from "next/link"
import { ArrowLeft, Edit, Trash, Download, Briefcase, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"

// 더미 데이터 - 실제 구현에서는 데이터베이스에서 가져옴
const projectData = {
  id: 101,
  basicInfo: {
    name: "웹 개발자 채용",
    company: {
      id: 1,
      name: "(주)테크솔루션",
      contactPerson: "홍길동",
      contactEmail: "hong@techsolution.com",
      contactPhone: "010-1234-5678",
    },
    startDate: "2025-04-01",
    endDate: "2025-07-31",
    requiredCount: 5,
    hiredCount: 3,
    status: "진행 중",
    createdDate: "2025-03-15",
    lastUpdated: "2025-05-20",
  },
  details: {
    description: "자사 웹 서비스 개발 및 유지보수를 담당할 웹 개발자를 모집합니다. React, Node.js 경험자 우대.",
    requiredSkills: ["JavaScript", "React", "Node.js", "HTML/CSS", "Git"],
    preferredSkills: ["TypeScript", "Next.js", "AWS", "Docker"],
    workLocation: "서울특별시 강남구 테헤란로 123, 7층",
    workType: "정규직",
    salary: "3,500,000원 ~ 5,000,000원",
    benefits: ["4대보험", "퇴직금", "점심식대 지원", "자기계발비 지원", "유연근무제"],
    interviewProcess: ["서류 심사", "1차 기술 면접", "2차 임원 면접", "최종 합격"],
  },
  applicants: [
    {
      id: 1001,
      name: "김민수",
      email: "kim@example.com",
      phone: "010-1234-5678",
      skills: ["JavaScript", "React", "Node.js", "MongoDB"],
      experience: "3년",
      status: "합격",
      appliedDate: "2025-04-05",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 1002,
      name: "이지은",
      email: "lee@example.com",
      phone: "010-2345-6789",
      skills: ["JavaScript", "React", "Vue.js", "MySQL"],
      experience: "2년",
      status: "합격",
      appliedDate: "2025-04-07",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 1003,
      name: "박준호",
      email: "park@example.com",
      phone: "010-3456-7890",
      skills: ["JavaScript", "Angular", "Express", "PostgreSQL"],
      experience: "4년",
      status: "합격",
      appliedDate: "2025-04-10",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 1004,
      name: "최유진",
      email: "choi@example.com",
      phone: "010-4567-8901",
      skills: ["JavaScript", "React", "Redux", "Firebase"],
      experience: "2년",
      status: "면접 중",
      appliedDate: "2025-04-15",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 1005,
      name: "정민우",
      email: "jung@example.com",
      phone: "010-5678-9012",
      skills: ["JavaScript", "React", "GraphQL", "MongoDB"],
      experience: "3년",
      status: "면접 중",
      appliedDate: "2025-04-18",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 1006,
      name: "강지영",
      email: "kang@example.com",
      phone: "010-6789-0123",
      skills: ["JavaScript", "Vue.js", "Node.js", "MySQL"],
      experience: "1년",
      status: "서류 심사 중",
      appliedDate: "2025-04-20",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 1007,
      name: "윤서연",
      email: "yoon@example.com",
      phone: "010-7890-1234",
      skills: ["JavaScript", "React", "Express", "MongoDB"],
      experience: "2년",
      status: "서류 심사 중",
      appliedDate: "2025-04-22",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ],
  timeline: [
    {
      date: "2025-03-15",
      event: "프로젝트 등록",
      description: "테크솔루션에서 웹 개발자 채용 프로젝트 등록",
      author: "김관리자",
    },
    {
      date: "2025-04-01",
      event: "채용 시작",
      description: "웹 개발자 채용 공고 게시 및 지원자 모집 시작",
      author: "김관리자",
    },
    {
      date: "2025-04-15",
      event: "1차 서류 심사",
      description: "접수된 지원자 중 7명 서류 합격",
      author: "홍길동",
    },
    {
      date: "2025-04-25",
      event: "1차 면접",
      description: "서류 합격자 대상 기술 면접 진행, 5명 합격",
      author: "홍길동",
    },
    {
      date: "2025-05-10",
      event: "2차 면접",
      description: "1차 면접 합격자 대상 임원 면접 진행, 3명 최종 합격",
      author: "홍길동",
    },
    {
      date: "2025-05-20",
      event: "채용 완료",
      description: "3명 채용 완료, 추가 2명 채용 진행 중",
      author: "김관리자",
    },
  ],
}

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const { id } = params

  return (
    <div className="flex-1 space-y-4 p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/dashboard/admin/projects">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <h2 className="text-2xl font-bold">프로젝트 상세 정보</h2>
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
                <Briefcase className="h-12 w-12 text-muted-foreground" />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-medium">{projectData.basicInfo.name}</h3>
                <p className="text-sm text-muted-foreground">{projectData.basicInfo.company.name}</p>
                <div className="mt-1">
                  <Badge variant={projectData.basicInfo.status === "진행 중" ? "default" : "outline"}>
                    {projectData.basicInfo.status}
                  </Badge>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="grid grid-cols-3 gap-1">
                <div className="text-sm font-medium">고객사</div>
                <div className="col-span-2 text-sm">{projectData.basicInfo.company.name}</div>
              </div>
              <div className="grid grid-cols-3 gap-1">
                <div className="text-sm font-medium">담당자</div>
                <div className="col-span-2 text-sm">{projectData.basicInfo.company.contactPerson}</div>
              </div>
              <div className="grid grid-cols-3 gap-1">
                <div className="text-sm font-medium">연락처</div>
                <div className="col-span-2 text-sm">{projectData.basicInfo.company.contactPhone}</div>
              </div>
              <div className="grid grid-cols-3 gap-1">
                <div className="text-sm font-medium">이메일</div>
                <div className="col-span-2 text-sm">{projectData.basicInfo.company.contactEmail}</div>
              </div>
              <div className="grid grid-cols-3 gap-1">
                <div className="text-sm font-medium">시작일</div>
                <div className="col-span-2 text-sm">{projectData.basicInfo.startDate}</div>
              </div>
              <div className="grid grid-cols-3 gap-1">
                <div className="text-sm font-medium">종료일</div>
                <div className="col-span-2 text-sm">{projectData.basicInfo.endDate}</div>
              </div>
              <div className="grid grid-cols-3 gap-1">
                <div className="text-sm font-medium">필요 인원</div>
                <div className="col-span-2 text-sm">{projectData.basicInfo.requiredCount}명</div>
              </div>
              <div className="grid grid-cols-3 gap-1">
                <div className="text-sm font-medium">채용 현황</div>
                <div className="col-span-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Progress
                      value={(projectData.basicInfo.hiredCount / projectData.basicInfo.requiredCount) * 100}
                      className="h-2 w-24"
                    />
                    <span>
                      {projectData.basicInfo.hiredCount}/{projectData.basicInfo.requiredCount}
                    </span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-1">
                <div className="text-sm font-medium">등록일</div>
                <div className="col-span-2 text-sm">{projectData.basicInfo.createdDate}</div>
              </div>
              <div className="grid grid-cols-3 gap-1">
                <div className="text-sm font-medium">최근 업데이트</div>
                <div className="col-span-2 text-sm">{projectData.basicInfo.lastUpdated}</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="md:col-span-5 space-y-4">
          <Tabs defaultValue="details">
            <TabsList className="grid grid-cols-3 w-full">
              <TabsTrigger value="details">상세 정보</TabsTrigger>
              <TabsTrigger value="applicants">지원자</TabsTrigger>
              <TabsTrigger value="timeline">타임라인</TabsTrigger>
            </TabsList>

            <TabsContent value="details" className="space-y-4 mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>프로젝트 상세</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">프로젝트 설명</h4>
                    <p className="text-sm">{projectData.details.description}</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium">필수 기술</h4>
                      <div className="flex flex-wrap gap-2">
                        {projectData.details.requiredSkills.map((skill, index) => (
                          <Badge key={index} variant="default">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-sm font-medium">우대 기술</h4>
                      <div className="flex flex-wrap gap-2">
                        {projectData.details.preferredSkills.map((skill, index) => (
                          <Badge key={index} variant="outline">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium">근무 정보</h4>
                      <div className="grid grid-cols-3 gap-1">
                        <div className="text-sm font-medium">근무지</div>
                        <div className="col-span-2 text-sm">{projectData.details.workLocation}</div>
                      </div>
                      <div className="grid grid-cols-3 gap-1">
                        <div className="text-sm font-medium">고용 형태</div>
                        <div className="col-span-2 text-sm">{projectData.details.workType}</div>
                      </div>
                      <div className="grid grid-cols-3 gap-1">
                        <div className="text-sm font-medium">급여</div>
                        <div className="col-span-2 text-sm">{projectData.details.salary}</div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-sm font-medium">복리후생</h4>
                      <ul className="list-disc pl-5 text-sm space-y-1">
                        {projectData.details.benefits.map((benefit, index) => (
                          <li key={index}>{benefit}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">면접 프로세스</h4>
                    <div className="flex items-center">
                      {projectData.details.interviewProcess.map((step, index) => (
                        <div key={index} className="flex items-center">
                          <div className="flex flex-col items-center">
                            <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">
                              {index + 1}
                            </div>
                            <span className="text-xs mt-1">{step}</span>
                          </div>
                          {index < projectData.details.interviewProcess.length - 1 && (
                            <div className="w-8 h-0.5 bg-muted"></div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="applicants" className="space-y-4 mt-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>지원자 목록</CardTitle>
                  <div className="flex items-center gap-2">
                    <Select defaultValue="all">
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="상태" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">모든 상태</SelectItem>
                        <SelectItem value="screening">서류 심사 중</SelectItem>
                        <SelectItem value="interview">면접 중</SelectItem>
                        <SelectItem value="passed">합격</SelectItem>
                        <SelectItem value="failed">불합격</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button size="sm">
                      <Plus className="mr-2 h-4 w-4" />
                      지원자 추가
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="border rounded-md">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="p-2 text-left font-medium">이름</th>
                          <th className="p-2 text-left font-medium">이메일</th>
                          <th className="p-2 text-left font-medium">연락처</th>
                          <th className="p-2 text-left font-medium">기술</th>
                          <th className="p-2 text-left font-medium">경력</th>
                          <th className="p-2 text-left font-medium">지원일</th>
                          <th className="p-2 text-left font-medium">상태</th>
                          <th className="p-2 text-left font-medium"></th>
                        </tr>
                      </thead>
                      <tbody>
                        {projectData.applicants.map((applicant) => (
                          <tr key={applicant.id} className="border-b">
                            <td className="p-2">
                              <div className="flex items-center gap-2">
                                <Avatar className="h-8 w-8">
                                  <AvatarImage src={applicant.avatar || "/placeholder.svg"} alt={applicant.name} />
                                  <AvatarFallback>{applicant.name.charAt(0)}</AvatarFallback>
                                </Avatar>
                                <span>{applicant.name}</span>
                              </div>
                            </td>
                            <td className="p-2">{applicant.email}</td>
                            <td className="p-2">{applicant.phone}</td>
                            <td className="p-2">
                              <div className="flex flex-wrap gap-1">
                                {applicant.skills.slice(0, 2).map((skill, index) => (
                                  <Badge key={index} variant="outline" className="text-xs">
                                    {skill}
                                  </Badge>
                                ))}
                                {applicant.skills.length > 2 && (
                                  <Badge variant="outline" className="text-xs">
                                    +{applicant.skills.length - 2}
                                  </Badge>
                                )}
                              </div>
                            </td>
                            <td className="p-2">{applicant.experience}</td>
                            <td className="p-2">{applicant.appliedDate}</td>
                            <td className="p-2">
                              <Badge
                                variant={
                                  applicant.status === "합격"
                                    ? "default"
                                    : applicant.status === "불합격"
                                      ? "destructive"
                                      : "outline"
                                }
                              >
                                {applicant.status}
                              </Badge>
                            </td>
                            <td className="p-2">
                              <Link href={`/dashboard/admin/members/${applicant.id}`}>
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

            <TabsContent value="timeline" className="space-y-4 mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>프로젝트 타임라인</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="relative border-l border-muted pl-6 ml-3">
                    {projectData.timeline.map((event, index) => (
                      <div key={index} className="mb-8 relative">
                        <div className="absolute -left-9 mt-1.5 h-4 w-4 rounded-full border border-muted bg-background"></div>
                        <div className="flex flex-col">
                          <div className="flex items-center gap-2">
                            <h4 className="text-sm font-medium">{event.event}</h4>
                            <span className="text-xs text-muted-foreground">{event.date}</span>
                          </div>
                          <p className="text-sm mt-1">{event.description}</p>
                          <span className="text-xs text-muted-foreground mt-1">작성자: {event.author}</span>
                        </div>
                      </div>
                    ))}
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
