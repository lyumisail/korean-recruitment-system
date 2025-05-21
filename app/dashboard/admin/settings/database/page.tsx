"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { AlertCircle, Check, Database, Save, Server } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function DatabaseSettingsPage() {
  const [saveSuccess, setSaveSuccess] = useState(false)
  const [saveError, setSaveError] = useState(false)
  const [environment, setEnvironment] = useState("development")
  const [loading, setLoading] = useState(false)
  const [credentials, setCredentials] = useState({
    user: "",
    password: "",
    host: "",
    database: "",
    port: "5432",
  })

  // 환경에 따른 데이터베이스 계정 정보 가져오기
  useEffect(() => {
    const fetchCredentials = async () => {
      setLoading(true)
      try {
        const response = await fetch(`/api/db/credentials?env=${environment}`)
        const data = await response.json()
        if (data.credentials) {
          setCredentials(data.credentials)
        }
      } catch (error) {
        console.error("데이터베이스 계정 정보 가져오기 실패:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchCredentials()
  }, [environment])

  const handleSave = () => {
    // 실제 구현에서는 API 호출로 설정 저장
    setSaveSuccess(true)
    setSaveError(false)

    // 3초 후 알림 메시지 숨기기
    setTimeout(() => {
      setSaveSuccess(false)
    }, 3000)
  }

  const handleTestConnection = () => {
    // 실제 구현에서는 데이터베이스 연결 테스트
    setSaveSuccess(true)
    setSaveError(false)

    // 3초 후 알림 메시지 숨기기
    setTimeout(() => {
      setSaveSuccess(false)
    }, 3000)
  }

  return (
    <div className="flex-1 space-y-4 p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">데이터베이스 설정</h2>
        <Button onClick={handleSave}>
          <Save className="mr-2 h-4 w-4" />
          변경사항 저장
        </Button>
      </div>

      {saveSuccess && (
        <Alert className="bg-green-50 text-green-800 dark:bg-green-900 dark:text-green-300">
          <Check className="h-4 w-4" />
          <AlertTitle>저장 완료</AlertTitle>
          <AlertDescription>데이터베이스 설정이 성공적으로 저장되었습니다.</AlertDescription>
        </Alert>
      )}

      {saveError && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>저장 실패</AlertTitle>
          <AlertDescription>데이터베이스 설정 저장 중 오류가 발생했습니다. 다시 시도해 주세요.</AlertDescription>
        </Alert>
      )}

      <Tabs defaultValue="connection">
        <TabsList>
          <TabsTrigger value="connection">연결 설정</TabsTrigger>
          <TabsTrigger value="backup">백업 설정</TabsTrigger>
          <TabsTrigger value="performance">성능 설정</TabsTrigger>
        </TabsList>

        <TabsContent value="connection" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>데이터베이스 연결 설정</CardTitle>
              <CardDescription>데이터베이스 연결 및 설정을 관리합니다.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="environment">환경 선택</Label>
                <Select value={environment} onValueChange={setEnvironment}>
                  <SelectTrigger id="environment">
                    <SelectValue placeholder="환경 선택" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="development">개발 환경</SelectItem>
                    <SelectItem value="staging">스테이징 환경</SelectItem>
                    <SelectItem value="production">프로덕션 환경</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {loading ? (
                <div className="flex justify-center py-4">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="db-type">데이터베이스 유형</Label>
                    <Select defaultValue="postgresql">
                      <SelectTrigger id="db-type">
                        <SelectValue placeholder="데이터베이스 유형 선택" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="mysql">MySQL</SelectItem>
                        <SelectItem value="postgresql">PostgreSQL</SelectItem>
                        <SelectItem value="mongodb">MongoDB</SelectItem>
                        <SelectItem value="sqlite">SQLite</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="db-host">호스트</Label>
                    <Input
                      id="db-host"
                      value={credentials.host}
                      onChange={(e) => setCredentials({ ...credentials, host: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="db-port">포트</Label>
                    <Input
                      id="db-port"
                      value={credentials.port}
                      onChange={(e) => setCredentials({ ...credentials, port: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="db-name">데이터베이스 이름</Label>
                    <Input
                      id="db-name"
                      value={credentials.database}
                      onChange={(e) => setCredentials({ ...credentials, database: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="db-user">사용자 이름</Label>
                    <Input
                      id="db-user"
                      value={credentials.user}
                      onChange={(e) => setCredentials({ ...credentials, user: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="db-password">비밀번호</Label>
                    <Input
                      id="db-password"
                      type="password"
                      value={credentials.password}
                      onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                    />
                  </div>
                </div>
              )}

              <div className="flex items-center gap-2 mt-4">
                <Button variant="outline" onClick={handleTestConnection}>
                  연결 테스트
                </Button>
                <Button variant="outline">데이터베이스 초기화</Button>
                <Button variant="outline">마이그레이션 실행</Button>
              </div>
            </CardContent>
            <CardFooter>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Badge variant="outline" className="bg-green-50 text-green-800 dark:bg-green-900 dark:text-green-300">
                  연결됨
                </Badge>
                <span>마지막 연결 확인: 2025-05-21 12:30:45</span>
              </div>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>연결 정보</CardTitle>
              <CardDescription>현재 데이터베이스 연결 정보</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-muted p-4 rounded-md">
                    <div className="flex items-center gap-2 mb-2">
                      <Database className="h-5 w-5 text-primary" />
                      <h3 className="font-medium">데이터베이스 정보</h3>
                    </div>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">유형:</span>
                        <span>PostgreSQL</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">버전:</span>
                        <span>14.5</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">크기:</span>
                        <span>1.2 GB</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">테이블 수:</span>
                        <span>24</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-muted p-4 rounded-md">
                    <div className="flex items-center gap-2 mb-2">
                      <Server className="h-5 w-5 text-primary" />
                      <h3 className="font-medium">서버 정보</h3>
                    </div>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">호스트:</span>
                        <span>{credentials.host}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">환경:</span>
                        <span>
                          {environment === "development" ? "개발" : environment === "staging" ? "스테이징" : "프로덕션"}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">상태:</span>
                        <span className="text-green-600">정상</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">업타임:</span>
                        <span>99.98%</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-muted p-4 rounded-md">
                  <h3 className="font-medium mb-2">연결 문자열</h3>
                  <div className="bg-background p-3 rounded border text-sm font-mono overflow-x-auto">
                    postgresql://{credentials.user}:******@{credentials.host}:{credentials.port}/{credentials.database}
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">보안상의 이유로 비밀번호는 표시되지 않습니다.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="backup" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>백업 설정</CardTitle>
              <CardDescription>데이터베이스 백업 설정을 관리합니다.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="backup-frequency">백업 주기</Label>
                    <Select defaultValue="daily">
                      <SelectTrigger id="backup-frequency">
                        <SelectValue placeholder="주기 선택" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="hourly">매시간</SelectItem>
                        <SelectItem value="daily">매일</SelectItem>
                        <SelectItem value="weekly">매주</SelectItem>
                        <SelectItem value="monthly">매월</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="backup-time">백업 시간</Label>
                    <Input id="backup-time" type="time" defaultValue="03:00" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="backup-retention">백업 보관 기간 (일)</Label>
                    <Input id="backup-retention" type="number" defaultValue="30" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="backup-location">백업 저장 위치</Label>
                    <Select defaultValue="s3">
                      <SelectTrigger id="backup-location">
                        <SelectValue placeholder="저장 위치 선택" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="local">로컬 서버</SelectItem>
                        <SelectItem value="s3">Amazon S3</SelectItem>
                        <SelectItem value="gcs">Google Cloud Storage</SelectItem>
                        <SelectItem value="dropbox">Dropbox</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="s3-bucket">S3 버킷 이름</Label>
                  <Input id="s3-bucket" defaultValue="recruitment-system-backups" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="s3-path">S3 경로</Label>
                  <Input id="s3-path" defaultValue="/database/postgresql/" />
                </div>

                <div className="flex items-center gap-2 mt-4">
                  <Button variant="outline">지금 백업</Button>
                  <Button variant="outline">백업 복원</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="performance" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>성능 설정</CardTitle>
              <CardDescription>데이터베이스 성능 설정을 관리합니다.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="connection-pool">연결 풀 크기</Label>
                    <Input id="connection-pool" type="number" defaultValue="20" />
                    <p className="text-xs text-muted-foreground">데이터베이스 연결 풀의 최대 크기를 설정합니다.</p>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="idle-timeout">유휴 타임아웃 (ms)</Label>
                    <Input id="idle-timeout" type="number" defaultValue="30000" />
                    <p className="text-xs text-muted-foreground">
                      사용되지 않는 연결이 종료되기까지의 시간을 밀리초 단위로 설정합니다.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="connection-timeout">연결 타임아웃 (ms)</Label>
                    <Input id="connection-timeout" type="number" defaultValue="2000" />
                    <p className="text-xs text-muted-foreground">
                      연결 시도가 타임아웃되기까지의 시간을 밀리초 단위로 설정합니다.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="statement-timeout">쿼리 타임아웃 (ms)</Label>
                    <Input id="statement-timeout" type="number" defaultValue="30000" />
                    <p className="text-xs text-muted-foreground">
                      쿼리 실행이 타임아웃되기까지의 시간을 밀리초 단위로 설정합니다.
                    </p>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="max-rows">최대 반환 행 수</Label>
                  <Input id="max-rows" type="number" defaultValue="10000" />
                  <p className="text-xs text-muted-foreground">단일 쿼리에서 반환할 수 있는 최대 행 수를 설정합니다.</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="query-logging">쿼리 로깅 수준</Label>
                  <Select defaultValue="error">
                    <SelectTrigger id="query-logging">
                      <SelectValue placeholder="로깅 수준 선택" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="none">없음</SelectItem>
                      <SelectItem value="error">오류만</SelectItem>
                      <SelectItem value="warn">경고 이상</SelectItem>
                      <SelectItem value="info">정보 이상</SelectItem>
                      <SelectItem value="debug">모든 쿼리</SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="text-xs text-muted-foreground">데이터베이스 쿼리 로깅 수준을 설정합니다.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
