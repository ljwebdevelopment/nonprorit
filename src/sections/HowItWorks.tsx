import Container from '../components/Container'
import SectionHeading from '../components/SectionHeading'

const stages = [
  {
    step: '01',
    name: 'Sow',
    title: 'Apply in 10 minutes',
    description:
      'Tell us who you are and what you want to build. No business plan required—just a real idea and a clear ask.',
    icon: (
      <path
        d="M16 26V16M16 16c0 0-8 0-8-8 8 0 8 8 8 8Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    step: '02',
    name: 'Grow',
    title: 'Get funded and guided',
    description:
      'Approved founders receive a $100–$500 micro-grant plus founder guides and a check-in with our team to help you plan next steps.',
    icon: (
      <path
        d="M16 27V14M16 14c0 0-9-1-9-10 9 0 9 10 9 10Zm0 4c0 0 9-1 9-10-9 0-9 10-9 10Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    step: '03',
    name: 'Harvest',
    title: 'Build it and report back',
    description:
      'Launch your idea, put the grant to work, and send us a short update on what grew. Your story helps fund the next teen founder.',
    icon: (
      <path
        d="M6 15h20l-2.5 11a2 2 0 0 1-2 1.6H10.5a2 2 0 0 1-2-1.6L6 15Zm4-3c0-3.3 2.7-6 6-6s6 2.7 6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-ink py-20 sm:py-28">
      <Container>
        <SectionHeading
          tone="light"
          eyebrow="How it works"
          title="From seed to harvest, in three stages"
          description="Sprout Fund keeps the process short and honest, the same way a good seed packet tells you exactly what to expect."
        />

        <div className="relative mt-14 grid gap-8 sm:grid-cols-3">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-8 hidden border-t-2 border-dashed border-paper/15 sm:block"
          />

          {stages.map((stage) => (
            <div
              key={stage.step}
              className="relative flex flex-col gap-4 rounded-2xl border border-paper/10 bg-paper/[0.04] p-6"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-gold bg-ink text-gold">
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 32 32"
                    fill="none"
                    aria-hidden="true"
                  >
                    {stage.icon}
                  </svg>
                </span>
                <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-paper/40">
                  Step {stage.step}
                </span>
              </div>

              <h3 className="font-display text-2xl font-semibold text-gold-light">
                {stage.name}
              </h3>
              <p className="text-base font-semibold text-paper">{stage.title}</p>
              <p className="text-sm leading-relaxed text-paper/70">{stage.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
