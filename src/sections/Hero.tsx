import Button from '../components/Button'
import Container from '../components/Container'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-ink/10 bg-paper">
      <div
        aria-hidden="true"
        className="bg-seed-texture pointer-events-none absolute inset-0 opacity-40"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-1/2 hidden h-[560px] w-[560px] -translate-y-1/2 rounded-full border border-ink/10 lg:block"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 top-1/2 hidden h-[380px] w-[380px] -translate-y-1/2 rounded-full border border-ink/10 lg:block"
      />

      <Container className="relative grid gap-12 py-20 sm:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-32">
        <div className="flex flex-col items-start gap-7">
          <span className="inline-flex items-center gap-2 rounded-full border border-ink/20 bg-cream px-4 py-1.5 font-mono text-xs font-semibold uppercase tracking-[0.15em] text-ink/70">
            Tahlequah, Oklahoma
          </span>

          <h1 className="font-display text-5xl font-semibold leading-[1.05] text-ink sm:text-6xl">
            Every idea starts as a seed.
          </h1>

          <p className="max-w-xl text-lg leading-relaxed text-ink/75 sm:text-xl">
            Sprout Fund gives rural Oklahoma teens, ages 13&ndash;19, small
            micro-grants of $100&ndash;$500 and plain-spoken founder guides
            to turn a small business idea into something real.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button href="#apply" variant="primary">
              Apply for a grant
            </Button>
            <Button href="#support" variant="ghost">
              Support a teen founder
            </Button>
          </div>

          <dl className="mt-4 grid grid-cols-3 gap-6 border-t border-ink/10 pt-6 text-left">
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-[0.1em] text-ink/60">
                Grant size
              </dt>
              <dd className="mt-1 font-display text-xl font-semibold text-ink">$100&ndash;$500</dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-[0.1em] text-ink/60">
                Ages
              </dt>
              <dd className="mt-1 font-display text-xl font-semibold text-ink">13&ndash;19</dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-[0.1em] text-ink/60">
                Where
              </dt>
              <dd className="mt-1 font-display text-xl font-semibold text-ink">Rural OK</dd>
            </div>
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-sm lg:mx-0 lg:justify-self-end">
          <div className="rotate-2 rounded-2xl border-2 border-ink bg-cream p-6 shadow-card transition-transform duration-300 hover:rotate-0">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-gold-dark">
              Seed Packet &middot; Series A
            </p>
            <p className="mt-3 font-display text-2xl font-semibold text-ink">
              &ldquo;A lawn-mowing route, a beading business, a mobile car
              wash&mdash;we&rsquo;ve funded all three.&rdquo;
            </p>
            <div className="mt-5 flex items-center gap-3 border-t border-dashed border-ink/25 pt-4">
              <svg width="34" height="34" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                <rect width="32" height="32" rx="7" className="fill-ink" />
                <path d="M16 25V15" stroke="#D4A93A" strokeWidth="2" strokeLinecap="round" />
                <path d="M16 15C16 15 9 15 9 8C16 8 16 15 16 15Z" fill="#D4A93A" />
                <path d="M16 18C16 18 23 18 23 12C16 12 16 18 16 18Z" fill="#6F8B5C" />
              </svg>
              <p className="font-mono text-xs uppercase tracking-[0.1em] text-ink/60">
                Grown right here in Oklahoma
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
