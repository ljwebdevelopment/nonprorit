import Container from '../components/Container'

const stats = [
  { value: '$0', label: 'Cost to apply' },
  { value: '~2 wks', label: 'Time to a decision' },
  { value: '100%', label: 'Applications read by a person' },
  { value: '4', label: 'Free founder guides' },
]

export default function ImpactBar() {
  return (
    <section className="bg-cream py-10">
      <Container>
        <div className="grid grid-cols-2 divide-x divide-dashed divide-ink/20 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1 px-2 py-3 text-center">
              <span className="font-display text-3xl font-semibold text-red sm:text-4xl">
                {stat.value}
              </span>
              <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-ink/60">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
