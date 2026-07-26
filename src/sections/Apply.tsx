import { useState } from 'react'
import type { FormEvent } from 'react'
import Container from '../components/Container'
import SectionHeading from '../components/SectionHeading'
import { submitGrantApplication } from '../lib/api'
import type { GrantApplicationPayload, SubmissionStatus } from '../types'

const initialForm: GrantApplicationPayload = {
  name: '',
  email: '',
  age: '',
  town: '',
  ideaDescription: '',
  grantUse: '',
}

const inputClasses =
  'w-full rounded-lg border border-ink/20 bg-paper px-4 py-3 text-ink placeholder:text-ink/35 focus:border-ink transition-colors'

export default function Apply() {
  const [form, setForm] = useState<GrantApplicationPayload>(initialForm)
  const [status, setStatus] = useState<SubmissionStatus>('idle')
  const [message, setMessage] = useState('')

  function updateField<K extends keyof GrantApplicationPayload>(
    field: K,
    value: GrantApplicationPayload[K],
  ) {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('submitting')

    try {
      const result = await submitGrantApplication(form)
      setStatus(result.ok ? 'success' : 'error')
      setMessage(result.message)
      if (result.ok) {
        setForm(initialForm)
      }
    } catch {
      setStatus('error')
      setMessage('Something went wrong sending your application. Please try again in a moment.')
    }
  }

  return (
    <section id="apply" className="border-b border-ink/10 bg-paper py-20 sm:py-28">
      <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <SectionHeading
          eyebrow="Apply"
          title="Ready to plant your idea?"
          description="Fill out the form below in a few minutes. We read every application ourselves—no algorithms, no gatekeeping. We'll follow up by email either way."
        />

        <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-semibold text-ink">
                Full name
              </label>
              <input
                id="name"
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
              <label htmlFor="email" className="text-sm font-semibold text-ink">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className={inputClasses}
                value={form.email}
                onChange={(e) => updateField('email', e.target.value)}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="age" className="text-sm font-semibold text-ink">
                Age
              </label>
              <input
                id="age"
                name="age"
                type="number"
                min={13}
                max={19}
                required
                className={inputClasses}
                value={form.age}
                onChange={(e) => updateField('age', e.target.value)}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="town" className="text-sm font-semibold text-ink">
                Town / county
              </label>
              <input
                id="town"
                name="town"
                type="text"
                required
                placeholder="e.g. Tahlequah"
                className={inputClasses}
                value={form.town}
                onChange={(e) => updateField('town', e.target.value)}
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="ideaDescription" className="text-sm font-semibold text-ink">
              What's your business idea?
            </label>
            <textarea
              id="ideaDescription"
              name="ideaDescription"
              required
              rows={4}
              className={inputClasses}
              value={form.ideaDescription}
              onChange={(e) => updateField('ideaDescription', e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="grantUse" className="text-sm font-semibold text-ink">
              What would the grant fund?
            </label>
            <textarea
              id="grantUse"
              name="grantUse"
              required
              rows={3}
              placeholder="e.g. lawn mower repairs, craft supplies, a starter inventory of..."
              className={inputClasses}
              value={form.grantUse}
              onChange={(e) => updateField('grantUse', e.target.value)}
            />
          </div>

          <button
            type="submit"
            disabled={status === 'submitting'}
            className="mt-2 inline-flex w-fit items-center justify-center gap-2 rounded-full bg-ink px-7 py-3 text-sm font-semibold text-paper transition-colors hover:bg-ink-600 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === 'submitting' ? 'Sending…' : 'Submit application'}
          </button>

          <p role="status" aria-live="polite" className="min-h-[1.25rem] text-sm">
            {status === 'success' && <span className="text-sage-dark">{message}</span>}
            {status === 'error' && <span className="text-red-700">{message}</span>}
          </p>
        </form>
      </Container>
    </section>
  )
}
