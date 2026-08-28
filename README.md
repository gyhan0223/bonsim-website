# 본심 공식 웹사이트

> **"서로의 얼굴은 AI만 먼저 봅니다."**

사진 없는 AI 블라인드 소개팅 앱 **본심**의 공식 웹사이트입니다.

이 사이트의 목적은 마케팅용 랜딩페이지가 아니라 다음과 같습니다.

1. NHN KCP 휴대폰 본인인증 계약/심사 제출용 공식 서비스 웹사이트
2. 개인정보처리방침 공개 URL (`/privacy`)
3. 이용약관 공개 URL (`/terms`)
4. 고객지원 URL (`/support`)
5. App Store / Google Play 출시 시 공식 서비스 URL
6. 계정 삭제 안내 URL (`/account-deletion` — Google Play 데이터 삭제 정책 제출용)
7. 커뮤니티 가이드라인 URL (`/community-guidelines`)

앱 저장소: [gyhan0223/ai-blind-dating-app](https://github.com/gyhan0223/ai-blind-dating-app)

## 스택

- Next.js 15 (App Router) · TypeScript · Tailwind CSS 4
- 정적 안내/정책 페이지만 존재 — DB·로그인·서버 기능 없음
- Vercel 배포 가능

## 개발

```bash
npm install
npm run dev        # http://localhost:3000
npm run lint
npm run typecheck
npm run build
```

## 서비스 정보 관리

사업자 정보·고객지원 이메일 등은 `src/config/site.ts`의 `SITE_CONFIG` 한 곳에서 관리합니다.
**빈 값(`''`)인 필드는 화면에 렌더링되지 않으며**, 실제 값이 확정되면 해당 파일만 채우면
footer / 고객지원 / 개인정보처리방침에 반영됩니다.

KCP 계약 신청 전 반드시 채워야 하는 값과 출시 전 확정이 필요한 문서 항목은
`src/config/site.ts` 및 각 페이지 상단의 `[출시 전 확정 필요]` 주석을 참고하세요.

## 배포 (Vercel)

1. Vercel에서 이 저장소를 Import (framework: Next.js — 기본 설정 그대로)
2. 배포 후 도메인 연결 (Settings → Domains)
3. `src/config/site.ts`의 `siteUrl`을 실제 도메인으로 교체 후 재배포
4. 해당 URL을 PortOne/KCP 계약 신청의 "웹사이트 URL"에 입력
