# No Bounds Marketing Website

Production-ready marketing and legal site for [No Bounds](https://nobounds.app)—a native iOS app for long-distance couples.

## Live deployment

| | |
|---|---|
| **Vercel project** | `no-bounds-landing-page` |
| **Production URL** | https://no-bounds-landing-page.vercel.app |
| **Git integration** | `shaan-m-patel/NoBounds-LandingPage` → `main` auto-deploys |
| **Latest deployment** | `dpl_3KWN4Eq48hXtVuX8ZoRh4nDiWkhC` (READY) |

Build succeeded on Vercel with all routes:

- `/` — Homepage
- `/help` — Support & FAQ
- `/privacy` — Privacy Policy
- `/terms` — Terms of Service
- `/account-deletion` — Account deletion instructions
- `/invite/[code]` — Invite landing (Universal Link fallback)

### Important: enable public access

The Vercel project currently has **Deployment Protection** enabled (`live: false` in project settings). Public visitors may see 404 or an SSO redirect until this is disabled.

**Before App Store submission:**

1. Open [Vercel Dashboard](https://vercel.com) → **no-bounds-landing-page** → **Settings** → **Deployment Protection**
2. Disable protection for **Production** deployments (or configure exceptions)
3. Verify https://no-bounds-landing-page.vercel.app loads without login

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build

```bash
npm run build
npm run start
```

## Routes

| Route | Purpose |
|-------|---------|
| `/` | Marketing homepage |
| `/help` | Support email, contact form, 15 FAQs |
| `/privacy` | Privacy Policy |
| `/terms` | Terms of Service |
| `/account-deletion` | In-app account deletion guide |
| `/invite/[code]` | Partner invite landing page |

**Not implemented (by design):** `/auth/callback` — consumed by the iOS app via Universal Links.

## Placeholders to customize

Update these in [`lib/constants.ts`](lib/constants.ts) and legal content files before App Store launch:

| Placeholder | Current value | File |
|-------------|---------------|------|
| App Store URL | `https://apps.apple.com/app/id0000000000` | `lib/constants.ts` |
| Legal entity | `[Your Company Name]` | `lib/content/privacy.ts`, `lib/content/terms.ts` |
| Governing law | `[State/Country]` | `lib/content/terms.ts` |
| Privacy email | `privacy@nobounds.app` | `lib/constants.ts` |
| Legal email | `legal@nobounds.app` | `lib/constants.ts` |
| Support email | `support@nobounds.app` | `lib/constants.ts` |

## Custom domain: nobounds.app

1. **Vercel Dashboard** → **no-bounds-landing-page** → **Settings** → **Domains**
2. Add `nobounds.app` and `www.nobounds.app`
3. Configure DNS at your registrar per Vercel instructions (A/CNAME records)
4. Set `nobounds.app` as the primary domain

The iOS app expects these URLs on `nobounds.app`:

- `https://nobounds.app` — marketing
- `https://nobounds.app/privacy`
- `https://nobounds.app/terms`
- `https://nobounds.app/help`
- `https://nobounds.app/invite/*` — partner pairing (Universal Links)
- `https://nobounds.app/auth/callback` — email auth links (handled by iOS app, not this site)

### Universal Links / apple-app-site-association

The `apple-app-site-association` file for iOS Universal Links may need to be served from `nobounds.app` (typically configured in the iOS project or via Vercel headers/rewrites). Ensure `/invite/*` and `/auth/callback` paths are included in the AASA file without conflicting with this Next.js site.

## Environment variables

None required for v1 (static marketing site). Future env vars (analytics, etc.) can be added in Vercel project settings.

## Tech stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS v4
- Deployed on Vercel

## Deployment

Pushes to `main` trigger automatic Vercel production deployments via GitHub integration.

Manual CLI deploy (requires `vercel login`):

```bash
npx vercel --prod
```

## Deployment summary

| Item | Status |
|------|--------|
| Local build | Passed (`npm run build`) |
| Vercel build | Passed (33s, all 8 pages) |
| Production deploy | READY on `no-bounds-landing-page.vercel.app` |
| Deploy method | Git push → Vercel Git integration (MCP `deploy_to_vercel` returned CLI instructions; CLI token was not configured) |
| Manual follow-up | Disable Deployment Protection, attach `nobounds.app`, replace App Store ID |
