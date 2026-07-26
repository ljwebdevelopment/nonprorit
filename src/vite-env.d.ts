/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_ORG_EMAIL?: string
  readonly VITE_GRANT_APPLICATION_WEBHOOK_URL?: string
  readonly VITE_CONTACT_WEBHOOK_URL?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
