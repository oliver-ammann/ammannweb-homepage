# ammannweb

Marketing website for [ammannweb](https://ammannweb.ch) — fixed-price web design for Vereine and small businesses, from Frauenfeld, Thurgau.

Built with React 18, Vite 6, TypeScript, and Tailwind CSS 4. Originally designed in [Figma](https://www.figma.com/design/abT0aoTEv5CQhSYVVAEsYU/One-Page-Website-Design).

## Features

- One-page landing: Hero → Pricing → Process → Benefits → Services → Contact
- Working contact form via [FormSubmit](https://formsubmit.co)
- Legal pages: Impressum, Datenschutz, AGB
- Self-hosted fonts (DM Sans via `@fontsource`)
- Responsive layout, SPA routing (Vercel / Netlify)

## Getting started

```bash
npm install
cp .env.example .env   # Windows: copy .env.example .env
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Environment variables

| Variable | Description | Default |
|----------|-------------|---------|
| `VITE_CONTACT_EMAIL` | Form submission recipient | `contact@ammannweb.ch` |
| `VITE_SITE_URL` | Canonical URL for meta tags | `https://ammannweb.ch` |

### Contact form setup

1. Copy `.env.example` to `.env` and set `VITE_CONTACT_EMAIL`.
2. On first production deploy, FormSubmit sends a confirmation email to that address — click the link to activate.
3. Test the form on the live site.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Typecheck + production build |
| `npm run preview` | Preview production build |
| `npm run typecheck` | Run TypeScript only |

## Deploy

Build output is in `dist/`. Works on any static host:

- **Vercel** (recommended): Connect the repo; build command `npm run build`, output `dist`. Set env vars in the dashboard.
- **Netlify**: Same build settings; `public/_redirects` included for SPA fallback.

Link preview image: `public/og.png` (referenced from `index.html` Open Graph tags).

## Project structure

```
src/
  app/
    components/   # Layout, sections, contact
    pages/        # Home, Impressum, Datenschutz, AGB
    constants.ts
    legal-config.ts
    profile-config.ts
  styles/         # Tailwind, theme, fonts
public/
  favicon.svg
  og.png          # Social sharing (1200×630)
```

## Configuration

| File | Purpose |
|------|---------|
| `src/app/constants.ts` | Brand color, CTA labels, `SITE` (email, URL, location) |
| `src/app/legal-config.ts` | Impressum / AGB / Datenschutz entity details |
| `src/app/profile-config.ts` | Bio, role, photo path |

## Pre-go-live checklist

- Fill street address (and UID / MWST if applicable) in `legal-config.ts`
- Add `public/profile.jpg`, set `photoSrc` in `profile-config.ts`
- Deploy to Vercel, set env vars, confirm domain + FormSubmit activation

## License

Private — © ammannweb.
