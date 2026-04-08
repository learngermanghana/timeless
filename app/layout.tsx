import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { BRAND_NAME, SITE_URL } from "@/lib/constants";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const cormorant = Cormorant_Garamond({ subsets: ["latin"], variable: "--font-serif", weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: `${BRAND_NAME} | Luxury Perfume Shop in Ghana`,
  description:
    "Timeless Perfume is a premium perfume shop in Accra, Ghana for luxury fragrances, perfume oils, gift-worthy scents and elegant signature collections.",
  keywords: [
    "Timeless Perfume Ghana",
    "perfume shop in Accra",
    "luxury perfumes in Ghana",
    "perfume oils Ghana",
    "men’s perfume Ghana",
    "women’s perfume Ghana",
    "unisex fragrances Ghana",
    "original perfume in Accra"
  ],
  openGraph: {
    title: `${BRAND_NAME} | Luxury Perfumes in Ghana`,
    description:
      "Discover premium fragrances for men and women, gift sets, perfume oils and signature scents from Timeless Perfume.",
    url: SITE_URL,
    siteName: BRAND_NAME,
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: `${BRAND_NAME} | Luxury Perfumes in Ghana`,
    description:
      "Shop elegant fragrances in Accra with easy WhatsApp ordering, premium collections and gift-ready scents."
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${cormorant.variable} bg-brand-light font-sans text-brand-secondary antialiased`}>
        {children}
      </body>
    </html>
  );
}
