import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="bg-background border-b">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold">해외인력채용관리</h1>
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Link href="/login">
              <Button>로그인</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                해외 인력 채용 관리 시스템
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                효율적인 해외 인력 채용 및 관리를 위한 통합 플랫폼입니다.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/login">
                  <Button size="lg">시작하기</Button>
                </Link>
                <Link href="/about">
                  <Button size="lg" variant="outline">
                    자세히 알아보기
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-muted py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <Card>
                <CardHeader>
                  <CardTitle>관리자</CardTitle>
                  <CardDescription>시스템 관리 및 매출 현황 확인</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>모든 정보 접근 권한</li>
                    <li>매출 현황 확인</li>
                    <li>회원 및 고객사 관리</li>
                    <li>프로젝트 관리</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/dashboard/admin" className="w-full">
                    <Button className="w-full">관리자 로그인</Button>
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>고객사</CardTitle>
                  <CardDescription>프로젝트 등록 및 인재 검색</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>프로젝트 등록</li>
                    <li>채용 현황 확인</li>
                    <li>인재 검색</li>
                    <li>업무 게시판 사용</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/dashboard/company" className="w-full">
                    <Button className="w-full">고객사 로그인</Button>
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>회원</CardTitle>
                  <CardDescription>이력서 및 프로젝트 관리</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>본인 정보 관리</li>
                    <li>이력서 관리</li>
                    <li>프로젝트 확인</li>
                    <li>지원 현황 확인</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/dashboard/member" className="w-full">
                    <Button className="w-full">회원 로그인</Button>
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>비회원</CardTitle>
                  <CardDescription>제한된 정보 조회</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>회원 일부 정보 조회</li>
                    <li>프로젝트 목록 확인</li>
                    <li>공지사항 확인</li>
                    <li>회원가입</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/dashboard/guest" className="w-full">
                    <Button className="w-full" variant="outline">
                      둘러보기
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            &copy; 2025 해외인력채용관리시스템. 모든 권리 보유.
          </p>
          <div className="flex gap-4">
            <Link href="/terms" className="text-sm text-muted-foreground underline underline-offset-4">
              이용약관
            </Link>
            <Link href="/privacy" className="text-sm text-muted-foreground underline underline-offset-4">
              개인정보처리방침
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
