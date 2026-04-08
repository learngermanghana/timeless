# Timeless Perfume Website

A premium, mobile-first Next.js website for **Timeless Perfume**, a luxury fragrance brand in Ghana. The site is designed for elegant product showcasing, WhatsApp ordering, and easy customer contact.

## Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Optimized for Vercel deployment

## Required Setup

1. Install Node.js 20+.
2. Copy environment variables:

```bash
cp .env.example .env.local
```

3. Install dependencies:

```bash
npm install
```

## Run Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build for Production

```bash
npm run build
npm run start
```

## Deploy to Vercel

1. Push this project to GitHub.
2. Import the repository in Vercel.
3. Add environment variable:
   - `NEXT_PUBLIC_SITE_URL` (your live domain, e.g. `https://your-domain.vercel.app`)
4. Deploy.

## Where to Change Product and Content Data

All local sample content lives in:

- `lib/data.ts`

Update these arrays there:

- `featuredCollections`
- `bestsellers`
- `benefits`
- `galleryItems`

## Where to Update Phone, WhatsApp, and Map Link

Update these constants in:

- `lib/constants.ts`

Fields:

- `PHONE_DISPLAY`
- `PHONE_E164`
- `WHATSAPP_URL`
- `MAPS_URL`

## Notes

- Remote images are configured in `next.config.ts` (`images.unsplash.com`).
- SEO metadata is configured in `app/layout.tsx`.
