import type React from "react"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="daum-header border-b">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/">
              <h1 className="text-xl font-bold">해외인력채용관리</h1>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Link href="/profile">
              <span className="text-sm">내 계정</span>
            </Link>
            <Link href="/">
              <span className="text-sm text-muted-foreground">로그아웃</span>
            </Link>
          </div>
        </div>
      </header>
      {children}
    </div>
  )
}
