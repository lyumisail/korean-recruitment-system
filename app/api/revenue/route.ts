import { type NextRequest, NextResponse } from "next/server"
import { revenueQueries } from "@/lib/db"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const type = searchParams.get("type")
    const year = searchParams.get("year")

    if (type === "monthly" && year) {
      const monthlyData = await revenueQueries.getMonthlyRevenue(Number.parseInt(year))
      return NextResponse.json(monthlyData)
    } else if (type === "company") {
      const companyData = await revenueQueries.getRevenueByCompany()
      return NextResponse.json(companyData)
    } else if (type === "industry") {
      const industryData = await revenueQueries.getRevenueByIndustry()
      return NextResponse.json(industryData)
    } else {
      const revenues = await revenueQueries.getAllRevenues()
      return NextResponse.json(revenues)
    }
  } catch (error) {
    console.error("매출 조회 API 오류:", error)
    return NextResponse.json({ message: "서버 오류", error }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const revenueData = await request.json()
    const newRevenue = await revenueQueries.createRevenue(revenueData)
    return NextResponse.json(newRevenue, { status: 201 })
  } catch (error) {
    console.error("매출 생성 API 오류:", error)
    return NextResponse.json({ message: "서버 오류", error }, { status: 500 })
  }
}
