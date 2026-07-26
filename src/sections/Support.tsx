import { useState } from 'react'
import type { FormEvent } from 'react'
import Container from '../components/Container'
import SectionHeading from '../components/SectionHeading'
import { submitContactMessage } from '../lib/api'
import { ORG_EMAIL } from '../lib/config'
import type { ContactPayload, SubmissionStatus } from '../types'

const initialForm: ContactPayload = { name: '', email: '', message: '' }

const inputClasses =
  'w-full rounded-lg border border-paper/25 bg-transparent px-4 py-3 text-paper placeholder:text-paper/40 focus:border-paper transition-colors'

export default function Support() {
  const [form, setForm] = useState<ContactPayload>(initialForm)
  const [status, setStatus] = useState<SubmissionStatus>('idle')
  const [message, setMessage] = useState('')

  function updateField<K extends keyof ContactPayload>(field: K, value: ContactPayload[K]) {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('submitting')

    try {
      const result = await submitContactMessage(form)
      setStatus(result.ok ? 'success' : 'error')
      setMessage(result.message)
      if (result.ok) {
        setForm(initialForm)
      }
    } catch {
      setStatus('error')
      setMessage('Something went wrong sending your message. Please try again in a moment.')
    }
  }

  return (
    <section id="support" className="bg-ink py-20 sm:py-28">
      <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="flex flex-col gap-6">
          <SectionHeading
            tone="light"
            eyebrow="Support"
            title="Help a teen founder get started"
            description="We're not set up to process donations online yet, but we'd love to talk with you about supporting a grant, sponsoring a founder guide, or partnering with us in rural Oklahoma."
          />
          <a
            href={`mailto:${ORG_EMAIL}?subject=Supporting%20Sprout%20Fund`}
            className="inline-flex w-fit items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-ink-900 transition-colors hover:bg-gold-light"
          >
            Email us at {ORG_EMAIL}
          </a>
        </div>

        <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label htmlFor="support-name" className="text-sm font-semibold text-paper">
                Name
              </label>
              <input
                id="support-name"
                name="name"
                type="text"
                required
                autoComplete="name"
                className={inputClasses}
                value={form.name}
                onChange={(e) => updateField('name', e.target.value)}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="support-email" className="text-sm font-semibold text-paper">
                Email address
              </label>
              <input
                id="support-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className={inputClasses}
                value={form.email}
                onChange={(e) => updateField('email', e.target.value)}
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="support-message" className="text-sm font-semibold text-paper">
              How would you like to help?
            </label>
            <textarea
              id="support-message"
              name="message"
              required
              rows={4}
              placeholder="e.g. I'd like to fund a grant, sponsor a guide, or ask about a partnership..."
              className={inputClasses}
              value={form.message}
              onChange={(e) => updateField('message', e.target.value)}
            />
          </div>

          <button
            type="submit"
            disabled={status === 'submitting'}
            className="mt-2 inline-flex w-fit items-center justify-center gap-2 rounded-full border border-paper/40 px-7 py-3 text-sm font-semibold text-paper transition-colors hover:bg-paper/10 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === 'submitting' ? 'Sending…' : 'Send message'}
          </button>

          <p role="status" aria-live="polite" className="min-h-[1.25rem] text-sm">
            {status === 'success' && <span className="text-gold-light">{message}</span>}
            {status === 'error' && <span className="text-red-300">{message}</span>}
          </p>
        </form>
      </Container>
    </section>
  )
}
