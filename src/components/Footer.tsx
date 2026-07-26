import Container from './Container'
import { Logo } from './Logo'
import { ORG_EMAIL } from '../lib/config'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-ink-900 py-12 text-paper/70">
      <Container className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex flex-col gap-3">
          <Logo variant="reversed" markClassName="h-8 w-8" />
          <p className="text-sm">Tahlequah, Oklahoma</p>
          <a
            href={`mailto:${ORG_EMAIL}`}
            className="text-sm underline decoration-paper/30 underline-offset-4 hover:text-paper"
          >
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
          <a href="#donate" className="font-semibold text-gold-light hover:text-gold">
            Donate
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
