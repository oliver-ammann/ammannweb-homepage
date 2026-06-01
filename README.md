# ammannweb

Marketing website for [ammannweb](https://ammannweb.ch) — fast, fixed-price web design from Zürich.

Built with React, Vite, and Tailwind CSS. Originally designed in [Figma](https://www.figma.com/design/abT0aoTEv5CQhSYVVAEsYU/One-Page-Website-Design).

## Features

- One-page landing (Hero, Portfolio, Services, Pricing, Contact)
- Working contact form via [FormSubmit](https://formsubmit.co)
- Legal pages: Impressum & Datenschutz
- Responsive layout
- SPA routing with static-hosting fallbacks (Netlify, Vercel)

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
| `VITE_CONTACT_EMAIL` | Form submission recipient | `hallo@ammannweb.ch` |
| `VITE_SITE_URL` | Canonical URL for meta tags | `https://ammannweb.ch` |

### Contact form setup

1. Copy `.env.example` to `.env` and set `VITE_CONTACT_EMAIL`.
2. On first production deploy, FormSubmit will send a confirmation email to that address — click the link to activate.
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

- **Vercel / Netlify**: Connect the repo; build command `npm run build`, output `dist`.
- **GitHub Pages**: Use the included CI workflow or deploy `dist` manually.

## Project structure

```
src/
  app/
    components/   # Layout, sections, utilities
    pages/        # Home, Impressum, Datenschutz
    constants.ts
  styles/         # Tailwind, theme, fonts
```

## License

Private — © ammannweb.
