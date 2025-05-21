"use client"

import { useState } from "react"
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Download, Filter } from "lucide-react"
import { Badge } from "@/components/ui/badge"

// 3개년 월별 매출 데이터 (2023, 2024, 2025)
const monthlyRevenueData = {
  "2023": [
    { month: "1월", revenue: 18500000, projects: 3, companies: 2 },
    { month: "2월", revenue: 19200000, projects: 3, companies: 2 },
    { month: "3월", revenue: 22500000, projects: 4, companies: 3 },
    { month: "4월", revenue: 24000000, projects: 4, companies: 3 },
    { month: "5월", revenue: 25500000, projects: 5, companies: 3 },
    { month: "6월", revenue: 27000000, projects: 5, companies: 4 },
    { month: "7월", revenue: 28500000, projects: 6, companies: 4 },
    { month: "8월", revenue: 30000000, projects: 6, companies: 4 },
    { month: "9월", revenue: 32500000, projects: 7, companies: 5 },
    { month: "10월", revenue: 35000000, projects: 7, companies: 5 },
    { month: "11월", revenue: 37500000, projects: 8, companies: 5 },
    { month: "12월", revenue: 40000000, projects: 8, companies: 6 },
  ],
  "2024": [
    { month: "1월", revenue: 25000000, projects: 4, companies: 3 },
    { month: "2월", revenue: 27000000, projects: 5, companies: 3 },
    { month: "3월", revenue: 32000000, projects: 6, companies: 4 },
    { month: "4월", revenue: 35000000, projects: 6, companies: 4 },
    { month: "5월", revenue: 37500000, projects: 7, companies: 4 },
    { month: "6월", revenue: 40000000, projects: 7, companies: 5 },
    { month: "7월", revenue: 42500000, projects: 8, companies: 5 },
    { month: "8월", revenue: 45000000, projects: 8, companies: 6 },
    { month: "9월", revenue: 47500000, projects: 9, companies: 6 },
    { month: "10월", revenue: 52000000, projects: 10, companies: 7 },
    { month: "11월", revenue: 55000000, projects: 11, companies: 7 },
    { month: "12월", revenue: 60000000, projects: 12, companies: 8 },
  ],
  "2025": [
    { month: "1월", revenue: 32500000, projects: 5, companies: 3 },
    { month: "2월", revenue: 38000000, projects: 6, companies: 4 },
    { month: "3월", revenue: 42500000, projects: 7, companies: 4 },
    { month: "4월", revenue: 45000000, projects: 8, companies: 5 },
    { month: "5월", revenue: 48500000, projects: 8, companies: 5 },
    { month: "6월", revenue: 52000000, projects: 9, companies: 6 },
    { month: "7월", revenue: 55500000, projects: 10, companies: 6 },
    { month: "8월", revenue: 58000000, projects: 10, companies: 7 },
    { month: "9월", revenue: 62500000, projects: 11, companies: 7 },
    { month: "10월", revenue: 68000000, projects: 12, companies: 8 },
    { month: "11월", revenue: 72500000, projects: 13, companies: 8 },
    { month: "12월", revenue: 78000000, projects: 14, companies: 9 },
  ],
}

// 3개년 고객사별 매출 데이터
const companyRevenueData = {
  "2023": [
    { name: "(주)테크솔루션", revenue: 65000000, projects: 3 },
    { name: "글로벌시스템즈", revenue: 52000000, projects: 2 },
    { name: "스마트테크", revenue: 45000000, projects: 2 },
    { name: "퓨처이노베이션", revenue: 38000000, projects: 2 },
    { name: "건설산업", revenue: 35000000, projects: 1 },
    { name: "금융파트너스", revenue: 30000000, projects: 1 },
    { name: "기타", revenue: 75000000, projects: 3 },
  ],
  "2024": [
    { name: "(주)테크솔루션", revenue: 95000000, projects: 4 },
    { name: "글로벌시스템즈", revenue: 75000000, projects: 3 },
    { name: "스마트테크", revenue: 65000000, projects: 3 },
    { name: "퓨처이노베이션", revenue: 55000000, projects: 2 },
    { name: "건설산업", revenue: 50000000, projects: 2 },
    { name: "금융파트너스", revenue: 45000000, projects: 2 },
    { name: "디지털솔루션", revenue: 40000000, projects: 2 },
    { name: "메디컬시스템", revenue: 35000000, projects: 1 },
    { name: "기타", revenue: 88000000, projects: 4 },
  ],
  "2025": [
    { name: "(주)테크솔루션", revenue: 125000000, projects: 5 },
    { name: "글로벌시스템즈", revenue: 98000000, projects: 4 },
    { name: "스마트테크", revenue: 85000000, projects: 3 },
    { name: "퓨처이노베이션", revenue: 72000000, projects: 3 },
    { name: "건설산업", revenue: 65000000, projects: 2 },
    { name: "금융파트너스", revenue: 58000000, projects: 2 },
    { name: "디지털솔루션", revenue: 52000000, projects: 2 },
    { name: "메디컬시스템", revenue: 48000000, projects: 2 },
    { name: "기타", revenue: 100000000, projects: 5 },
  ],
}

