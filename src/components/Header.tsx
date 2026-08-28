import Link from 'next/link';
import { SITE_CONFIG } from '@/config/site';

const NAV_LINKS = [
  { href: '/', label: '서비스 소개' },
  { href: '/support', label: '고객지원' },
];

export function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-line bg-surface/95 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-3xl items-center justify-between px-5">
        <Link href="/" className="text-lg font-bold tracking-tight">
          {SITE_CONFIG.name}
        </Link>
        <nav aria-label="주요 메뉴">
          <ul className="flex items-center gap-5">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-ink-soft transition-colors hover:text-ink"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
