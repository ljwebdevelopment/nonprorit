import Button from '../components/Button'
import Container from '../components/Container'
import PhotoSlot from '../components/PhotoSlot'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-ink">
      <PhotoSlot
        src="/images/hero.png"
        alt=""
        label="hero.png — wide shot, teen founder at work or rural OK scenery, 1920×1200"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-ink-900/95 via-ink-900/80 to-ink-900/40"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-ink-900/20" />

      <Container className="relative grid gap-12 py-24 sm:py-32 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-40">
        <div className="flex flex-col items-start gap-7">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold-light/40 bg-paper/10 px-4 py-1.5 font-mono text-xs font-semibold uppercase tracking-[0.15em] text-gold-light">
            Tahlequah, Oklahoma
          </span>

          <h1 className="font-display text-5xl font-semibold leading-[1.05] text-paper sm:text-6xl">
            Every idea starts as a seed.
          </h1>

          <p className="max-w-xl text-lg leading-relaxed text-paper/85 sm:text-xl">
            Sprout Fund gives rural Oklahoma teens, ages 13&ndash;19, small
            micro-grants of $100&ndash;$500 and plain-spoken founder guides
            to turn a small business idea into something real.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button href="#apply" variant="primary">
              Apply for a grant
            </Button>
            <Button href="#donate" variant="donate">
              Donate now
            </Button>
          </div>

          <dl className="mt-4 grid grid-cols-3 gap-6 border-t border-paper/20 pt-6 text-left">
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-[0.1em] text-paper/60">
                Grant size
              </dt>
              <dd className="mt-1 font-display text-xl font-semibold text-paper">$100&ndash;$500</dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-[0.1em] text-paper/60">
                Ages
              </dt>
              <dd className="mt-1 font-display text-xl font-semibold text-paper">13&ndash;19</dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-[0.1em] text-paper/60">
                Where
              </dt>
              <dd className="mt-1 font-display text-xl font-semibold text-paper">Rural OK</dd>
            </div>
          </dl>
        </div>

        <div className="relative mx-auto hidden w-full max-w-sm lg:mx-0 lg:block lg:justify-self-end">
          <div className="rotate-2 rounded-2xl border-2 border-gold/70 bg-cream p-6 shadow-card transition-transform duration-300 hover:rotate-0">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-red">
              Seed Packet &middot; Series A
            </p>
            <p className="mt-3 font-display text-2xl font-semibold text-ink">
              &ldquo;A lawn-mowing route, a beading business, a mobile car
              wash&mdash;we&rsquo;ve funded all three.&rdquo;
            </p>
            <div className="mt-5 flex items-center gap-3 border-t border-dashed border-ink/25 pt-4">
              <svg width="30" height="30" viewBox="0 0 40 40" fill="none" aria-hidden="true">
                <circle cx="20" cy="20" r="19" fill="#A5312C" stroke="#D4A93A" strokeWidth="1.5" />
                <path d="M20 29V19" stroke="#D4A93A" strokeWidth="2" strokeLinecap="round" />
                <path d="M20 19c0 0-8 0-8-8 8 0 8 8 8 8Z" fill="#D4A93A" />
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
