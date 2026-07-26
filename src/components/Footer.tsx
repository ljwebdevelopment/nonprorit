import Container from './Container'
import { ORG_EMAIL } from '../lib/config'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-ink-900 py-12 text-paper/70">
      <Container className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2.5 font-display text-lg font-semibold text-paper">
            <svg width="24" height="24" viewBox="0 0 32 32" fill="none" aria-hidden="true">
              <rect width="32" height="32" rx="7" fill="#D4A93A" />
              <path d="M16 25V15" stroke="#212F41" strokeWidth="2" strokeLinecap="round" />
              <path d="M16 15C16 15 9 15 9 8C16 8 16 15 16 15Z" fill="#212F41" />
            </svg>
            Sprout Fund
          </div>
          <p className="text-sm">Tahlequah, Oklahoma</p>
          <a href={`mailto:${ORG_EMAIL}`} className="text-sm underline decoration-paper/30 underline-offset-4 hover:text-paper">
            {ORG_EMAIL}
          </a>
        </div>

        <nav aria-label="Footer" className="flex flex-col gap-2 text-sm sm:items-end">
          <a href="#how-it-works" className="hover:text-paper">
            How it works
          </a>
          <a href="#guides" className="hover:text-paper">
            Founder guides
          </a>
          <a href="#apply" className="hover:text-paper">
            Apply for a grant
          </a>
          <a href="#support" className="hover:text-paper">
            Support a teen founder
          </a>
        </nav>
      </Container>

      <Container className="mt-10 border-t border-paper/10 pt-6">
        <p className="text-xs text-paper/60">
          &copy; {year} Sprout Fund. A micro-grant program for teen founders in rural Oklahoma.
        </p>
      </Container>
    </footer>
  )
}
