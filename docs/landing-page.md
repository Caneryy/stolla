# Stolla Landing Page

Reference implementation: [Licitor landing](https://licitor-psi.vercel.app/) (same repo author's prior project).

## Purpose

The `/` route is a **marketing landing page**, not the app dashboard. It explains the product and drives users to `/community` or `/proposals`.

## Design system

Neo-brutalist style — same family as Licitor, with Stolla's indigo accent:

| Token | Value | Usage |
|-------|-------|-------|
| `--paper` | `#f5f0e8` | Page background |
| `--ink` | `#1a1a1a` | Text, borders |
| `--accent` | `#4338ca` | CTAs, eyebrows (indigo, not Licitor orange) |
| `--surface` | `#ffffff` | Cards |
| `--shadow` | `4px 4px 0 var(--ink)` | Hard offset shadow |

Typography: **Syne** (display/headings), **IBM Plex Sans** (body).

Utility classes: `.neo-card`, `.neo-button`, `.neo-button-ghost`, `.landing-section`, `.landing-eyebrow`, etc. — see `apps/web/src/app/landing.css`.

## Required sections (in order)

1. **Hero** — headline, subcopy, primary CTA (`/community`), secondary CTA (`/proposals`), stats row, hero image + live governance preview panel
2. **Features** — 6 feature cards (`#features`)
3. **Showcase** — 3 example proposal cards (`#showcase`)
4. **How it works** — 4 steps with images (`#how-it-works`)
5. **Technology** — Stellar stack cards (`#technology`)
6. **FAQ** — accordion (`#faq`)
7. **CTA** — final call to action
8. **Footer** — product links, resources, testnet notice

## Header (landing only)

- Sticky header with section anchor nav: Features, Showcase, How it works, Technology, FAQ
- **Enter app** button → `/community`
- Do **not** show app nav (Community / Proposals tabs) on the landing page

## App pages (`/community`, `/proposals`)

Use the standard `Header` + `Footer` with wallet connect. No landing section nav.

## Images

Place assets in `apps/web/public/images/`. Register paths in `apps/web/src/lib/landingImages.ts`.

**Important:** Landing images are supporting editorial assets — not app screenshots or full-page mockups. The page layout and UI are built in React; images illustrate concepts and proposal subjects.

| Asset | Role | Example |
|-------|------|---------|
| `hero-governance.jpg` | Atmospheric scene beside hero copy | Community gathered under stars |
| `step-*.jpg` | Step card header (16:10) | Deploy rocket, mint badge, delegate, vote |
| `showcase-*.jpg` | Proposal *subject* (4:3) | Treasury coins, brand swatches, NFT badge |
| `thumb-*.jpg` | Square preview row icon (56px) | Cropped from showcase subjects |

Do **not** use dashboard screenshots or landing-page layouts as images — that duplicates the page itself (see Licitor: hero scene + product photos, not UI mockups).

## Agent instructions

When building or updating the landing page:

1. Follow the section order above — do not invent a generic SaaS dark-hero layout
2. Reuse `.neo-*` and `.landing-*` classes; do not mix indigo Tailwind gradients with neo-brutalist cards
3. Keep copy aligned with `docs/prd.md` (NFT membership + Governor voting on testnet)
4. Match Licitor's information density and interactive preview panels, adapted for governance content
