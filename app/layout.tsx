import type { Metadata, Viewport } from "next";
import { Jost, Inter } from "next/font/google";
import { SITE, BUSINESS } from "@/lib/constants";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import { LocalBusinessSchema } from "@/components/seo/LocalBusinessSchema";
import "./globals.css";

// Jost — a geometric (Futura-style) sans for display type: thin, wide-tracked
// uppercase headlines in the Salon Haze idiom (see docs/01-design-system.md).
const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${BUSINESS.name} | Master Colourists in Coquitlam Since 1984`,
    template: `%s | ${BUSINESS.name}`,
  },
  description:
    "Master colourists since 1984. Turkish hair artistry tradition, now in Coquitlam. Specialists in balayage, blonde transformations, and precision cuts.",
  openGraph: {
    siteName: BUSINESS.name,
    locale: SITE.locale,
    type: "website",
    images: [{ url: SITE.ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    images: [SITE.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${jost.variable} ${inter.variable}`}>
      <body>
        <SmoothScroll />
        <LocalBusinessSchema />

        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:bg-foreground focus:text-background focus:px-4 focus:py-2 focus:text-xs focus:uppercase"
          style={{ letterSpacing: "0.08em" }}
        >
          Skip to content
        </a>

        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
