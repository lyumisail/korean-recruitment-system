"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { AlertCircle, Check, Database, Globe, Mail, Save, Server, Settings, Shield, Users, Plus } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function SettingsPage() {
  const [saveSuccess, setSaveSuccess] = useState(false)
  const [saveError, setSaveError] = useState(false)

  const handleSave = () => {
    // 실제 구현에서는 API 호출로 설정 저장
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
        <h2 className="text-2xl font-bold">시스템 설정</h2>
        <Button onClick={handleSave}>
          <Save className="mr-2 h-4 w-4" />
          변경사항 저장
        </Button>
      </div>

      {saveSuccess && (
        <Alert className="bg-green-50 text-green-800 dark:bg-green-900 dark:text-green-300">
          <Check className="h-4 w-4" />
          <AlertTitle>저장 완료</AlertTitle>
          <AlertDescription>설정이 성공적으로 저장되었습니다.</AlertDescription>
        </Alert>
      )}

      {saveError && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>저장 실패</AlertTitle>
          <AlertDescription>설정 저장 중 오류가 발생했습니다. 다시 시도해 주세요.</AlertDescription>
        </Alert>
      )}

      <Tabs defaultValue="general">
        <div className="flex overflow-x-auto pb-2">
          <TabsList className="inline-flex h-auto p-1 gap-1">
            <TabsTrigger value="general" className="flex items-center gap-2 px-3 py-2">
              <Settings className="h-4 w-4" />
              <span>일반 설정</span>
            </TabsTrigger>
            <TabsTrigger value="database" className="flex items-center gap-2 px-3 py-2">
              <Database className="h-4 w-4" />
              <span>데이터베이스</span>
            </TabsTrigger>
            <TabsTrigger value="users" className="flex items-center gap-2 px-3 py-2">
              <Users className="h-4 w-4" />
              <span>사용자 관리</span>
            </TabsTrigger>
            <TabsTrigger value="security" className="flex items-center gap-2 px-3 py-2">
              <Shield className="h-4 w-4" />
              <span>보안 설정</span>
            </TabsTrigger>
            <TabsTrigger value="email" className="flex items-center gap-2 px-3 py-2">
              <Mail className="h-4 w-4" />
              <span>이메일 설정</span>
            </TabsTrigger>
            <TabsTrigger value="api" className="flex items-center gap-2 px-3 py-2">
              <Globe className="h-4 w-4" />
              <span>API 설정</span>
            </TabsTrigger>
            <TabsTrigger value="backup" className="flex items-center gap-2 px-3 py-2">
              <Server className="h-4 w-4" />
              <span>백업 및 복원</span>
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="general" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>일반 설정</CardTitle>
              <CardDescription>시스템의 기본 설정을 관리합니다.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="site-name">사이트 이름</Label>
                  <Input id="site-name" defaultValue="해외인력채용관리시스템" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="admin-email">관리자 이메일</Label>
                  <Input id="admin-email" defaultValue="admin@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="timezone">시간대</Label>
                  <Select defaultValue="Asia/Seoul">
                    <SelectTrigger id="timezone">
                      <SelectValue placeholder="시간대 선택" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Asia/Seoul">서울 (GMT+9)</SelectItem>
                      <SelectItem value="Asia/Tokyo">도쿄 (GMT+9)</SelectItem>
                      <SelectItem value="America/New_York">뉴욕 (GMT-5)</SelectItem>
                      <SelectItem value="Europe/London">런던 (GMT+0)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="language">기본 언어</Label>
                  <Select defaultValue="ko">
                    <SelectTrigger id="language">
                      <SelectValue placeholder="언어 선택" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ko">한국어</SelectItem>
                      <SelectItem value="en">영어</SelectItem>
                      <SelectItem value="ja">일본어</SelectItem>
                      <SelectItem value="zh">중국어</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="maintenance-mode">유지보수 모드</Label>
                  <Switch id="maintenance-mode" />
                </div>
                <p className="text-sm text-muted-foreground">
                  유지보수 모드를 활성화하면 관리자를 제외한 모든 사용자가 사이트에 접근할 수 없습니다.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="debug-mode">디버그 모드</Label>
                  <Switch id="debug-mode" />
                </div>
                <p className="text-sm text-muted-foreground">
                  디버그 모드를 활성화하면 개발자를 위한 추가 정보가 표시됩니다.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>테마 설정</CardTitle>
              <CardDescription>시스템의 테마 및 디자인을 설정합니다.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="default-theme">기본 테마</Label>
                <Select defaultValue="system">
                  <SelectTrigger id="default-theme">
                    <SelectValue placeholder="테마 선택" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">라이트 모드</SelectItem>
                    <SelectItem value="dark">다크 모드</SelectItem>
                    <SelectItem value="system">시스템 설정 따름</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>주 색상</Label>
                <div className="grid grid-cols-5 gap-2">
                  {["#1e88e5", "#43a047", "#e53935", "#5e35b1", "#fb8c00"].map((color) => (
                    <div
                      key={color}
                      className="w-full h-10 rounded-md cursor-pointer border-2 border-transparent hover:border-primary"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="custom-css">사용자 정의 CSS 사용</Label>
                  <Switch id="custom-css" />
                </div>
                <Textarea placeholder="여기에 사용자 정의 CSS를 입력하세요." className="font-mono text-sm" rows={5} />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="database" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>데이터베이스 설정</CardTitle>
              <CardDescription>데이터베이스 연결 및 설정을 관리합니다.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="db-type">데이터베이스 유형</Label>
                  <Select defaultValue="mysql">
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
                  <Input id="db-host" defaultValue="localhost" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="db-port">포트</Label>
                  <Input id="db-port" defaultValue="3306" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="db-name">데이터베이스 이름</Label>
                  <Input id="db-name" defaultValue="recruitment_system" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="db-user">사용자 이름</Label>
                  <Input id="db-user" defaultValue="admin" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="db-password">비밀번호</Label>
                  <Input id="db-password" type="password" defaultValue="********" />
                </div>
              </div>

              <div className="flex items-center gap-2 mt-4">
                <Button variant="outline">연결 테스트</Button>
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
              <CardTitle>데이터베이스 성능</CardTitle>
              <CardDescription>데이터베이스 성능 및 최적화 설정</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="connection-pool">연결 풀 크기</Label>
                <Input id="connection-pool" type="number" defaultValue="10" />
                <p className="text-sm text-muted-foreground">데이터베이스 연결 풀의 최대 크기를 설정합니다.</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="query-cache">쿼리 캐싱 사용</Label>
                  <Switch id="query-cache" defaultChecked />
                </div>
                <p className="text-sm text-muted-foreground">자주 사용되는 쿼리 결과를 캐싱하여 성능을 향상시킵니다.</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="cache-ttl">캐시 TTL (초)</Label>
                <Input id="cache-ttl" type="number" defaultValue="300" />
                <p className="text-sm text-muted-foreground">캐시된 쿼리 결과의 유효 시간을 초 단위로 설정합니다.</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="users" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>사용자 관리 설정</CardTitle>
              <CardDescription>사용자 계정 및 권한 관리 설정</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="allow-registration">회원가입 허용</Label>
                  <Switch id="allow-registration" defaultChecked />
                </div>
                <p className="text-sm text-muted-foreground">새로운 사용자의 회원가입을 허용합니다.</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="email-verification">이메일 인증 필요</Label>
                  <Switch id="email-verification" defaultChecked />
                </div>
                <p className="text-sm text-muted-foreground">회원가입 시 이메일 인증을 요구합니다.</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="admin-approval">관리자 승인 필요</Label>
                  <Switch id="admin-approval" />
                </div>
                <p className="text-sm text-muted-foreground">새 계정이 활성화되기 전에 관리자 승인을 요구합니다.</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="default-role">기본 사용자 역할</Label>
                <Select defaultValue="member">
                  <SelectTrigger id="default-role">
                    <SelectValue placeholder="역할 선택" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="admin">관리자</SelectItem>
                    <SelectItem value="company">고객사</SelectItem>
                    <SelectItem value="member">회원</SelectItem>
                    <SelectItem value="guest">비회원</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="session-timeout">세션 타임아웃 (분)</Label>
                <Input id="session-timeout" type="number" defaultValue="60" />
                <p className="text-sm text-muted-foreground">
                  사용자 세션이 자동으로 만료되는 시간을 분 단위로 설정합니다.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>비밀번호 정책</CardTitle>
              <CardDescription>사용자 비밀번호 정책 설정</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="min-password-length">최소 비밀번호 길이</Label>
                <Input id="min-password-length" type="number" defaultValue="8" />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="require-uppercase">대문자 포함 필요</Label>
                  <Switch id="require-uppercase" defaultChecked />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="require-number">숫자 포함 필요</Label>
                  <Switch id="require-number" defaultChecked />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="require-special">특수문자 포함 필요</Label>
                  <Switch id="require-special" defaultChecked />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password-expiry">비밀번호 만료 기간 (일)</Label>
                <Input id="password-expiry" type="number" defaultValue="90" />
                <p className="text-sm text-muted-foreground">0으로 설정하면 비밀번호가 만료되지 않습니다.</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>보안 설정</CardTitle>
              <CardDescription>시스템 보안 설정을 관리합니다.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="enable-2fa">2단계 인증 활성화</Label>
                  <Switch id="enable-2fa" defaultChecked />
                </div>
                <p className="text-sm text-muted-foreground">사용자에게 2단계 인증 옵션을 제공합니다.</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="force-2fa-admin">관리자 2단계 인증 강제</Label>
                  <Switch id="force-2fa-admin" defaultChecked />
                </div>
                <p className="text-sm text-muted-foreground">관리자 계정에 2단계 인증을 필수로 요구합니다.</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="login-attempts">최대 로그인 시도 횟수</Label>
                <Input id="login-attempts" type="number" defaultValue="5" />
                <p className="text-sm text-muted-foreground">이 횟수를 초과하면 계정이 일시적으로 잠깁니다.</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="lockout-time">계정 잠금 시간 (분)</Label>
                <Input id="lockout-time" type="number" defaultValue="30" />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="enable-captcha">CAPTCHA 활성화</Label>
                  <Switch id="enable-captcha" defaultChecked />
                </div>
                <p className="text-sm text-muted-foreground">로그인 및 회원가입 시 CAPTCHA를 요구합니다.</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>SSL 설정</CardTitle>
              <CardDescription>SSL 인증서 및 HTTPS 설정</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="force-https">HTTPS 강제</Label>
                  <Switch id="force-https" defaultChecked />
                </div>
                <p className="text-sm text-muted-foreground">모든 HTTP 요청을 HTTPS로 리다이렉트합니다.</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="ssl-certificate">SSL 인증서 경로</Label>
                <Input id="ssl-certificate" defaultValue="/etc/ssl/certs/example.crt" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="ssl-key">SSL 키 경로</Label>
                <Input id="ssl-key" defaultValue="/etc/ssl/private/example.key" />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="hsts">HSTS 활성화</Label>
                  <Switch id="hsts" defaultChecked />
                </div>
                <p className="text-sm text-muted-foreground">HTTP Strict Transport Security를 활성화합니다.</p>
              </div>
            </CardContent>
            <CardFooter>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Badge variant="outline" className="bg-green-50 text-green-800 dark:bg-green-900 dark:text-green-300">
                  유효함
                </Badge>
                <span>인증서 만료일: 2026-05-21</span>
              </div>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="email" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>이메일 설정</CardTitle>
              <CardDescription>이메일 서버 및 알림 설정을 관리합니다.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="mail-driver">메일 드라이버</Label>
                  <Select defaultValue="smtp">
                    <SelectTrigger id="mail-driver">
                      <SelectValue placeholder="드라이버 선택" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="smtp">SMTP</SelectItem>
                      <SelectItem value="sendmail">Sendmail</SelectItem>
                      <SelectItem value="mailgun">Mailgun</SelectItem>
                      <SelectItem value="ses">Amazon SES</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="mail-host">SMTP 호스트</Label>
                  <Input id="mail-host" defaultValue="smtp.example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="mail-port">SMTP 포트</Label>
                  <Input id="mail-port" defaultValue="587" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="mail-encryption">암호화</Label>
                  <Select defaultValue="tls">
                    <SelectTrigger id="mail-encryption">
                      <SelectValue placeholder="암호화 선택" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="tls">TLS</SelectItem>
                      <SelectItem value="ssl">SSL</SelectItem>
                      <SelectItem value="none">없음</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="mail-username">SMTP 사용자 이름</Label>
                  <Input id="mail-username" defaultValue="noreply@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="mail-password">SMTP 비밀번호</Label>
                  <Input id="mail-password" type="password" defaultValue="********" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="mail-from-address">발신 이메일</Label>
                  <Input id="mail-from-address" defaultValue="noreply@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="mail-from-name">발신자 이름</Label>
                  <Input id="mail-from-name" defaultValue="해외인력채용관리시스템" />
                </div>
              </div>

              <div className="flex items-center gap-2 mt-4">
                <Button variant="outline">테스트 이메일 보내기</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>이메일 알림 설정</CardTitle>
              <CardDescription>시스템 이메일 알림 설정을 관리합니다.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="notify-new-user">새 회원 가입 알림</Label>
                  <Switch id="notify-new-user" defaultChecked />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="notify-new-company">새 고객사 등록 알림</Label>
                  <Switch id="notify-new-company" defaultChecked />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="notify-new-project">새 프로젝트 등록 알림</Label>
                  <Switch id="notify-new-project" defaultChecked />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="notify-application">지원서 제출 알림</Label>
                  <Switch id="notify-application" defaultChecked />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="admin-emails">관리자 알림 수신 이메일</Label>
                <Textarea
                  id="admin-emails"
                  placeholder="여러 이메일은 쉼표로 구분하세요."
                  defaultValue="admin@example.com, manager@example.com"
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="api" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>API 설정</CardTitle>
              <CardDescription>API 접근 및 제한 설정을 관리합니다.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="enable-api">API 활성화</Label>
                  <Switch id="enable-api" defaultChecked />
                </div>
                <p className="text-sm text-muted-foreground">시스템 API 엔드포인트를 활성화합니다.</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="api-rate-limit">API 요청 제한 (분당)</Label>
                <Input id="api-rate-limit" type="number" defaultValue="60" />
                <p className="text-sm text-muted-foreground">IP당 분당 최대 API 요청 수를 설정합니다.</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="api-token-expiry">API 토큰 만료 시간 (일)</Label>
                <Input id="api-token-expiry" type="number" defaultValue="30" />
                <p className="text-sm text-muted-foreground">0으로 설정하면 토큰이 만료되지 않습니다.</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="api-logging">API 로깅 활성화</Label>
                  <Switch id="api-logging" defaultChecked />
                </div>
                <p className="text-sm text-muted-foreground">모든 API 요청과 응답을 로깅합니다.</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>API 키 관리</CardTitle>
              <CardDescription>API 키 및 접근 권한을 관리합니다.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="border rounded-md">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="p-2 text-left font-medium">키 이름</th>
                      <th className="p-2 text-left font-medium">API 키</th>
                      <th className="p-2 text-left font-medium">생성일</th>
                      <th className="p-2 text-left font-medium">마지막 사용</th>
                      <th className="p-2 text-left font-medium">상태</th>
                      <th className="p-2 text-left font-medium"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-2">메인 API 키</td>
                      <td className="p-2">
                        <code className="bg-muted p-1 rounded text-xs">sk_live_*************</code>
                      </td>
                      <td className="p-2">2025-01-15</td>
                      <td className="p-2">2025-05-20</td>
                      <td className="p-2">
                        <Badge variant="default">활성</Badge>
                      </td>
                      <td className="p-2">
                        <Button variant="ghost" size="sm">
                          관리
                        </Button>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2">테스트 API 키</td>
                      <td className="p-2">
                        <code className="bg-muted p-1 rounded text-xs">sk_test_*************</code>
                      </td>
                      <td className="p-2">2025-03-10</td>
                      <td className="p-2">2025-05-19</td>
                      <td className="p-2">
                        <Badge variant="default">활성</Badge>
                      </td>
                      <td className="p-2">
                        <Button variant="ghost" size="sm">
                          관리
                        </Button>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2">개발 API 키</td>
                      <td className="p-2">
                        <code className="bg-muted p-1 rounded text-xs">sk_dev_**************</code>
                      </td>
                      <td className="p-2">2025-02-20</td>
                      <td className="p-2">2025-04-15</td>
                      <td className="p-2">
                        <Badge variant="outline">비활성</Badge>
                      </td>
                      <td className="p-2">
                        <Button variant="ghost" size="sm">
                          관리
                        </Button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <Button size="sm">
                <Plus className="mr-2 h-4 w-4" />새 API 키 생성
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="backup" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>백업 설정</CardTitle>
              <CardDescription>시스템 데이터 백업 설정을 관리합니다.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="auto-backup">자동 백업 활성화</Label>
                  <Switch id="auto-backup" defaultChecked />
                </div>
                <p className="text-sm text-muted-foreground">정기적인 자동 백업을 활성화합니다.</p>
              </div>

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
                <p className="text-sm text-muted-foreground">자동 백업이 실행될 시간을 설정합니다.</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="backup-retention">백업 보관 기간 (일)</Label>
                <Input id="backup-retention" type="number" defaultValue="30" />
                <p className="text-sm text-muted-foreground">
                  백업 파일이 자동으로 삭제되기 전까지의 보관 기간을 설정합니다.
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="backup-location">백업 저장 위치</Label>
                <Select defaultValue="local">
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

              <div className="space-y-2">
                <Label htmlFor="backup-path">백업 경로</Label>
                <Input id="backup-path" defaultValue="/var/backups/recruitment-system" />
              </div>

              <div className="flex items-center gap-2 mt-4">
                <Button variant="outline">지금 백업</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>백업 이력</CardTitle>
              <CardDescription>시스템 백업 이력을 확인합니다.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="border rounded-md">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="p-2 text-left font-medium">파일명</th>
                      <th className="p-2 text-left font-medium">크기</th>
                      <th className="p-2 text-left font-medium">생성일</th>
                      <th className="p-2 text-left font-medium">상태</th>
                      <th className="p-2 text-left font-medium"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-2">backup-2025-05-21-03-00-00.zip</td>
                      <td className="p-2">256.4 MB</td>
                      <td className="p-2">2025-05-21 03:00:00</td>
                      <td className="p-2">
                        <Badge variant="default">완료</Badge>
                      </td>
                      <td className="p-2">
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="sm">
                            다운로드
                          </Button>
                          <Button variant="ghost" size="sm">
                            복원
                          </Button>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2">backup-2025-05-20-03-00-00.zip</td>
                      <td className="p-2">255.8 MB</td>
                      <td className="p-2">2025-05-20 03:00:00</td>
                      <td className="p-2">
                        <Badge variant="default">완료</Badge>
                      </td>
                      <td className="p-2">
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="sm">
                            다운로드
                          </Button>
                          <Button variant="ghost" size="sm">
                            복원
                          </Button>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2">backup-2025-05-19-03-00-00.zip</td>
                      <td className="p-2">254.2 MB</td>
                      <td className="p-2">2025-05-19 03:00:00</td>
                      <td className="p-2">
                        <Badge variant="default">완료</Badge>
                      </td>
                      <td className="p-2">
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="sm">
                            다운로드
                          </Button>
                          <Button variant="ghost" size="sm">
                            복원
                          </Button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
