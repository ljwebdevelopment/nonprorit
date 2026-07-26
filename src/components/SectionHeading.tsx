import type { ReactNode } from 'react'

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  tone = 'dark',
}: {
  eyebrow?: string
  title: ReactNode
  description?: ReactNode
  align?: 'left' | 'center'
  tone?: 'dark' | 'light'
}) {
  const alignClasses = align === 'center' ? 'text-center items-center mx-auto' : 'text-left'
  const eyebrowColor = tone === 'light' ? 'text-gold-light' : 'text-gold-dark'
  const titleColor = tone === 'light' ? 'text-paper' : 'text-ink'
  const descColor = tone === 'light' ? 'text-paper/75' : 'text-ink/70'

  return (
    <div className={`flex max-w-2xl flex-col gap-3 ${alignClasses}`}>
      {eyebrow ? (
        <span
          className={`font-mono text-xs font-semibold uppercase tracking-[0.2em] ${eyebrowColor}`}
        >
          {eyebrow}
        </span>
      ) : null}
      <h2 className={`text-3xl font-semibold leading-tight sm:text-4xl ${titleColor}`}>
        {title}
      </h2>
      {description ? (
        <p className={`text-base leading-relaxed sm:text-lg ${descColor}`}>{description}</p>
      ) : null}
    </div>
  )
}
