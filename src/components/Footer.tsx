import Link from 'next/link';
import { SITE_CONFIG, businessInfoEntries } from '@/config/site';

const FOOTER_LINKS = [
  { href: '/', label: '서비스 소개' },
  { href: '/terms', label: '이용약관' },
  { href: '/privacy', label: '개인정보처리방침' },
  { href: '/community-guidelines', label: '커뮤니티 가이드라인' },
  { href: '/account-deletion', label: '계정 삭제 안내' },
  { href: '/support', label: '고객지원' },
];

export function Footer() {
  const businessInfo = businessInfoEntries();

  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto max-w-3xl px-5 py-10">
        <p className="text-base font-bold">{SITE_CONFIG.name}</p>
        <p className="mt-1 text-sm text-ink-faint">{SITE_CONFIG.tagline}</p>

        <nav aria-label="사이트 링크" className="mt-6">
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {FOOTER_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-ink-soft transition-colors hover:text-ink"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {businessInfo.length > 0 && (
          <dl className="mt-8 space-y-1 border-t border-line pt-6 text-xs text-ink-faint">
            {businessInfo.map((entry) => (
              <div key={entry.label} className="flex gap-2">
                <dt className="shrink-0 font-medium">{entry.label}</dt>
                <dd>{entry.value}</dd>
              </div>
            ))}
          </dl>
        )}

        <p className="mt-8 text-xs text-ink-faint">
          © {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
