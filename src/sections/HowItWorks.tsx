import Container from '../components/Container'
import PhotoSlot from '../components/PhotoSlot'
import SectionHeading from '../components/SectionHeading'

const stages = [
  {
    step: '01',
    name: 'Sow',
    title: 'Apply in 10 minutes',
    description:
      'Tell us who you are and what you want to build. No business plan required—just a real idea and a clear ask.',
  },
  {
    step: '02',
    name: 'Grow',
    title: 'Get funded and guided',
    description:
      'Approved founders receive a $100–$500 micro-grant plus founder guides and a check-in with our team to help you plan next steps.',
  },
  {
    step: '03',
    name: 'Harvest',
    title: 'Build it and report back',
    description:
      'Launch your idea, put the grant to work, and send us a short update on what grew. Your story helps fund the next teen founder.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="border-b border-ink/10 bg-paper py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="How it works"
          title="From seed to harvest, in three stages"
          description="Sprout Fund keeps the process short and honest, the same way a good seed packet tells you exactly what to expect."
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16">
          <PhotoSlot
            src="/images/how-it-works.png"
            alt="A group of teens sitting together outdoors"
            label="how-it-works.png — teen founder building/selling product, 4:5"
            className="aspect-[4/5] w-full rounded-2xl object-cover shadow-card"
          />

          <ol className="relative flex flex-col gap-10">
            <div
              aria-hidden="true"
              className="absolute left-6 top-4 bottom-4 hidden w-px border-l-2 border-dashed border-ink/15 sm:block"
            />

            {stages.map((stage) => (
              <li key={stage.step} className="relative flex gap-6">
                <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-red bg-paper font-display text-lg font-semibold text-red">
                  {stage.step}
                </span>
                <div className="flex flex-col gap-1.5 pt-1">
                  <span className="font-mono text-xs font-semibold uppercase tracking-[0.15em] text-gold-dark">
                    {stage.name}
                  </span>
                  <p className="font-display text-xl font-semibold text-ink">{stage.title}</p>
                  <p className="text-sm leading-relaxed text-ink/65">{stage.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  )
}
