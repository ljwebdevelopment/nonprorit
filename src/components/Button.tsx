import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'donate' | 'ghost' | 'ghost-light'

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-gold text-ink-900 hover:bg-gold-light active:bg-gold-dark border border-transparent',
  donate: 'bg-red text-paper hover:bg-red-light active:bg-red-dark border border-transparent',
  ghost: 'bg-transparent text-ink border border-ink/25 hover:border-ink hover:bg-ink/5',
  'ghost-light':
    'bg-transparent text-paper border border-paper/50 hover:border-paper hover:bg-paper/10',
}

const baseClasses =
  'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-sans text-sm font-semibold tracking-wide transition-colors duration-150 disabled:cursor-not-allowed disabled:opacity-60'

interface CommonProps {
  variant?: Variant
  children: ReactNode
  className?: string
}

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined }

type ButtonAsAnchor = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }

type ButtonProps = ButtonAsButton | ButtonAsAnchor

export default function Button({
  variant = 'primary',
  children,
  className = '',
  ...rest
}: ButtonProps) {
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`

  if ('href' in rest && rest.href) {
    const { href, ...anchorRest } = rest as ButtonAsAnchor
    return (
      <a href={href} className={classes} {...anchorRest}>
        {children}
      </a>
    )
  }

  const buttonRest = rest as ButtonAsButton
  return (
    <button className={classes} {...buttonRest}>
      {children}
    </button>
  )
}
