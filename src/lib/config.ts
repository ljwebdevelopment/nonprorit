// Central place for the (currently placeholder) backend endpoints.
// Set these in a .env.local file once a real grant-application backend
// and donation/contact pipeline exist. See .env.example.
export const ORG_EMAIL = import.meta.env.VITE_ORG_EMAIL ?? 'hello@sproutfundok.org'

export const GRANT_APPLICATION_WEBHOOK_URL = import.meta.env.VITE_GRANT_APPLICATION_WEBHOOK_URL as
  | string
  | undefined

export const CONTACT_WEBHOOK_URL = import.meta.env.VITE_CONTACT_WEBHOOK_URL as string | undefined
