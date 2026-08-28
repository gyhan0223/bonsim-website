import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_CONFIG } from '@/config/site';

export const metadata: Metadata = {
  title: '고객지원',
  description: `${SITE_CONFIG.name} 서비스 이용, 신고·안전, 개인정보, 계정 삭제 관련 문의 안내입니다.`,
};

const SUPPORT_TOPICS = [
  {
    title: '서비스 이용 문의',
    body: '가입, 본인확인, 얼굴 인증, 추천·매칭, 채팅 등 서비스 이용 중 궁금한 점이나 문제가 있을 때 문의해 주세요.',
  },
  {
    title: '신고 · 안전 관련 문의',
    body: '다른 이용자의 부적절한 행동은 앱 내 신고 기능으로 알릴 수 있습니다. 신고 처리 결과나 안전과 관련해 추가로 알릴 내용이 있다면 문의해 주세요. 긴급한 위험 상황은 112 등 수사기관에 먼저 연락하세요.',
  },
  {
    title: '개인정보 관련 문의',
    body: '개인정보 열람·정정·삭제·처리정지 요청 등 개인정보 처리에 관한 문의를 받습니다. 자세한 처리 기준은 개인정보처리방침을 참고해 주세요.',
    link: { href: '/privacy', label: '개인정보처리방침 보기' },
  },
  {
    title: '계정 삭제 문의',
    body: '계정 삭제는 앱에서 직접 진행할 수 있습니다. 앱을 사용할 수 없는 상황이라면 문의를 통해 요청해 주세요.',
    link: { href: '/account-deletion', label: '계정 삭제 안내 보기' },
  },
];

export default function SupportPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-12">
      <h1 className="text-2xl font-bold tracking-tight">고객지원</h1>
      <p className="mt-3 text-[15px] leading-7 text-ink-soft">
        {SITE_CONFIG.name} 이용 중 궁금한 점이나 불편한 점이 있다면 아래 안내를 확인해 주세요.
      </p>

      <div className="mt-10 space-y-10">
        {SUPPORT_TOPICS.map((topic) => (
          <section key={topic.title}>
            <h2 className="text-lg font-bold">{topic.title}</h2>
            <p className="mt-2 text-[15px] leading-7 text-ink-soft">{topic.body}</p>
            {topic.link && (
              <Link
                href={topic.link.href}
                className="mt-2 inline-block text-sm font-medium text-accent underline underline-offset-4"
              >
                {topic.link.label}
              </Link>
            )}
          </section>
        ))}
      </div>

      <section className="mt-12 rounded-xl border border-line bg-surface p-6">
        <h2 className="text-lg font-bold">문의하기</h2>
        {SITE_CONFIG.supportEmail ? (
          <>
            <p className="mt-2 text-[15px] leading-7 text-ink-soft">
              아래 이메일로 문의를 보내 주시면 확인 후 답변드리겠습니다.
            </p>
            <a
              href={`mailto:${SITE_CONFIG.supportEmail}`}
              className="mt-4 inline-block rounded-lg bg-ink px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              {SITE_CONFIG.supportEmail}
            </a>
          </>
        ) : (
          <p className="mt-2 text-[15px] leading-7 text-ink-soft">
            문의 창구는 서비스 정식 출시와 함께 이 페이지에서 안내할 예정입니다.
          </p>
        )}
      </section>
    </div>
  );
}
