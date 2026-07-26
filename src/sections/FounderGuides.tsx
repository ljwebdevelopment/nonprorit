import Container from '../components/Container'
import SectionHeading from '../components/SectionHeading'
import type { FounderGuide } from '../types'

const guides: FounderGuide[] = [
  {
    title: 'Business Plan Basics',
    description: 'A one-page plan template built for a first business, not an MBA.',
    status: 'coming-soon',
  },
  {
    title: 'Pricing 101',
    description: 'How to price your product or service so you actually make money.',
    status: 'coming-soon',
  },
  {
    title: 'Getting Your First Customer',
    description: 'Simple, low-cost ways to find and keep your first paying customers.',
    status: 'coming-soon',
  },
  {
    title: 'Registering a Business in Oklahoma',
    description: 'A plain-English walkthrough of what teens and families need to file.',
    status: 'coming-soon',
  },
]

export default function FounderGuides() {
  return (
    <section id="guides" className="border-b border-ink/10 bg-cream py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Founder guides"
          title="Free guides on business basics"
          description="No coding lessons here—just plain-spoken guides on the business fundamentals every founder needs: validating an idea, pricing it, finding customers, and registering it in Oklahoma."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {guides.map((guide) => (
            <div
              key={guide.title}
              className="flex flex-col justify-between gap-6 rounded-2xl border border-ink/15 bg-paper p-6 shadow-sm"
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-start justify-between gap-2">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 32 32"
                    fill="none"
                    aria-hidden="true"
                    className="text-ink/60"
                  >
                    <rect
                      x="6"
                      y="4"
                      width="20"
                      height="24"
                      rx="2"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path d="M11 11h10M11 16h10M11 21h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  <span className="rounded-full bg-gold/20 px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.1em] text-gold-dark">
                    Coming soon
                  </span>
                </div>
                <h3 className="font-display text-lg font-semibold text-ink">{guide.title}</h3>
                <p className="text-sm leading-relaxed text-ink/65">{guide.description}</p>
              </div>

              <button
                type="button"
                disabled
                className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/20 px-4 py-2 font-mono text-xs font-semibold uppercase tracking-[0.1em] text-ink/40 disabled:cursor-not-allowed"
              >
                PDF coming soon
              </button>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
