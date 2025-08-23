# EMI Calculators (Next.js + Tailwind)

A minimal Next.js (App Router) project with a working EMI Calculator, FAQ schema, and AdSense placeholders.

## Quick Start

```bash
npm install
npm run dev
# open http://localhost:3000
```

## Notes
- Replace `example.com` in `app/layout.tsx` metadata with your domain.
- Insert real AdSense code where `AdPlaceholder` components are used.
- Tailwind is preconfigured; adjust styles in `app/(site)/styles/globals.css`.
- Lighthouse-friendly: no external JS libs, minimal layout shift (ad slots reserve height).
