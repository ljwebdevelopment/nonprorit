// Central place for the (currently placeholder) backend endpoints.
// Fill these in once a real grant-application backend and donation/contact
// pipeline exist — every form on the page will start posting for real with
// no other changes needed.
const CONFIG = {
  ORG_EMAIL: 'hello@sproutfundok.org',
  GRANT_APPLICATION_WEBHOOK_URL: '',
  CONTACT_WEBHOOK_URL: '',
}

async function postJson(url, body) {
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

async function submitGrantApplication(payload) {
  if (CONFIG.GRANT_APPLICATION_WEBHOOK_URL) {
    return postJson(CONFIG.GRANT_APPLICATION_WEBHOOK_URL, payload)
  }

  console.info('[Sprout Fund] No grant application backend configured yet. Payload:', payload)
  return {
    ok: true,
    message: `Thanks! We don't have an online backend wired up yet, so a member of our team will follow up by email at ${CONFIG.ORG_EMAIL} to confirm your application was received.`,
  }
}

async function submitContactMessage(payload) {
  if (CONFIG.CONTACT_WEBHOOK_URL) {
    return postJson(CONFIG.CONTACT_WEBHOOK_URL, payload)
  }

  console.info('[Sprout Fund] No contact backend configured yet. Payload:', payload)
  return {
    ok: true,
    message: `Thanks for reaching out! Email us directly at ${CONFIG.ORG_EMAIL} if you'd like a faster reply.`,
  }
}

function setStatus(el, ok, message, lightVariant) {
  el.textContent = message
  el.className = 'form-status'
  if (ok) {
    el.classList.add(lightVariant ? 'form-status--success-light' : 'form-status--success')
  } else {
    el.classList.add(lightVariant ? 'form-status--error-light' : 'form-status--error')
  }
}

function wireForm({ formId, statusId, submitFn, lightVariant, genericError }) {
  const form = document.getElementById(formId)
  const statusEl = document.getElementById(statusId)
  if (!form || !statusEl) return

  const submitBtn = form.querySelector('button[type="submit"]')
  const submitLabel = submitBtn.textContent

  form.addEventListener('submit', async (event) => {
    event.preventDefault()

    const payload = {}
    new FormData(form).forEach((value, key) => {
      payload[key] = value
    })

    submitBtn.disabled = true
    submitBtn.textContent = 'Sending…'
    statusEl.textContent = ''

    try {
      const result = await submitFn(payload)
      setStatus(statusEl, result.ok, result.message, lightVariant)
      if (result.ok) {
        form.reset()
      }
    } catch {
      setStatus(statusEl, false, genericError, lightVariant)
    } finally {
      submitBtn.disabled = false
      submitBtn.textContent = submitLabel
    }
  })
}

function wirePhotoFallbacks() {
  document.querySelectorAll('img[data-fallback-label]').forEach((img) => {
    img.addEventListener(
      'error',
      () => {
        const wrap = document.createElement('div')
        wrap.className = `photo-fallback ${img.className}`
        wrap.innerHTML = `
          <div class="photo-fallback__inner">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" stroke-width="1.6" />
              <circle cx="9" cy="10.5" r="1.75" stroke="currentColor" stroke-width="1.6" />
              <path d="M4.5 17.5 9 13l3 3 3.5-4.5L20 17" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <span class="photo-fallback__label">${img.dataset.fallbackLabel}</span>
          </div>
        `
        img.replaceWith(wrap)
      },
      { once: true },
    )
  })
}

document.getElementById('year').textContent = new Date().getFullYear()

wireForm({
  formId: 'apply-form',
  statusId: 'apply-status',
  submitFn: submitGrantApplication,
  lightVariant: false,
  genericError: 'Something went wrong sending your application. Please try again in a moment.',
})

wireForm({
  formId: 'donate-form',
  statusId: 'donate-status',
  submitFn: submitContactMessage,
  lightVariant: true,
  genericError: 'Something went wrong sending your message. Please try again in a moment.',
})

wirePhotoFallbacks()
