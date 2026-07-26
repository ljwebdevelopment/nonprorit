# Sprout Fund

Landing site for Sprout Fund, a nonprofit giving rural Oklahoma teens (ages
13&ndash;19) micro-grants of $100&ndash;$500 to launch small business ideas,
plus free founder guides on business basics.

## Stack

Plain static HTML/CSS/JS. No framework, no build step, no npm install.

```
index.html    all sections, single page with anchor links
css/styles.css  hand-written styles (theme tokens as CSS custom properties)
js/main.js      form submission logic + a photo-fallback helper
images/         photos referenced by index.html
favicon.svg
```

## Getting started

Open `index.html` directly in a browser, or serve the folder with any static
file server, e.g.:

```bash
python3 -m http.server 8000
# or
npx serve .
```

Deployment (GitHub Pages) is handled by `.github/workflows/deploy-pages.yml`,
which just uploads these files as-is&mdash;there's nothing to compile.

## Photos

`index.html` uses `<img data-fallback-label="...">` for the three photo
spots. `js/main.js` listens for the image `error` event and swaps in a
labeled placeholder if the file is missing, so a missing photo never shows
a broken-image icon. Currently filled in:

- `images/hero.png` &mdash; hero background
- `images/how-it-works.png` &mdash; How It Works photo
- `images/founder-spotlight.png` &mdash; founder stories photo

To replace a photo, just overwrite the file at that path (same filename).

## Wiring up a real backend later

Both forms (grant application, donate/contact) submit through
`submitGrantApplication` / `submitContactMessage` in `js/main.js`, which
`fetch()`-post JSON to whichever webhook URL is set in the `CONFIG` object
at the top of that file:

- `CONFIG.GRANT_APPLICATION_WEBHOOK_URL`
- `CONFIG.CONTACT_WEBHOOK_URL`

Until those are set, submissions log to the console and the UI shows a
friendly fallback message pointing people to `CONFIG.ORG_EMAIL`. Donation
and payment processing isn't implemented yet&mdash;the Donate section only
offers a contact form and a `mailto:` link.
