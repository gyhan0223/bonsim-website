import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/config/site';

export const metadata: Metadata = {
  title: `${SITE_CONFIG.name} | ${SITE_CONFIG.tagline}`,
  description: SITE_CONFIG.description,
};

const FEATURES = [
  {
    title: '사진 없는 첫인상',
    body: '추천을 받는 단계에서는 상대방의 실제 얼굴 사진을 직접 보고 판단하지 않습니다. 외모 사진 대신 성격, 가치관, 생활 방식 같은 사람 자체에 대한 정보로 첫인상을 만듭니다.',
  },
  {
    title: 'AI 추천',
    body: 'AI가 외모 취향뿐 아니라 성격, 가치관, 생활 습관, 연애관을 함께 고려해 서로 잘 맞을 가능성이 높은 상대를 찾아 소개합니다. 추천은 참고를 위한 것으로, 특정한 결과를 보장하지는 않습니다.',
  },
  {
    title: '하루 한 명',
    body: '끝없이 넘기는 무한 스와이프 대신, 하루에 한 명을 신중하게 추천합니다. 더 적게 보고, 한 사람에게 더 집중할 수 있도록 설계했습니다.',
  },
  {
    title: '안전한 만남',
    body: '휴대전화 인증과 본인확인, 얼굴 인증으로 실제 사람인지 확인하는 절차를 거치며, 신고와 차단 기능으로 불쾌한 상황에 대응할 수 있습니다. 얼굴 사진은 상대방에게 공개되지 않습니다.',
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-line bg-surface">
        <div className="mx-auto max-w-3xl px-5 py-20 sm:py-28">
          <p className="text-sm font-semibold text-accent">{SITE_CONFIG.tagline}</p>
          <h1 className="mt-3 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            서로의 얼굴은
            <br />
            AI만 먼저 봅니다.
          </h1>
          <p className="mt-5 max-w-md text-base leading-7 text-ink-soft">
            사진을 먼저 고르는 소개팅 대신,
            <br />
            성격과 가치관, 취향을 바탕으로
            <br />
            AI가 하루 한 사람을 소개합니다.
          </p>
          <p className="mt-8 inline-block rounded-full border border-line bg-background px-4 py-2 text-sm font-medium text-ink-soft">
            현재 출시 준비 중입니다
          </p>
        </div>
      </section>

      {/* Features */}
      <section aria-labelledby="features-heading" className="mx-auto max-w-3xl px-5 py-16">
        <h2 id="features-heading" className="sr-only">
          본심이 소개팅을 다루는 방식
        </h2>
        <div className="space-y-12">
          {FEATURES.map((feature) => (
            <section key={feature.title}>
              <h3 className="text-lg font-bold">{feature.title}</h3>
              <p className="mt-2 max-w-xl text-[15px] leading-7 text-ink-soft">{feature.body}</p>
            </section>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section aria-labelledby="flow-heading" className="border-t border-line bg-surface">
        <div className="mx-auto max-w-3xl px-5 py-16">
          <h2 id="flow-heading" className="text-lg font-bold">
            이렇게 진행됩니다
          </h2>
          <ol className="mt-6 space-y-4">
            {[
              '휴대전화 인증과 본인확인으로 가입합니다.',
              '얼굴 인증으로 실제 사람인지 확인합니다. 얼굴 사진은 상대방에게 공개되지 않습니다.',
              '성격, 가치관, 연애관, 생활 습관, 외모 취향에 대한 설문에 답합니다.',
              'AI가 하루 한 명, 서로 잘 맞을 가능성이 높은 상대를 추천합니다.',
              '서로 호감이 확인되면 대화를 시작합니다.',
            ].map((step, i) => (
              <li key={i} className="flex gap-3">
                <span
                  aria-hidden="true"
                  className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-background text-xs font-bold text-ink-soft"
                >
                  {i + 1}
                </span>
                <span className="text-[15px] leading-7 text-ink-soft">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
