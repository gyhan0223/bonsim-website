/**
 * 본심 서비스 정보 단일 관리 파일.
 *
 * 빈 문자열('')인 필드는 UI에 렌더링되지 않는다 (가짜 값 노출 금지).
 * 실제 값이 확정되면 여기만 채우면 footer / support / 정책 페이지에 반영된다.
 *
 * [출시 전 확정 필요 — KCP 본인인증 계약 심사 전 필수]
 * - legalName: 상호명(법인명 또는 개인사업자 상호)          ← TODO
 * - representative: 대표자 성명                              ← TODO
 * - businessRegistrationNumber: 사업자등록번호               ← TODO
 * - address: 사업장 주소                                     ← TODO
 * - supportEmail: 실제 수신 가능한 고객지원 이메일           ← TODO
 * - supportPhone: 고객지원 전화번호 (선택이지만 심사에 유리) ← TODO
 * - privacyOfficer: 개인정보 보호책임자 성명/직책            ← TODO (개인정보처리방침 필수 기재사항)
 * - siteUrl: 실제 배포 도메인으로 교체                       ← TODO
 */
export const SITE_CONFIG = {
  name: '본심',
  tagline: '사진 없는 AI 블라인드 소개팅',
  description:
    '사진을 먼저 고르는 소개팅 대신, 성격과 가치관, 취향을 바탕으로 AI가 하루 한 사람을 소개합니다.',

  // TODO: Vercel 배포 후 실제 도메인으로 교체 (예: https://bonsim.app)
  siteUrl: 'https://bonsim-website.vercel.app',

  // ---- 사업자 정보 (미확정 — 빈 값은 화면에 표시되지 않음) ----
  legalName: '', // TODO: 상호명
  representative: '', // TODO: 대표자명
  businessRegistrationNumber: '', // TODO: 사업자등록번호 (000-00-00000)
  address: '', // TODO: 사업장 주소
  supportEmail: '', // TODO: 고객지원 이메일 (실제 수신 가능한 주소만)
  supportPhone: '', // TODO: 고객지원 전화번호

  // TODO: 개인정보 보호책임자 (예: { name: '홍길동', title: '대표' })
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
  if (SITE_CONFIG.supportEmail) entries.push({ label: '이메일', value: SITE_CONFIG.supportEmail });
  if (SITE_CONFIG.supportPhone) entries.push({ label: '전화', value: SITE_CONFIG.supportPhone });
  return entries;
}
