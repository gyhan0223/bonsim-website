/**
 * 본심 서비스 정보 단일 관리 파일.
 *
 * 빈 문자열('')인 필드는 UI에 렌더링되지 않는다 (가짜 값 노출 금지).
 * 실제 값이 확정되면 여기만 채우면 footer / support / 정책 페이지에 반영된다.
 *
 * 운영 주체 = 에이플(사업자), 브랜드/서비스명 = 본심.
 * 사업자 정보는 사업자등록증 기준.
 *
 * [출시 전 확정 필요]
 * - supportEmail: 실제 수신 가능한 고객지원 이메일           ← TODO
 * - supportPhone: 고객지원 전화번호 (선택이지만 심사에 유리) ← TODO
 * - privacyOfficer: 개인정보 보호책임자 — 최종 확정 전까지 임의 지정 금지 ← TODO
 * - siteUrl: 실제 배포 도메인 확정 시 교체                   ← TODO
 */
export const SITE_CONFIG = {
  name: '본심',
  tagline: '사진 없는 AI 블라인드 소개팅',
  description:
    '사진을 먼저 고르는 소개팅 대신, 성격과 가치관, 취향을 바탕으로 AI가 하루 한 사람을 소개합니다.',

  // TODO: 실제 도메인 확정/연결 후 교체 (Vercel 기본 도메인 placeholder)
  siteUrl: 'https://bonsim-website.vercel.app',

  // ---- 사업자 정보 (사업자등록증 기준) ----
  legalName: '에이플',
  representative: '한관영',
  businessRegistrationNumber: '391-28-01985',
  address: '서울특별시 강서구 까치산로 11, 602호(화곡동)',
  businessType: '정보통신업',
  businessCategory: '포털 및 기타 인터넷 정보 매개 서비스업',

  supportEmail: '', // TODO: 고객지원 이메일 (실제 수신 가능한 주소 확정 후 입력)
  supportPhone: '', // TODO: 고객지원 전화번호 (세무서 등 기관 연락처 사용 금지)

  // TODO: 개인정보 보호책임자 확정 후 입력 (예: { name: '...', title: '...' })
  privacyOfficer: { name: '', title: '' },
} as const;

/** 빈 문자열을 걸러낸 사업자 정보 항목 목록 — footer 렌더링용 */
export function businessInfoEntries(): { label: string; value: string }[] {
  const entries: { label: string; value: string }[] = [];
  if (SITE_CONFIG.legalName) entries.push({ label: '상호', value: SITE_CONFIG.legalName });
  if (SITE_CONFIG.representative) entries.push({ label: '대표자', value: SITE_CONFIG.representative });
  if (SITE_CONFIG.businessRegistrationNumber)
    entries.push({ label: '사업자등록번호', value: SITE_CONFIG.businessRegistrationNumber });
  if (SITE_CONFIG.address) entries.push({ label: '주소', value: SITE_CONFIG.address });
  if (SITE_CONFIG.businessType) entries.push({ label: '업태', value: SITE_CONFIG.businessType });
  if (SITE_CONFIG.businessCategory)
    entries.push({ label: '종목', value: SITE_CONFIG.businessCategory });
  if (SITE_CONFIG.supportEmail) entries.push({ label: '이메일', value: SITE_CONFIG.supportEmail });
  if (SITE_CONFIG.supportPhone) entries.push({ label: '전화', value: SITE_CONFIG.supportPhone });
  return entries;
}
