const navLinks = [
  { href: '#how-it-works', label: 'How it works' },
  { href: '#guides', label: 'Founder guides' },
  { href: '#apply', label: 'Apply' },
  { href: '#support', label: 'Support' },
]

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 sm:px-8">
        <a href="#top" className="flex items-center gap-2.5 font-display text-xl font-semibold text-ink">
          <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden="true">
            <rect width="32" height="32" rx="7" className="fill-ink" />
            <path d="M16 25V15" stroke="#D4A93A" strokeWidth="2" strokeLinecap="round" />
            <path d="M16 15C16 15 9 15 9 8C16 8 16 15 16 15Z" fill="#D4A93A" />
            <path d="M16 18C16 18 23 18 23 12C16 12 16 18 16 18Z" fill="#6F8B5C" />
          </svg>
          Sprout Fund
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
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

        <a
          href="#apply"
          className="rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-paper transition-colors hover:bg-ink-600"
        >
          Apply now
        </a>
      </div>
    </header>
  )
}
