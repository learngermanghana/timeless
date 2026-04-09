# Condolence GH Website

Production-ready Next.js website for **Condolence GH**, a funeral-printing and memorial-print services sub-brand of **247 PRINT HOUSE** in Ghana.

## Project Overview

This website is built to advertise funeral printing services and capture customer enquiries for:

- Funeral brochures
- Funeral posters
- Funeral banners
- Funeral invitation cards
- Obituary/memorial cards
- Appreciation cards
- One-week observance and thanksgiving print materials
- Custom funeral print jobs

The design language is respectful, calm, and premium, using muted tones suited for memorial communication.

## Stack

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS (v4 via `@tailwindcss/postcss`)
- ESLint (`eslint-config-next`)
- `clsx` + `tailwind-merge`
- `lucide-react`
- `@vercel/analytics`
- `@vercel/speed-insights`

## Routes

- `/`
- `/services`
- `/products`
- `/funeral-brochures`
- `/funeral-posters`
- `/funeral-banners`
- `/quote`
- `/about`
- `/contact`
- `/gallery`
- `/faq`
- `/privacy-policy`
- `/terms`
- `/thank-you`
- `/funeral-invitations`
- `/appreciation-cards`

## Node Version

Use **Node.js 20.11+** (or newer LTS) for local development and Vercel builds.

## Environment Variables

Copy and customize environment variables:

```bash
cp .env.example .env.local
```

Current variables:

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_CONTACT_PHONE`
- `NEXT_PUBLIC_WHATSAPP`
- `NEXT_PUBLIC_CONTACT_EMAIL`

## Local Development

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Production Build

```bash
npm run lint
npm run build
npm run start
```

## Deploy to Vercel

1. Push this repository to GitHub/GitLab/Bitbucket.
2. Import the repository in Vercel.
3. Set the environment variables from `.env.example` in Vercel Project Settings.
4. Deploy.

No custom server is required; the project is App Router and Vercel compatible by default.

## Where to Replace Business Content

- Contact details: `lib/constants.ts`
- SEO metadata logic: `lib/metadata.ts`
- Service/product/gallery/FAQ content: `lib/data.ts`
- Branding colors and global styles: `app/globals.css`

## Notes

- Remote image usage is configured in `next.config.ts` for `images.unsplash.com`.
- The quote form is frontend-only and routes users to `/thank-you`; connect API handling when ready.
