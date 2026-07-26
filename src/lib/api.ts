import type { ContactPayload, GrantApplicationPayload } from '../types'
import { CONTACT_WEBHOOK_URL, GRANT_APPLICATION_WEBHOOK_URL, ORG_EMAIL } from './config'

export interface SubmitResult {
  ok: boolean
  message: string
}

async function postJson(url: string, body: unknown): Promise<SubmitResult> {
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })

  if (!res.ok) {
    throw new Error(`Request failed with status ${res.status}`)
  }

  return { ok: true, message: 'Submitted successfully.' }
}

// No real backend exists yet. Once VITE_GRANT_APPLICATION_WEBHOOK_URL is set
// (e.g. to a serverless function or form-handling service), this will start
// posting real submissions with no changes needed at the call site.
export async function submitGrantApplication(
  payload: GrantApplicationPayload,
): Promise<SubmitResult> {
  if (GRANT_APPLICATION_WEBHOOK_URL) {
    return postJson(GRANT_APPLICATION_WEBHOOK_URL, payload)
  }

  console.info('[Sprout Fund] No grant application backend configured yet. Payload:', payload)
  return {
    ok: true,
    message: `Thanks! We don't have an online backend wired up yet, so a member of our team will follow up by email at ${ORG_EMAIL} to confirm your application was received.`,
  }
}

export async function submitContactMessage(payload: ContactPayload): Promise<SubmitResult> {
  if (CONTACT_WEBHOOK_URL) {
    return postJson(CONTACT_WEBHOOK_URL, payload)
  }

  console.info('[Sprout Fund] No contact backend configured yet. Payload:', payload)
  return {
    ok: true,
    message: `Thanks for reaching out! Email us directly at ${ORG_EMAIL} if you'd like a faster reply.`,
  }
}
