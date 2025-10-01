# 동해기계 홈페이지 리뉴얼 프로젝트 개요

## 1. 주요 메시지(슬로건)
> "We will achieve global growth with limitless passion and a focus on safety."
- 글로벌 성장, 안전 중심, 열정, 신뢰성 강조
- Hero 영역 및 주요 CTA, 회사소개, 제품/사업, PR 등 모든 주요 화면에 반복 노출

## 2. 목적
- 기존 사이트(donghae.co.kr)의 메시지 계승
- 최신 UX/UI, 모바일 퍼스트, 다국어 지원(ko/en)
- 신뢰성, 글로벌 확장성, 안전 중심, 열정 강조
- 대상: 해외/국내 고객, 파트너, 투자자, 언론사

## 3. 기술 스택
- Frontend: Vite + React + TypeScript + TailwindCSS
- State/Route: React Router, i18n(react-i18next)
- Backend: Firebase (Auth, Firestore, Storage, Cloud Functions)
- Infra/배포: Vercel, GitHub Actions
- 보안: HTTPS, reCAPTCHA v3, Firestore rules, 역할 기반 접근

## 4. IA (Information Architecture)
```
/:locale(ko|en)/
  ├─ Home (Hero, 슬로건, CTA)
  ├─ Heavy Equipment Solutions (제품 카테고리)
  ├─ Plant Solutions (공장/설비)
  ├─ About Us (회사소개)
  ├─ Factory (공장)
  ├─ Business (사업영역)
  ├─ R&D (연구개발)
  ├─ PR Center (뉴스, 영상, 보도자료)
  ├─ CS Center / Inquiry (문의, 개인정보 동의)
  ├─ Downloads (카탈로그, 매뉴얼)
  ├─ Company (연혁, 네트워크)
  ├─ Policy/Privacy (한/영)
  └─ Admin (CMS: CRUD)
```

## 5. Firestore 컬렉션 설계
- products : { slug, locale, name, specs[], downloads[], gallery[] }
- categories : { slug, locale, name }
- posts : { type('news'|'video'), locale, title, body, cover, publishedAt }
- inquiries : { name, email, company, message, agreePrivacy, status }
- users : { uid, role('admin'|'editor'|'viewer'), locales[] }
- site_settings : { locales[], nav[], footer[], seoDefaults }

## 6. 핵심 기능
- 다국어 지원 (ko/en) → URL 기반 locale, i18n JSON 관리
- Inquiry 폼 → Firestore 저장 + Cloud Function 알림 (이메일/Slack)
- 관리자 CMS → /admin 경로, CRUD UI, Firebase Auth role 기반 접근
- PR Center → 게시물 카드형 리스트 + 상세 뷰
- 제품 상세 → 스펙표, 갤러리, 다운로드
- 정책/보안 → 개인정보처리방침 페이지, 약관 동의 체크박스 필수

## 7. 디자인 가이드
- 컬러: 네이비(#0E2A47) + 블루(#1E88E5) + 그레이
- Hero: 슬로건 대문자, 강조 폰트, 와이드 배경
- 모든 주요 화면에 슬로건 반복 노출, 브랜드 일관성 강화
- 제품/사업: 카드형, 갤러리, 스펙표, CTA 버튼
- 회사소개: 연혁 타임라인, 글로벌 네트워크 지도/카드
- PR: 뉴스/영상/보도자료 카드, 상세 뷰
- 문의: Toss 스타일 폼, 모달 피드백, 접근성 강화
- 레이아웃: 카드/그리드 기반, 반응형 모바일 퍼스트
- 접근성: WCAG 기준(명도 대비, 폰트 크기, 포커스 스타일)

## 8. 배포 & 운영
- GitHub → Vercel 자동 빌드/배포
- DNS: 가비아 → Vercel CNAME 연결
- 분석: GA4, Search Console
- 백업: Firestore/Storage 일일 export
