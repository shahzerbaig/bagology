# Bagology — Marketing Site

A static Next.js site for Bagology (non-woven / BOPP bag manufacturer, Rajkot,
India), positioned for US and European sourcing/export clients.

## Stack

- Next.js 14 (App Router), static export (`output: 'export'`)
- Tailwind CSS
- Fonts: Space Grotesk (display), Inter (body), IBM Plex Mono (specs/labels)

## Run locally

```bash
npm install
npm run dev
```

Visit http://localhost:3000

## Build

```bash
npm run build
```

This produces a static site in the `out/` folder (`output: 'export'` in
`next.config.js`).

## Deploy to Vercel

1. Push this folder to a GitHub repo.
2. In Vercel: **New Project** → import the repo. Framework preset
   "Next.js" is auto-detected; no extra config needed.
3. Add your domain (e.g. `eco.bagology.in`) under Project → Settings → Domains.

No environment variables or backend are required — the site is fully static.

## Editing content

All copy lives directly in the section components under `components/`:

- `Nav.tsx` — top nav + WhatsApp CTA
- `Hero.tsx` — headline + product-line swatch strip
- `TrustBar.tsx` — stats strip
- `About.tsx` — about copy
- `Products.tsx` — 5 product cards (BOPP Laminated, Metallic BOPP,
  Non-Woven, D-Cut, W-Cut)
- `Export.tsx` — export highlights, services, industries served
- `WhyChooseUs.tsx` — 5 USP cards
- `Contact.tsx` — phone / WhatsApp / email / address / map embed
- `Footer.tsx`

Update the phone number, email, or address by editing the constants near
the top of `Contact.tsx`, `Nav.tsx`, and `Hero.tsx`.
# bagology
