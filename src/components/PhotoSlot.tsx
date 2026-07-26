import { useState } from 'react'

// Renders a real <img> pointing at /public/images/<file>. Until that file
// exists, onError swaps in a styled placeholder that documents what shot
// belongs there — so the layout looks intentional today and needs zero
// code changes once a real photo is dropped in.
export default function PhotoSlot({
  src,
  alt,
  label,
  className = '',
}: {
  src: string
  alt: string
  label: string
  className?: string
}) {
  const [errored, setErrored] = useState(false)

  if (errored) {
    return (
      <div
        className={`flex items-center justify-center bg-gradient-to-br from-gold-light/30 via-sand to-red-50 ${className}`}
      >
        <div className="flex max-w-[16rem] flex-col items-center gap-2 p-6 text-center">
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
            className="text-ink/35"
          >
            <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" />
            <circle cx="9" cy="10.5" r="1.75" stroke="currentColor" strokeWidth="1.6" />
            <path
              d="M4.5 17.5 9 13l3 3 3.5-4.5L20 17"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-ink/45">{label}</span>
        </div>
      </div>
    )
  }

  return (
    <img src={src} alt={alt} loading="lazy" onError={() => setErrored(true)} className={className} />
  )
}
