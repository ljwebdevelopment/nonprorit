# Sprout Fund

Landing site for Sprout Fund, a nonprofit giving rural Oklahoma teens (ages
13&ndash;19) micro-grants of $100&ndash;$500 to launch small business ideas,
plus free founder guides on business basics.

## Stack

- React + TypeScript
- Vite
- Tailwind CSS v4 (via `@tailwindcss/vite`, theme defined in `src/index.css`)

## Getting started

```bash
npm install
npm run dev
```

- `npm run build` &mdash; type-check and build for production
- `npm run lint` &mdash; run Oxlint
- `npm run preview` &mdash; preview the production build locally

## Project structure

```
src/
  components/   reusable UI (Button, Header, Footer, SeedPacketCard, ...)
  sections/     one file per landing page section (Hero, Apply, Support, ...)
  lib/          config + placeholder submission client (api.ts, config.ts)
  types/        shared TypeScript types for form payloads and content
```

## Wiring up a real backend later

Grant applications and support/donation messages currently submit through
`src/lib/api.ts`, which posts JSON to whatever webhook URLs are set in
environment variables (see `.env.example`):

- `VITE_GRANT_APPLICATION_WEBHOOK_URL`
- `VITE_CONTACT_WEBHOOK_URL`

Until those are configured, submissions log to the console and the UI shows
a friendly fallback message pointing people to `VITE_ORG_EMAIL`. Once a real
backend (serverless function, form service, etc.) exists, set the env vars
in `.env.local` and no component code needs to change. Donation/payment
processing is not implemented yet&mdash;the Support section currently only
offers a contact form and a `mailto:` link.
