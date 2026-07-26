export default function LogoMark({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <circle cx="20" cy="20" r="19" fill="#A5312C" stroke="#D4A93A" strokeWidth="1.5" />
      <path d="M20 29V19" stroke="#D4A93A" strokeWidth="2" strokeLinecap="round" />
      <path d="M20 19c0 0-8 0-8-8 8 0 8 8 8 8Z" fill="#D4A93A" />
      <path d="M20 23c0 0 8 0 8-8-8 0-8 8-8 8Z" fill="#F1E4CD" />
    </svg>
  )
}

export function Logo({
  variant = 'default',
  showWordmark = true,
  className = '',
  markClassName = 'h-10 w-10',
}: {
  variant?: 'default' | 'reversed'
  showWordmark?: boolean
  className?: string
  markClassName?: string
}) {
  const wordmarkColor = variant === 'reversed' ? 'text-paper' : 'text-ink'
  const accentColor = variant === 'reversed' ? 'text-gold-light' : 'text-red'

  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <LogoMark className={`shrink-0 ${markClassName}`} />
      {showWordmark ? (
        <span className={`font-display text-xl font-semibold leading-none ${wordmarkColor}`}>
          Sprout <span className={accentColor}>Fund</span>
        </span>
      ) : null}
    </span>
  )
}
