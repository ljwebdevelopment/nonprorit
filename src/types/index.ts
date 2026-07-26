export interface GrantApplicationPayload {
  name: string
  email: string
  age: string
  town: string
  ideaDescription: string
  grantUse: string
}

export interface ContactPayload {
  name: string
  email: string
  message: string
}

export type SubmissionStatus = 'idle' | 'submitting' | 'success' | 'error'

export interface FounderGuide {
  title: string
  description: string
  status: 'available' | 'coming-soon'
  href?: string
}
