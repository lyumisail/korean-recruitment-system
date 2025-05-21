import Link from "next/link"
import { ArrowLeft, Edit, Trash, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

// 더미 데이터 - 실제 구현에서는 데이터베이스에서 가져옴
const memberData = {
  id: 1,
  personalInfo: {
    name: "김민수",
    nameEn: "Kim Min-soo",
    nameLocal: "Nguyễn Văn A",
    gender: "남성",
    birthDate: "1990-05-15",
    nationality: "베트남",
    passportNumber: "M12345678",
    originCountry: "베트남",
    nativeLanguage: "베트남어",
    currentAddress: "베트남 하노이시 바딘구 123번지",
    koreanAddress: "서울특별시 강남구 테헤란로 123, 456호",
    contactLocal: "+84-123-456-789",
    contactKorea: "010-1234-5678",
    email: "kim@example.com",
    profileImage: "/placeholder.svg?height=120&width=120",
    emergencyContact: "Nguyễn Văn B / +84-987-654-321 (부모)",
  },
  education: {
    highestEducation: "대학",
    schoolName: "하노이 국립대학교",
    major: "컴퓨터 공학",
    graduationDate: "2015-06-30",
    certificateVerified: true,
    topikLevel: "5급",
  },
  certifications: [
    {
      name: "정보처리기사",
      issuingOrganization: "한국산업인력공단",
      issuingCountry: "대한민국",
      issueDate: "2016-08-15",
      expiryDate: "없음",
    },
    {
      name: "TOEIC",
      issuingOrganization: "ETS",
      issuingCountry: "미국",
      issueDate: "2017-03-20",
      expiryDate: "2019-03-20",
      score: "850점",
    },
  ],
  skills: ["Java", "Spring", "JavaScript", "React", "MySQL", "AWS"],
  visaInfo: {
    visaType: "E-7",
    issueDate: "2023-01-15",
    expiryDate: "2025-01-14",
    status: "유효",
    visaNumber: "12345-67890",
    residenceStatus: "합법체류",
  },
  employmentHistory: [
    {
      companyName: "테크솔루션",
      address: "서울특별시 강남구 테헤란로 456",
      position: "웹 개발자",
      startDate: "2023-02-01",
      endDate: "현재",
      contractVerified: true,
      salary: "3,500,000원",
      employmentType: "정규직",
    },
    {
      companyName: "VietTech",
      address: "베트남 하노이시 바딘구 456번지",
      position: "주니어 개발자",
      startDate: "2020-07-01",
      endDate: "2023-01-15",
      contractVerified: true,
      salary: "$1,200",
      employmentType: "정규직",
    },
  ],
  entryInfo: {
    firstEntryDate: "2023-01-10",
    entryRoute: "인천국제공항 / VN415",
    entryVisaStatus: "E-7",
    stayExtensionHistory: [
      {
        applicationDate: "2024-01-05",
        approvalDate: "2024-01-10",
        extendedUntil: "2025-01-14",
      },
    ],
  },
  livingInfo: {
    accommodationType: "원룸",
    contractVerified: true,
    monthlyRent: "600,000원",
    telecomProvider: "KT",
    bankAccount: "신한은행",
    creditCard: "신한카드",
    insurance: "국민건강보험, 삼성화재 상해보험",
    residentialArea: "강남구",
  },
  educationHistory: [
    {
      institutionName: "서울한국어학당",
      courseName: "비즈니스 한국어 과정",
      startDate: "2023-03-01",
      endDate: "2023-08-30",
      completed: true,
      grade: "우수",
    },
  ],
  visaServiceHistory: [
    {
      applicationDate: "2022-12-01",
      status: "완료",
      paymentVerified: true,
      completionDate: "2023-01-05",
    },
  ],
  serviceUsage: {
    shoppingHistory: ["2023-05-15: 전자제품 구매", "2023-07-20: 의류 구매"],
    telecomHistory: ["2023-02-01: KT 모바일 요금제 가입"],
    insuranceHistory: ["2023-02-10: 삼성화재 상해보험 가입"],
    adClickHistory: ["2023-04-05: 주택 임대 광고", "2023-06-15: 한국어 학습 앱 광고"],
    financialProducts: ["2023-03-01: 신한은행 외국인 전용 계좌", "2023-04-10: 신한카드 체크카드"],
  },
  preferences: {
    interestedJobs: ["웹 개발", "모바일 앱 개발", "데이터 분석"],
    interestedServices: ["주택 임대", "언어 교육", "취업 알선"],
    referralCode: "MINSOO123",
    notificationConsent: true,
    marketingConsent: true,
  },
  registrationDate: "2023-01-15",
  lastUpdated: "2024-05-10",
}

export default function MemberDetailPage({ params }: { params: { id: string } }) {
  const { id } = params

  return (
    <div className="flex-1 space-y-4 p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/dashboard/admin/members">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <h2 className="text-2xl font-bold">회원 상세 정보</h2>
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
              <Avatar className="h-24 w-24">
                <AvatarImage
                  src={memberData.personalInfo.profileImage || "/placeholder.svg"}
                  alt={memberData.personalInfo.name}
                />
                <AvatarFallback>{memberData.personalInfo.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="text-center">
                <h3 className="text-xl font-medium">{memberData.personalInfo.name}</h3>
                <p className="text-sm text-muted-foreground">{memberData.personalInfo.email}</p>
                <div className="mt-1">
                  <Badge variant="outline">{memberData.visaInfo.visaType} 비자</Badge>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="grid grid-cols-3 gap-1">
                <div className="text-sm font-medium">이름(한글)</div>
                <div className="col-span-2 text-sm">{memberData.personalInfo.name}</div>
              </div>
              <div className="grid grid-cols-3 gap-1">
                <div className="text-sm font-medium">이름(영문)</div>
                <div className="col-span-2 text-sm">{memberData.personalInfo.nameEn}</div>
              </div>
              <div className="grid grid-cols-3 gap-1">
                <div className="text-sm font-medium">이름(현지어)</div>
                <div className="col-span-2 text-sm">{memberData.personalInfo.nameLocal}</div>
              </div>
              <div className="grid grid-cols-3 gap-1">
                <div className="text-sm font-medium">성별</div>
                <div className="col-span-2 text-sm">{memberData.personalInfo.gender}</div>
              </div>
              <div className="grid grid-cols-3 gap-1">
                <div className="text-sm font-medium">생년월일</div>
                <div className="col-span-2 text-sm">{memberData.personalInfo.birthDate}</div>
              </div>
              <div className="grid grid-cols-3 gap-1">
                <div className="text-sm font-medium">국적</div>
                <div className="col-span-2 text-sm">{memberData.personalInfo.nationality}</div>
              </div>
              <div className="grid grid-cols-3 gap-1">
                <div className="text-sm font-medium">연락처(한국)</div>
                <div className="col-span-2 text-sm">{memberData.personalInfo.contactKorea}</div>
              </div>
              <div className="grid grid-cols-3 gap-1">
                <div className="text-sm font-medium">연락처(현지)</div>
                <div className="col-span-2 text-sm">{memberData.personalInfo.contactLocal}</div>
              </div>
              <div className="grid grid-cols-3 gap-1">
                <div className="text-sm font-medium">이메일</div>
                <div className="col-span-2 text-sm">{memberData.personalInfo.email}</div>
              </div>
              <div className="grid grid-cols-3 gap-1">
                <div className="text-sm font-medium">등록일</div>
                <div className="col-span-2 text-sm">{memberData.registrationDate}</div>
              </div>
              <div className="grid grid-cols-3 gap-1">
                <div className="text-sm font-medium">최근 업데이트</div>
                <div className="col-span-2 text-sm">{memberData.lastUpdated}</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="md:col-span-5 space-y-4">
          <Tabs defaultValue="personal">
            <TabsList className="grid grid-cols-5 w-full">
              <TabsTrigger value="personal">개인정보</TabsTrigger>
              <TabsTrigger value="education">학력/자격증</TabsTrigger>
              <TabsTrigger value="visa">비자/체류</TabsTrigger>
              <TabsTrigger value="employment">고용정보</TabsTrigger>
              <TabsTrigger value="living">생활정보</TabsTrigger>
            </TabsList>

            <TabsContent value="personal" className="space-y-4 mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>개인 상세 정보</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium">여권 정보</h4>
                      <div className="grid grid-cols-3 gap-1">
                        <div className="text-sm font-medium">여권 번호</div>
                        <div className="col-span-2 text-sm">{memberData.personalInfo.passportNumber}</div>
                      </div>
                      <div className="grid grid-cols-3 gap-1">
                        <div className="text-sm font-medium">출신 국가</div>
                        <div className="col-span-2 text-sm">{memberData.personalInfo.originCountry}</div>
                      </div>
                      <div className="grid grid-cols-3 gap-1">
                        <div className="text-sm font-medium">모국어</div>
                        <div className="col-span-2 text-sm">{memberData.personalInfo.nativeLanguage}</div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-sm font-medium">주소 정보</h4>
                      <div className="grid grid-cols-3 gap-1">
                        <div className="text-sm font-medium">현지 주소</div>
                        <div className="col-span-2 text-sm">{memberData.personalInfo.currentAddress}</div>
                      </div>
                      <div className="grid grid-cols-3 gap-1">
                        <div className="text-sm font-medium">한국 주소</div>
                        <div className="col-span-2 text-sm">{memberData.personalInfo.koreanAddress}</div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">긴급 연락처</h4>
                    <div className="grid grid-cols-3 gap-1">
                      <div className="text-sm font-medium">긴급 연락처</div>
                      <div className="col-span-2 text-sm">{memberData.personalInfo.emergencyContact}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>선호 정보</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium">관심 분야</h4>
                      <div className="grid grid-cols-3 gap-1">
                        <div className="text-sm font-medium">관심 직군</div>
                        <div className="col-span-2 text-sm">{memberData.preferences.interestedJobs.join(", ")}</div>
                      </div>
                      <div className="grid grid-cols-3 gap-1">
                        <div className="text-sm font-medium">관심 서비스</div>
                        <div className="col-span-2 text-sm">{memberData.preferences.interestedServices.join(", ")}</div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-sm font-medium">마케팅 정보</h4>
                      <div className="grid grid-cols-3 gap-1">
                        <div className="text-sm font-medium">추천인 코드</div>
                        <div className="col-span-2 text-sm">{memberData.preferences.referralCode}</div>
                      </div>
                      <div className="grid grid-cols-3 gap-1">
                        <div className="text-sm font-medium">알림 수신 동의</div>
                        <div className="col-span-2 text-sm">
                          {memberData.preferences.notificationConsent ? "동의함" : "동의하지 않음"}
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-1">
                        <div className="text-sm font-medium">마케팅 수신 동의</div>
                        <div className="col-span-2 text-sm">
                          {memberData.preferences.marketingConsent ? "동의함" : "동의하지 않음"}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="education" className="space-y-4 mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>학력 정보</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="grid grid-cols-3 gap-1">
                      <div className="text-sm font-medium">최종학력</div>
                      <div className="col-span-2 text-sm">{memberData.education.highestEducation}</div>
                    </div>
                    <div className="grid grid-cols-3 gap-1">
                      <div className="text-sm font-medium">학교명</div>
                      <div className="col-span-2 text-sm">{memberData.education.schoolName}</div>
                    </div>
                    <div className="grid grid-cols-3 gap-1">
                      <div className="text-sm font-medium">전공</div>
                      <div className="col-span-2 text-sm">{memberData.education.major}</div>
                    </div>
                    <div className="grid grid-cols-3 gap-1">
                      <div className="text-sm font-medium">졸업일자</div>
                      <div className="col-span-2 text-sm">{memberData.education.graduationDate}</div>
                    </div>
                    <div className="grid grid-cols-3 gap-1">
                      <div className="text-sm font-medium">학위증명 여부</div>
                      <div className="col-span-2 text-sm">
                        {memberData.education.certificateVerified ? "확인됨" : "미확인"}
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-1">
                      <div className="text-sm font-medium">한국어 능력</div>
                      <div className="col-span-2 text-sm">{memberData.education.topikLevel}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>자격증 및 기술</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <h4 className="text-sm font-medium">자격증</h4>
                    {memberData.certifications.map((cert, index) => (
                      <div key={index} className="border-l-2 border-muted-foreground/20 pl-3 space-y-1">
                        <div className="font-medium">{cert.name}</div>
                        <div className="text-sm text-muted-foreground">
                          발급기관: {cert.issuingOrganization} ({cert.issuingCountry})
                        </div>
                        <div className="text-sm text-muted-foreground">
                          발급일: {cert.issueDate} | 유효기간: {cert.expiryDate}
                        </div>
                        {cert.score && <div className="text-sm text-muted-foreground">점수: {cert.score}</div>}
                      </div>
                    ))}
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">기술 스택</h4>
                    <div className="flex flex-wrap gap-2">
                      {memberData.skills.map((skill, index) => (
                        <Badge key={index} variant="outline">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>교육 이수 정보</CardTitle>
                </CardHeader>
                <CardContent>
                  {memberData.educationHistory.map((edu, index) => (
                    <div key={index} className="border-l-2 border-muted-foreground/20 pl-3 space-y-1">
                      <div className="font-medium">{edu.institutionName}</div>
                      <div className="text-sm text-muted-foreground">{edu.courseName}</div>
                      <div className="text-sm text-muted-foreground">
                        {edu.startDate} ~ {edu.endDate}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        이수 여부: {edu.completed ? "완료" : "미완료"} | 평가: {edu.grade}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="visa" className="space-y-4 mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>비자 정보</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="grid grid-cols-3 gap-1">
                      <div className="text-sm font-medium">비자 종류</div>
                      <div className="col-span-2 text-sm">{memberData.visaInfo.visaType}</div>
                    </div>
                    <div className="grid grid-cols-3 gap-1">
                      <div className="text-sm font-medium">발급일</div>
                      <div className="col-span-2 text-sm">{memberData.visaInfo.issueDate}</div>
                    </div>
                    <div className="grid grid-cols-3 gap-1">
                      <div className="text-sm font-medium">만료일</div>
                      <div className="col-span-2 text-sm">{memberData.visaInfo.expiryDate}</div>
                    </div>
                    <div className="grid grid-cols-3 gap-1">
                      <div className="text-sm font-medium">상태</div>
                      <div className="col-span-2 text-sm">
                        <Badge
                          variant={
                            memberData.visaInfo.status === "유효"
                              ? "default"
                              : memberData.visaInfo.status === "만료 예정"
                                ? "outline"
                                : "destructive"
                          }
                        >
                          {memberData.visaInfo.status}
                        </Badge>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-1">
                      <div className="text-sm font-medium">비자 번호</div>
                      <div className="col-span-2 text-sm">{memberData.visaInfo.visaNumber}</div>
                    </div>
                    <div className="grid grid-cols-3 gap-1">
                      <div className="text-sm font-medium">체류자격</div>
                      <div className="col-span-2 text-sm">{memberData.visaInfo.residenceStatus}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>입국 및 체류 정보</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="grid grid-cols-3 gap-1">
                      <div className="text-sm font-medium">첫 입국일</div>
                      <div className="col-span-2 text-sm">{memberData.entryInfo.firstEntryDate}</div>
                    </div>
                    <div className="grid grid-cols-3 gap-1">
                      <div className="text-sm font-medium">입국 경로</div>
                      <div className="col-span-2 text-sm">{memberData.entryInfo.entryRoute}</div>
                    </div>
                    <div className="grid grid-cols-3 gap-1">
                      <div className="text-sm font-medium">입국 비자 상태</div>
                      <div className="col-span-2 text-sm">{memberData.entryInfo.entryVisaStatus}</div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">체류 연장 이력</h4>
                    {memberData.entryInfo.stayExtensionHistory.map((extension, index) => (
                      <div key={index} className="border-l-2 border-muted-foreground/20 pl-3 space-y-1">
                        <div className="text-sm">신청일: {extension.applicationDate}</div>
                        <div className="text-sm">승인일: {extension.approvalDate}</div>
                        <div className="text-sm">연장기간: {extension.extendedUntil}까지</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>비자 및 입국대행 서비스 이용 이력</CardTitle>
                </CardHeader>
                <CardContent>
                  {memberData.visaServiceHistory.map((service, index) => (
                    <div key={index} className="border-l-2 border-muted-foreground/20 pl-3 space-y-1">
                      <div className="text-sm">신청일: {service.applicationDate}</div>
                      <div className="text-sm">상태: {service.status}</div>
                      <div className="text-sm">
                        결제 여부: {service.paymentVerified ? "완료" : "미완료"} | 완료일: {service.completionDate}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="employment" className="space-y-4 mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>고용 정보</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="grid grid-cols-3 gap-1">
                      <div className="text-sm font-medium">현재 취업 상태</div>
                      <div className="col-span-2 text-sm">
                        {memberData.employmentHistory[0].endDate === "현재" ? "재직 중" : "퇴사"}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">고용 이력</h4>
                    {memberData.employmentHistory.map((job, index) => (
                      <div key={index} className="border-l-2 border-muted-foreground/20 pl-3 space-y-1">
                        <div className="font-medium">{job.companyName}</div>
                        <div className="text-sm text-muted-foreground">{job.position}</div>
                        <div className="text-sm text-muted-foreground">
                          {job.startDate} ~ {job.endDate}
                        </div>
                        <div className="text-sm text-muted-foreground">주소: {job.address}</div>
                        <div className="text-sm text-muted-foreground">
                          계약서 확인: {job.contractVerified ? "확인됨" : "미확인"}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          급여: {job.salary} | 고용 형태: {job.employmentType}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="living" className="space-y-4 mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>한국 내 생활 정보</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium">주거 정보</h4>
                      <div className="grid grid-cols-3 gap-1">
                        <div className="text-sm font-medium">숙소 유형</div>
                        <div className="col-span-2 text-sm">{memberData.livingInfo.accommodationType}</div>
                      </div>
                      <div className="grid grid-cols-3 gap-1">
                        <div className="text-sm font-medium">계약서 확인</div>
                        <div className="col-span-2 text-sm">
                          {memberData.livingInfo.contractVerified ? "확인됨" : "미확인"}
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-1">
                        <div className="text-sm font-medium">월세</div>
                        <div className="col-span-2 text-sm">{memberData.livingInfo.monthlyRent}</div>
                      </div>
                      <div className="grid grid-cols-3 gap-1">
                        <div className="text-sm font-medium">주요 거주 지역</div>
                        <div className="col-span-2 text-sm">{memberData.livingInfo.residentialArea}</div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-sm font-medium">금융 및 통신 정보</h4>
                      <div className="grid grid-cols-3 gap-1">
                        <div className="text-sm font-medium">통신사</div>
                        <div className="col-span-2 text-sm">{memberData.livingInfo.telecomProvider}</div>
                      </div>
                      <div className="grid grid-cols-3 gap-1">
                        <div className="text-sm font-medium">은행 계좌</div>
                        <div className="col-span-2 text-sm">{memberData.livingInfo.bankAccount}</div>
                      </div>
                      <div className="grid grid-cols-3 gap-1">
                        <div className="text-sm font-medium">신용카드</div>
                        <div className="col-span-2 text-sm">{memberData.livingInfo.creditCard}</div>
                      </div>
                      <div className="grid grid-cols-3 gap-1">
                        <div className="text-sm font-medium">보험</div>
                        <div className="col-span-2 text-sm">{memberData.livingInfo.insurance}</div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">서비스 이용 기록</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <div className="text-sm font-medium mb-1">쇼핑 이력</div>
                        <ul className="list-disc pl-5 text-sm space-y-1">
                          {memberData.serviceUsage.shoppingHistory.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <div className="text-sm font-medium mb-1">통신 이력</div>
                        <ul className="list-disc pl-5 text-sm space-y-1">
                          {memberData.serviceUsage.telecomHistory.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <div className="text-sm font-medium mb-1">보험 이력</div>
                        <ul className="list-disc pl-5 text-sm space-y-1">
                          {memberData.serviceUsage.insuranceHistory.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <div className="text-sm font-medium mb-1">광고 클릭 이력</div>
                        <ul className="list-disc pl-5 text-sm space-y-1">
                          {memberData.serviceUsage.adClickHistory.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <div className="text-sm font-medium mb-1">금융 상품</div>
                        <ul className="list-disc pl-5 text-sm space-y-1">
                          {memberData.serviceUsage.financialProducts.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
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
