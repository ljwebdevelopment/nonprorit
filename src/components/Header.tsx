import { Logo } from './Logo'

const navLinks = [
  { href: '#how-it-works', label: 'How it works' },
  { href: '#guides', label: 'Founder guides' },
  { href: '#stories', label: 'Stories' },
  { href: '#apply', label: 'Apply' },
]

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-6 py-4 sm:px-8">
        <a href="#top" aria-label="Sprout Fund home">
          <Logo markClassName="h-9 w-9 sm:h-10 sm:w-10" />
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink/75 transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#apply"
            className="hidden rounded-full border border-ink/20 px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-ink sm:inline-flex"
          >
            Apply now
          </a>
          <a
            href="#donate"
            className="inline-flex items-center gap-2 rounded-full bg-red px-5 py-2.5 text-sm font-semibold text-paper transition-colors hover:bg-red-light"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M12 20.5s-7.5-4.6-9.8-9C.6 8.1 2 4.5 5.6 4c2.2-.3 4.2.8 6.4 3 2.2-2.2 4.2-3.3 6.4-3 3.6.5 5 4.1 3.4 7.5-2.3 4.4-9.8 9-9.8 9Z"
                fill="currentColor"
              />
            </svg>
            Donate
          </a>
        </div>
      </div>
    </header>
  )
}