// 3개년 업종별 매출 데이터
const revenueByIndustryData = {
  "2023": [
    { name: "IT/소프트웨어", value: 180000000, color: "#8884d8" },
    { name: "제조업", value: 90000000, color: "#82ca9d" },
    { name: "서비스업", value: 60000000, color: "#ffc658" },
    { name: "건설업", value: 40000000, color: "#ff8042" },
    { name: "금융업", value: 30000000, color: "#0088fe" },
  ],
  "2024": [
    { name: "IT/소프트웨어", value: 260000000, color: "#8884d8" },
    { name: "제조업", value: 130000000, color: "#82ca9d" },
    { name: "서비스업", value: 90000000, color: "#ffc658" },
    { name: "건설업", value: 60000000, color: "#ff8042" },
    { name: "금융업", value: 50000000, color: "#0088fe" },
  ],
  "2025": [
    { name: "IT/소프트웨어", value: 350000000, color: "#8884d8" },
    { name: "제조업", value: 180000000, color: "#82ca9d" },
    { name: "서비스업", value: 120000000, color: "#ffc658" },
    { name: "건설업", value: 80000000, color: "#ff8042" },
    { name: "금융업", value: 70000000, color: "#0088fe" },
  ],
}

// 3개년 매출 상세 내역
const revenueDetailData = {
  "2023": [
    {
      id: 1,
      date: "2023-12-15",
      company: "(주)테크솔루션",
      project: "웹 개발자 채용",
      amount: 12000000,
      status: "결제완료",
    },
    {
      id: 2,
      date: "2023-11-20",
      company: "글로벌시스템즈",
      project: "모바일 앱 개발자",
      amount: 10000000,
      status: "결제완료",
    },
    { id: 3, date: "2023-10-10", company: "스마트테크", project: "데이터 분석가", amount: 7000000, status: "결제완료" },
    {
      id: 4,
      date: "2023-09-15",
      company: "퓨처이노베이션",
      project: "UI/UX 디자이너",
      amount: 5000000,
      status: "결제완료",
    },
    {
      id: 5,
      date: "2023-08-20",
      company: "건설산업",
      project: "건설 프로젝트 매니저",
      amount: 6500000,
      status: "결제완료",
    },
    {
      id: 6,
      date: "2023-07-25",
      company: "금융파트너스",
      project: "금융 컨설턴트",
      amount: 8000000,
      status: "결제완료",
    },
    {
      id: 7,
      date: "2023-06-28",
      company: "(주)테크솔루션",
      project: "시스템 엔지니어",
      amount: 9000000,
      status: "결제완료",
    },
    {
      id: 8,
      date: "2023-05-30",
      company: "글로벌시스템즈",
      project: "백엔드 개발자",
      amount: 8500000,
      status: "결제완료",
    },
    {
      id: 9,
      date: "2023-04-15",
      company: "스마트테크",
      project: "프론트엔드 개발자",
      amount: 7500000,
      status: "결제완료",
    },
    {
      id: 10,
      date: "2023-03-10",
      company: "(주)테크솔루션",
      project: "DevOps 엔지니어",
      amount: 11000000,
      status: "결제완료",
    },
  ],
  "2024": [
    {
      id: 1,
      date: "2024-12-15",
      company: "(주)테크솔루션",
      project: "웹 개발자 채용",
      amount: 13500000,
      status: "결제완료",
    },
    {
      id: 2,
      date: "2024-11-20",
      company: "글로벌시스템즈",
      project: "모바일 앱 개발자",
      amount: 11000000,
      status: "결제완료",
    },
    { id: 3, date: "2024-10-10", company: "스마트테크", project: "데이터 분석가", amount: 7500000, status: "결제완료" },
    {
      id: 4,
      date: "2024-09-15",
      company: "퓨처이노베이션",
      project: "UI/UX 디자이너",
      amount: 5500000,
      status: "결제완료",
    },
    {
      id: 5,
      date: "2024-08-20",
      company: "건설산업",
      project: "건설 프로젝트 매니저",
      amount: 7000000,
      status: "결제완료",
    },
    {
      id: 6,
      date: "2024-07-25",
      company: "금융파트너스",
      project: "금융 컨설턴트",
      amount: 8500000,
      status: "결제완료",
    },
    {
      id: 7,
      date: "2024-06-28",
      company: "디지털솔루션",
      project: "시스템 엔지니어",
      amount: 10000000,
      status: "결제완료",
    },
    {
      id: 8,
      date: "2024-05-30",
      company: "메디컬시스템",
      project: "의료정보 전문가",
      amount: 9000000,
      status: "결제완료",
    },
    {
      id: 9,
      date: "2024-04-15",
      company: "(주)테크솔루션",
      project: "백엔드 개발자",
      amount: 12000000,
      status: "결제완료",
    },
    {
      id: 10,
      date: "2024-03-10",
      company: "글로벌시스템즈",
      project: "프론트엔드 개발자",
      amount: 10500000,
      status: "결제완료",
    },
  ],
  "2025": [
    {
      id: 1,
      date: "2025-05-01",
      company: "(주)테크솔루션",
      project: "웹 개발자 채용",
      amount: 15000000,
      status: "결제완료",
    },
    {
      id: 2,
      date: "2025-05-05",
      company: "글로벌시스템즈",
      project: "모바일 앱 개발자",
      amount: 12000000,
      status: "결제완료",
    },
    { id: 3, date: "2025-05-10", company: "스마트테크", project: "데이터 분석가", amount: 8000000, status: "결제완료" },
    {
      id: 4,
      date: "2025-05-15",
      company: "퓨처이노베이션",
      project: "UI/UX 디자이너",
      amount: 6000000,
      status: "결제완료",
    },
    {
      id: 5,
      date: "2025-05-20",
      company: "건설산업",
      project: "건설 프로젝트 매니저",
      amount: 7500000,
      status: "결제완료",
    },
    {
      id: 6,
      date: "2025-05-25",
      company: "금융파트너스",
      project: "금융 컨설턴트",
      amount: 9000000,
      status: "결제대기",
    },
    {
      id: 7,
      date: "2025-05-28",
      company: "디지털솔루션",
      project: "시스템 엔지니어",
      amount: 11000000,
      status: "결제대기",
    },
    {
      id: 8,
      date: "2025-05-30",
      company: "메디컬시스템",
      project: "의료정보 전문가",
      amount: 10000000,
      status: "결제대기",
    },
    {
      id: 9,
      date: "2025-05-31",
      company: "(주)테크솔루션",
      project: "백엔드 개발자",
      amount: 13000000,
      status: "결제대기",
    },
    {
      id: 10,
      date: "2025-05-31",
      company: "글로벌시스템즈",
      project: "프론트엔드 개발자",
      amount: 11500000,
      status: "결제대기",
    },
  ],
}

