# Prep N Prime GH Website

Production-ready Next.js App Router website for **Prep N Prime GH**, a Ghana beauty and skincare shop.

## Stack
- Next.js (App Router) + TypeScript
- React + React DOM
- Tailwind CSS v4
- ESLint
- Vercel Analytics + Speed Insights

## Routes
- /
- /shop
- /body-care
- /skin-care
- /collections
- /consultation
- /sensitive-skin
- /glow-products
- /about
- /contact
- /faq
- /privacy-policy
- /terms

## Sedifex Integration
Server-side integration is implemented in `lib/sedifex.ts`.

Endpoints used:
- `GET /integrationProducts?storeId=<storeId>`
- `GET /integrationPromo?storeId=<storeId>` (optional)
- `GET /integrationGallery?storeId=<storeId>` (optional)

Features:
- Bearer auth header with integration key
- `next: { revalidate: 60 }`
- Product deduplication by `id|storeId|name|price`
- Fallback sample data when API is unavailable
- Gallery publishing and sort handling

## Environment Variables
Copy `.env.example` to `.env.local`:

```bash
SEDIFEX_API_BASE_URL=
SEDIFEX_STORE_ID=
SEDIFEX_INTEGRATION_KEY=
```

## Local Development
Node: **>=20.9.0**

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Build & Start
```bash
npm run lint
npm run build
npm run start
```

## Deploy to Vercel
1. Push this repository to GitHub.
2. Import into Vercel.
3. Add environment variables in Vercel project settings.
4. Deploy.

## Content and Contact Replacements
Update these locations for production details:
- Contact email and address in `app/contact/page.tsx`
- Footer contact details in `components/site-footer.tsx`
- Metadata base URL in `lib/metadata.ts`
