import type { ReactNode } from 'react';

/**
 * 약관/정책 문서 공용 레이아웃.
 * 문서형 페이지의 제목 · 시행(안내) 문구 · 본문 타이포그래피를 통일한다.
 */
export function LegalPage({
  title,
  notice,
  children,
}: {
  title: string;
  /** 문서 상단 안내 문구 (초안 고지 등) */
  notice?: string;
  children: ReactNode;
}) {
  return (
    <article className="mx-auto max-w-3xl px-5 py-12">
      <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
      {notice && (
        <p className="mt-4 rounded-lg border border-line bg-surface px-4 py-3 text-sm text-ink-soft">
          {notice}
        </p>
      )}
      <div className="legal-body mt-8 space-y-10">{children}</div>
    </article>
  );
}

/** 문서 섹션: h2 제목 + 본문 */
export function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="text-lg font-bold">{title}</h2>
      <div className="mt-3 space-y-3 text-[15px] leading-7 text-ink-soft">{children}</div>
    </section>
  );
}

/** 불릿 목록 — 문서 전반에서 동일한 스타일 사용 */
export function LegalList({ items }: { items: ReactNode[] }) {
  return (
    <ul className="list-disc space-y-1.5 pl-5">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}
