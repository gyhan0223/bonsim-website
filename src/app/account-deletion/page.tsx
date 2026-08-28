import type { Metadata } from 'next';
import Link from 'next/link';
import { LegalList, LegalPage, LegalSection } from '@/components/LegalPage';
import { SITE_CONFIG } from '@/config/site';

export const metadata: Metadata = {
  title: '계정 삭제 안내',
  description: `${SITE_CONFIG.name} 계정을 삭제(회원 탈퇴)하는 방법과 삭제 시 데이터 처리 기준을 안내합니다.`,
};

/**
 * Google Play "데이터 삭제" 정책 제출용 URL로 사용 예정.
 *
 * [출시 전 확정 필요]
 * 1. 현재 앱의 탈퇴(delete-account Edge Function)는 soft delete
 *    (users.status='deleted' + 세션 무효화)이며, 같은 번호로 재로그인하면 복구 가능한 구조.
 * 2. 일정 기간 경과 후 실제 파기/익명화 파이프라인이 아직 미구현(P0) — 보관기간·파기 정책
 *    확정 및 배치 구현 후 이 페이지의 문구(특히 복구 가능 기간)를 갱신할 것.
 * 3. Google Play 출시 전, 앱을 사용할 수 없는 사용자도 웹에서 계정 삭제 요청을 시작할 수
 *    있는 절차(요청 접수 → 본인확인 → 처리)가 추가로 필요.
 * 웹에서의 직접 삭제 요청 기능은 이번 범위에서 구현하지 않음 — 안내 페이지까지만.
 */
export default function AccountDeletionPage() {
  return (
    <LegalPage title="계정 삭제 안내">
      <p className="text-[15px] leading-7 text-ink-soft">
        {SITE_CONFIG.name} 계정 삭제(회원 탈퇴)는 앱 안에서 직접 진행할 수 있습니다. 별도의 문의
        없이 언제든지 탈퇴할 수 있으며, 절차는 아래와 같습니다.
      </p>

      <LegalSection title="앱에서 탈퇴하는 방법">
        <ol className="list-decimal space-y-2 pl-5">
          <li>{SITE_CONFIG.name} 앱을 실행하고 로그인합니다.</li>
          <li>
            하단 탭에서 <strong className="text-ink">내 정보</strong>로 이동합니다.
          </li>
          <li>
            화면 아래의 <strong className="text-ink">회원 탈퇴</strong> 버튼을 누릅니다.
          </li>
          <li>안내 내용을 확인한 뒤 탈퇴를 확정하면 즉시 처리됩니다.</li>
        </ol>
      </LegalSection>

      <LegalSection title="탈퇴하면 어떻게 되나요?">
        <LegalList
          items={[
            '추천과 매칭이 즉시 중단되며, 다른 이용자에게 더 이상 프로필이 노출되지 않습니다.',
            '모든 기기에서 로그아웃 처리됩니다.',
            '탈퇴 후 같은 번호로 다시 로그인하면 기존 계정을 복구할지 선택할 수 있습니다. 복구하지 않으면 계정은 탈퇴 상태로 유지됩니다.',
          ]}
        />
      </LegalSection>

      <LegalSection title="데이터는 어떻게 처리되나요?">
        <LegalList
          items={[
            '계정 삭제 시 서비스 제공에 필요했던 개인정보는 관련 정책 및 법적 의무에 따라 삭제되거나, 필요한 범위에서 분리 보관될 수 있습니다.',
            '중복 가입 방지와 이용 제한 이력 관리를 위한 최소한의 내부 식별값(일방향 암호화 처리됨)은 관련 정책에 따라 보관될 수 있습니다.',
            '상대방 보호를 위해 필요한 정보(신고 처리 기록, 상대방과의 대화 기록 등)는 관련 정책에 따라 일정 범위에서 유지될 수 있습니다.',
            '법령에서 보존을 요구하는 정보는 해당 법령이 정한 기간 동안 보존 후 파기됩니다.',
          ]}
        />
        <p>
          자세한 기준은{' '}
          <Link href="/privacy" className="text-accent underline underline-offset-4">
            개인정보처리방침
          </Link>
          을 참고해 주세요.
        </p>
      </LegalSection>

      <LegalSection title="앱을 사용할 수 없는 경우">
        <p>
          앱 접근이 불가능한 상황(기기 분실 등)에서 계정 삭제가 필요하다면 고객지원을 통해 문의해
          주세요. 본인 확인 후 처리를 도와드립니다.
        </p>
        <p>
          <Link href="/support" className="text-accent underline underline-offset-4">
            고객지원 바로가기
          </Link>
        </p>
      </LegalSection>
    </LegalPage>
  );
}
