"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Upload, FileSpreadsheet, Check, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { ThemeToggle } from "@/components/theme-toggle"

export default function ExcelUploadPage() {
  const [uploadStatus, setUploadStatus] = useState<"idle" | "success" | "error">("idle")
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [uploadType, setUploadType] = useState<"members" | "companies" | "projects">("members")

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0])
    }
  }

  const handleUpload = () => {
    if (!selectedFile) return

    // 실제 구현에서는 여기서 파일 업로드 및 처리 로직 추가
    // 예시를 위해 타임아웃으로 성공 상태로 변경
    setTimeout(() => {
      setUploadStatus("success")
    }, 1500)
  }

  const resetUpload = () => {
    setSelectedFile(null)
    setUploadStatus("idle")
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="bg-background border-b">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/">
              <h1 className="text-xl font-bold">해외인력채용관리</h1>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Link href="/dashboard/admin">
              <Button variant="ghost">대시보드</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1 container py-10">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl font-bold mb-6">엑셀 파일 업로드</h1>

          <Tabs defaultValue="members" onValueChange={(value) => setUploadType(value as any)}>
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="members">회원 등록</TabsTrigger>
              <TabsTrigger value="companies">고객사 등록</TabsTrigger>
              <TabsTrigger value="projects">프로젝트 등록</TabsTrigger>
            </TabsList>
            <TabsContent value="members">
              <Card>
                <CardHeader>
                  <CardTitle>회원 일괄 등록</CardTitle>
                  <CardDescription>회원 정보가 포함된 엑셀 파일을 업로드하여 일괄 등록할 수 있습니다.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border-2 border-dashed rounded-md p-6 text-center">
                      {selectedFile ? (
                        <div className="space-y-2">
                          <FileSpreadsheet className="h-10 w-10 text-muted-foreground mx-auto" />
                          <p className="text-sm font-medium">{selectedFile.name}</p>
                          <p className="text-xs text-muted-foreground">{(selectedFile.size / 1024).toFixed(2)} KB</p>
                        </div>
                      ) : (
                        <div className="space-y-2">
                          <Upload className="h-10 w-10 text-muted-foreground mx-auto" />
                          <p className="text-sm font-medium">파일을 선택하거나 여기에 드래그하세요</p>
                          <p className="text-xs text-muted-foreground">지원 형식: XLSX, XLS (최대 10MB)</p>
                        </div>
                      )}
                      <input
                        type="file"
                        className="hidden"
                        id="file-upload"
                        accept=".xlsx,.xls"
                        onChange={handleFileChange}
                      />
                      <div className="mt-4">
                        <label htmlFor="file-upload">
                          <Button variant="outline" type="button" className="mr-2">
                            파일 선택
                          </Button>
                        </label>
                        {selectedFile && (
                          <Button onClick={resetUpload} variant="ghost" type="button">
                            취소
                          </Button>
                        )}
                      </div>
                    </div>

                    {uploadStatus === "success" && (
                      <Alert
                        variant="default"
                        className="bg-green-50 text-green-800 dark:bg-green-900 dark:text-green-300"
                      >
                        <Check className="h-4 w-4" />
                        <AlertTitle>업로드 성공</AlertTitle>
                        <AlertDescription>
                          파일이 성공적으로 업로드되었습니다. 데이터 처리가 완료되었습니다.
                        </AlertDescription>
                      </Alert>
                    )}

                    {uploadStatus === "error" && (
                      <Alert variant="destructive">
                        <AlertCircle className="h-4 w-4" />
                        <AlertTitle>업로드 실패</AlertTitle>
                        <AlertDescription>파일 업로드 중 오류가 발생했습니다. 다시 시도해 주세요.</AlertDescription>
                      </Alert>
                    )}

                    <div className="space-y-2">
                      <h3 className="text-sm font-medium">파일 형식 안내</h3>
                      <p className="text-sm text-muted-foreground">
                        회원 등록을 위한 엑셀 파일은 다음 열을 포함해야 합니다:
                      </p>
                      <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                        <li>이름 (필수)</li>
                        <li>이메일 (필수)</li>
                        <li>연락처 (필수)</li>
                        <li>국적</li>
                        <li>거주지</li>
                        <li>기술 스택</li>
                        <li>경력 사항</li>
                      </ul>
                      <div className="mt-2">
                        <Link href="/templates/member-template.xlsx">
                          <Button variant="link" className="h-auto p-0 text-sm">
                            템플릿 다운로드
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    onClick={handleUpload}
                    disabled={!selectedFile || uploadStatus === "success"}
                    className="ml-auto"
                  >
                    업로드
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="companies">
              <Card>
                <CardHeader>
                  <CardTitle>고객사 일괄 등록</CardTitle>
                  <CardDescription>
                    고객사 정보가 포함된 엑셀 파일을 업로드하여 일괄 등록할 수 있습니다.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border-2 border-dashed rounded-md p-6 text-center">
                      {selectedFile ? (
                        <div className="space-y-2">
                          <FileSpreadsheet className="h-10 w-10 text-muted-foreground mx-auto" />
                          <p className="text-sm font-medium">{selectedFile.name}</p>
                          <p className="text-xs text-muted-foreground">{(selectedFile.size / 1024).toFixed(2)} KB</p>
                        </div>
                      ) : (
                        <div className="space-y-2">
                          <Upload className="h-10 w-10 text-muted-foreground mx-auto" />
                          <p className="text-sm font-medium">파일을 선택하거나 여기에 드래그하세요</p>
                          <p className="text-xs text-muted-foreground">지원 형식: XLSX, XLS (최대 10MB)</p>
                        </div>
                      )}
                      <input
                        type="file"
                        className="hidden"
                        id="company-file-upload"
                        accept=".xlsx,.xls"
                        onChange={handleFileChange}
                      />
                      <div className="mt-4">
                        <label htmlFor="company-file-upload">
                          <Button variant="outline" type="button" className="mr-2">
                            파일 선택
                          </Button>
                        </label>
                        {selectedFile && (
                          <Button onClick={resetUpload} variant="ghost" type="button">
                            취소
                          </Button>
                        )}
                      </div>
                    </div>

                    {uploadStatus === "success" && (
                      <Alert
                        variant="default"
                        className="bg-green-50 text-green-800 dark:bg-green-900 dark:text-green-300"
                      >
                        <Check className="h-4 w-4" />
                        <AlertTitle>업로드 성공</AlertTitle>
                        <AlertDescription>
                          파일이 성공적으로 업로드되었습니다. 데이터 처리가 완료되었습니다.
                        </AlertDescription>
                      </Alert>
                    )}

                    {uploadStatus === "error" && (
                      <Alert variant="destructive">
                        <AlertCircle className="h-4 w-4" />
                        <AlertTitle>업로드 실패</AlertTitle>
                        <AlertDescription>파일 업로드 중 오류가 발생했습니다. 다시 시도해 주세요.</AlertDescription>
                      </Alert>
                    )}

                    <div className="space-y-2">
                      <h3 className="text-sm font-medium">파일 형식 안내</h3>
                      <p className="text-sm text-muted-foreground">
                        고객사 등록을 위한 엑셀 파일은 다음 열을 포함해야 합니다:
                      </p>
                      <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                        <li>회사명 (필수)</li>
                        <li>사업자등록번호 (필수)</li>
                        <li>담당자 이름 (필수)</li>
                        <li>담당자 이메일 (필수)</li>
                        <li>담당자 연락처 (필수)</li>
                        <li>회사 주소</li>
                        <li>업종</li>
                      </ul>
                      <div className="mt-2">
                        <Link href="/templates/company-template.xlsx">
                          <Button variant="link" className="h-auto p-0 text-sm">
                            템플릿 다운로드
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    onClick={handleUpload}
                    disabled={!selectedFile || uploadStatus === "success"}
                    className="ml-auto"
                  >
                    업로드
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="projects">
              <Card>
                <CardHeader>
                  <CardTitle>프로젝트 일괄 등록</CardTitle>
                  <CardDescription>
                    프로젝트 정보가 포함된 엑셀 파일을 업로드하여 일괄 등록할 수 있습니다.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border-2 border-dashed rounded-md p-6 text-center">
                      {selectedFile ? (
                        <div className="space-y-2">
                          <FileSpreadsheet className="h-10 w-10 text-muted-foreground mx-auto" />
                          <p className="text-sm font-medium">{selectedFile.name}</p>
                          <p className="text-xs text-muted-foreground">{(selectedFile.size / 1024).toFixed(2)} KB</p>
                        </div>
                      ) : (
                        <div className="space-y-2">
                          <Upload className="h-10 w-10 text-muted-foreground mx-auto" />
                          <p className="text-sm font-medium">파일을 선택하거나 여기에 드래그하세요</p>
                          <p className="text-xs text-muted-foreground">지원 형식: XLSX, XLS (최대 10MB)</p>
                        </div>
                      )}
                      <input
                        type="file"
                        className="hidden"
                        id="project-file-upload"
                        accept=".xlsx,.xls"
                        onChange={handleFileChange}
                      />
                      <div className="mt-4">
                        <label htmlFor="project-file-upload">
                          <Button variant="outline" type="button" className="mr-2">
                            파일 선택
                          </Button>
                        </label>
                        {selectedFile && (
                          <Button onClick={resetUpload} variant="ghost" type="button">
                            취소
                          </Button>
                        )}
                      </div>
                    </div>

                    {uploadStatus === "success" && (
                      <Alert
                        variant="default"
                        className="bg-green-50 text-green-800 dark:bg-green-900 dark:text-green-300"
                      >
                        <Check className="h-4 w-4" />
                        <AlertTitle>업로드 성공</AlertTitle>
                        <AlertDescription>
                          파일이 성공적으로 업로드되었습니다. 데이터 처리가 완료되었습니다.
                        </AlertDescription>
                      </Alert>
                    )}

                    {uploadStatus === "error" && (
                      <Alert variant="destructive">
                        <AlertCircle className="h-4 w-4" />
                        <AlertTitle>업로드 실패</AlertTitle>
                        <AlertDescription>파일 업로드 중 오류가 발생했습니다. 다시 시도해 주세요.</AlertDescription>
                      </Alert>
                    )}

                    <div className="space-y-2">
                      <h3 className="text-sm font-medium">파일 형식 안내</h3>
                      <p className="text-sm text-muted-foreground">
                        프로젝트 등록을 위한 엑셀 파일은 다음 열을 포함해야 합니다:
                      </p>
                      <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                        <li>프로젝트명 (필수)</li>
                        <li>고객사 ID (필수)</li>
                        <li>시작일 (필수)</li>
                        <li>종료 예정일 (필수)</li>
                        <li>필요 인원 수 (필수)</li>
                        <li>필요 기술 스택</li>
                        <li>프로젝트 설명</li>
                        <li>근무 위치</li>
                      </ul>
                      <div className="mt-2">
                        <Link href="/templates/project-template.xlsx">
                          <Button variant="link" className="h-auto p-0 text-sm">
                            템플릿 다운로드
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    onClick={handleUpload}
                    disabled={!selectedFile || uploadStatus === "success"}
                    className="ml-auto"
                  >
                    업로드
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}