// 3개년 총 매출 데이터
const yearlyTotalRevenue = {
  "2023": 340000000,
  "2024": 548000000,
  "2025": 653000000,
}

// 3개년 총 프로젝트 수
const yearlyTotalProjects = {
  "2023": 14,
  "2024": 21,
  "2025": 28,
}

// 3개년 총 고객사 수
const yearlyTotalCompanies = {
  "2023": 6,
  "2024": 8,
  "2025": 9,
}

// 연도별 성장률
const yearlyGrowthRate = {
  "2023": 0,
  "2024": 61,
  "2025": 19,
}

export default function RevenuePage() {
  const [selectedYear, setSelectedYear] = useState<"2023" | "2024" | "2025">("2025")

  // 선택된 연도에 따른 데이터 가져오기
  const currentMonthlyData = monthlyRevenueData[selectedYear]
  const currentCompanyData = companyRevenueData[selectedYear]
  const currentIndustryData = revenueByIndustryData[selectedYear]
  const currentDetailData = revenueDetailData[selectedYear]
  const totalRevenue = yearlyTotalRevenue[selectedYear]
  const totalProjects = yearlyTotalProjects[selectedYear]
  const totalCompanies = yearlyTotalCompanies[selectedYear]
  const growthRate = yearlyGrowthRate[selectedYear]

  // 숫자 포맷팅 함수
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("ko-KR", { style: "currency", currency: "KRW", maximumFractionDigits: 0 }).format(
      value,
    )
  }

  return (
    <div className="flex-1 space-y-4 p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">매출 현황</h2>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Download className="mr-2 h-4 w-4" />
            내보내기
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">총 매출</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatCurrency(totalRevenue)}</div>
            <p className="text-xs text-muted-foreground">
              {selectedYear !== "2023" ? `전년 대비 +${growthRate}%` : "기준년도"}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">총 프로젝트 수</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalProjects}개</div>
            <p className="text-xs text-muted-foreground">
              {selectedYear !== "2023"
                ? `전년 대비 +${Math.round((totalProjects / (selectedYear === "2025" ? yearlyTotalProjects["2024"] : yearlyTotalProjects["2023"]) - 1) * 100)}%`
                : "기준년도"}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">총 고객사 수</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalCompanies}개</div>
            <p className="text-xs text-muted-foreground">
              {selectedYear !== "2023"
                ? `전년 대비 +${Math.round((totalCompanies / (selectedYear === "2025" ? yearlyTotalCompanies["2024"] : yearlyTotalCompanies["2023"]) - 1) * 100)}%`
                : "기준년도"}
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="monthly">
        <div className="flex items-center justify-between">
          <TabsList>
            <TabsTrigger value="monthly">월별 매출</TabsTrigger>
            <TabsTrigger value="company">고객사별 매출</TabsTrigger>
            <TabsTrigger value="industry">업종별 매출</TabsTrigger>
            <TabsTrigger value="details">상세 내역</TabsTrigger>
          </TabsList>
          <div className="flex items-center gap-2">
            <Select value={selectedYear} onValueChange={(value) => setSelectedYear(value as "2023" | "2024" | "2025")}>
              <SelectTrigger className="w-[100px]">
                <SelectValue placeholder="연도" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2023">2023</SelectItem>
                <SelectItem value="2024">2024</SelectItem>
                <SelectItem value="2025">2025</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <TabsContent value="monthly" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>{selectedYear}년 월별 매출 추이</CardTitle>
              <CardDescription>{selectedYear}년 월별 매출 및 프로젝트 현황</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={currentMonthlyData}
                    margin={{
                      top: 20,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
                    <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
                    <Tooltip
                      formatter={(value, name) => {
                        if (name === "revenue") return [formatCurrency(value as number), "매출"]
                        return [value, name === "projects" ? "프로젝트 수" : "고객사 수"]
                      }}
                    />
                    <Legend
                      formatter={(value) => {
                        if (value === "revenue") return "매출"
                        return value === "projects" ? "프로젝트 수" : "고객사 수"
                      }}
                    />
                    <Bar yAxisId="left" dataKey="revenue" fill="#8884d8" name="revenue" />
                    <Bar yAxisId="right" dataKey="projects" fill="#82ca9d" name="projects" />
                    <Bar yAxisId="right" dataKey="companies" fill="#ffc658" name="companies" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>월별 매출 성장 추이</CardTitle>
              <CardDescription>{selectedYear}년 월별 매출 성장 추이</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={currentMonthlyData}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip formatter={(value) => [formatCurrency(value as number), "매출"]} />
                    <Legend />
                    <Line type="monotone" dataKey="revenue" stroke="#8884d8" name="매출" activeDot={{ r: 8 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="company" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>고객사별 매출</CardTitle>
              <CardDescription>{selectedYear}년 고객사별 매출 현황</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={currentCompanyData}
                    layout="vertical"
                    margin={{
                      top: 20,
                      right: 30,
                      left: 100,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" />
                    <YAxis type="category" dataKey="name" width={100} />
                    <Tooltip
                      formatter={(value, name) => {
                        if (name === "revenue") return [formatCurrency(value as number), "매출"]
                        return [value, "프로젝트 수"]
                      }}
                    />
                    <Legend
                      formatter={(value) => {
                        return value === "revenue" ? "매출" : "프로젝트 수"
                      }}
                    />
                    <Bar dataKey="revenue" fill="#8884d8" name="revenue" />
                    <Bar dataKey="projects" fill="#82ca9d" name="projects" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>고객사별 매출 비중</CardTitle>
              <CardDescription>{selectedYear}년 고객사별 매출 비중</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center">
              <div className="h-[400px] w-full max-w-[600px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={currentCompanyData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={150}
                      fill="#8884d8"
                      dataKey="revenue"
                      nameKey="name"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {currentCompanyData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={`hsl(${index * 45}, 70%, 60%)`} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => [formatCurrency(value as number), "매출"]} />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="industry" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>업종별 매출</CardTitle>
              <CardDescription>{selectedYear}년 업종별 매출 현황</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center">
              <div className="h-[400px] w-full max-w-[600px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={currentIndustryData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={150}
                      fill="#8884d8"
                      dataKey="value"
                      nameKey="name"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {currentIndustryData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => [formatCurrency(value as number), "매출"]} />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>업종별 매출 비교</CardTitle>
              <CardDescription>{selectedYear}년 업종별 매출 비교</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={currentIndustryData}
                    margin={{
                      top: 20,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip formatter={(value) => [formatCurrency(value as number), "매출"]} />
                    <Legend />
                    <Bar dataKey="value" name="매출">
                      {currentIndustryData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="details" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>매출 상세 내역</CardTitle>
              <CardDescription>{selectedYear}년 매출 상세 내역</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="border rounded-md">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="p-2 text-left font-medium">날짜</th>
                      <th className="p-2 text-left font-medium">고객사</th>
                      <th className="p-2 text-left font-medium">프로젝트</th>
                      <th className="p-2 text-left font-medium">금액</th>
                      <th className="p-2 text-left font-medium">상태</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentDetailData.map((revenue) => (
                      <tr key={revenue.id} className="border-b">
                        <td className="p-2">{revenue.date}</td>
                        <td className="p-2">{revenue.company}</td>
                        <td className="p-2">{revenue.project}</td>
                        <td className="p-2">{formatCurrency(revenue.amount)}</td>
                        <td className="p-2">
                          <Badge variant={revenue.status === "결제완료" ? "default" : "outline"}>
                            {revenue.status}
                          </Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>연간 매출 요약</CardTitle>
              <CardDescription>{selectedYear}년 매출 요약</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">매출 통계</h3>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-muted p-3 rounded-md">
                      <div className="text-sm text-muted-foreground">총 매출</div>
                      <div className="text-lg font-bold">{formatCurrency(totalRevenue)}</div>
                    </div>
                    <div className="bg-muted p-3 rounded-md">
                      <div className="text-sm text-muted-foreground">평균 월 매출</div>
                      <div className="text-lg font-bold">{formatCurrency(totalRevenue / 12)}</div>
                    </div>
                    <div className="bg-muted p-3 rounded-md">
                      <div className="text-sm text-muted-foreground">최고 월 매출</div>
                      <div className="text-lg font-bold">
                        {formatCurrency(Math.max(...currentMonthlyData.map((item) => item.revenue)))}
                      </div>
                    </div>
                    <div className="bg-muted p-3 rounded-md">
                      <div className="text-sm text-muted-foreground">최저 월 매출</div>
                      <div className="text-lg font-bold">
                        {formatCurrency(Math.min(...currentMonthlyData.map((item) => item.revenue)))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">프로젝트 통계</h3>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-muted p-3 rounded-md">
                      <div className="text-sm text-muted-foreground">총 프로젝트 수</div>
                      <div className="text-lg font-bold">{totalProjects}개</div>
                    </div>
                    <div className="bg-muted p-3 rounded-md">
                      <div className="text-sm text-muted-foreground">평균 프로젝트 매출</div>
                      <div className="text-lg font-bold">{formatCurrency(totalRevenue / totalProjects)}</div>
                    </div>
                    <div className="bg-muted p-3 rounded-md">
                      <div className="text-sm text-muted-foreground">고객사 수</div>
                      <div className="text-lg font-bold">{totalCompanies}개</div>
                    </div>
                    <div className="bg-muted p-3 rounded-md">
                      <div className="text-sm text-muted-foreground">고객사당 평균 매출</div>
                      <div className="text-lg font-bold">{formatCurrency(totalRevenue / totalCompanies)}</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
