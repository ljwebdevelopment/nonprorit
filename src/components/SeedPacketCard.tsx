interface PacketRow {
  label: string
  value: string
}

export default function SeedPacketCard({
  variety,
  subtitle,
  rows,
  footerNote,
}: {
  variety: string
  subtitle: string
  rows: PacketRow[]
  footerNote?: string
}) {
  return (
    <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-2xl border-2 border-ink bg-cream shadow-card">
      <div className="bg-seed-texture bg-ink px-7 py-6 text-paper">
        <div className="flex items-center justify-between font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-gold-light">
          <span>Sprout Fund</span>
          <span>No. 001</span>
        </div>
        <h3 className="mt-3 font-display text-3xl font-semibold leading-none text-paper">
          {variety}
        </h3>
        <p className="mt-2 font-mono text-xs uppercase tracking-[0.15em] text-paper/70">
          {subtitle}
        </p>
      </div>

      <div
        aria-hidden="true"
        className="border-t-2 border-dashed border-ink/25"
      />

      <dl className="flex flex-col divide-y divide-dashed divide-ink/20 px-7 py-2">
        {rows.map((row) => (
          <div key={row.label} className="flex items-baseline justify-between gap-4 py-3">
            <dt className="font-mono text-[11px] font-semibold uppercase tracking-[0.15em] text-ink/65">
              {row.label}
            </dt>
            <dd className="text-right text-sm font-semibold text-ink">{row.value}</dd>
          </div>
        ))}
      </dl>

      {footerNote ? (
        <>
          <div aria-hidden="true" className="border-t-2 border-dashed border-ink/25" />
          <p className="px-7 py-4 text-center font-mono text-[11px] uppercase tracking-[0.1em] text-ink/60">
            {footerNote}
          </p>
        </>
      ) : null}
    </div>
  )
}
