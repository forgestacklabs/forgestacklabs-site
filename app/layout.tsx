import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import BackgroundField from "@/components/BackgroundField";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import ReloadRedirect from "@/components/ReloadRedirect";

/**
 * ✅ GOOD: Using next/font (best practice)
 * 🔴 REQUIRED: display:"swap" for LCP
 * ⚠ variable is fine, but must be applied properly
 */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap", // ✅ REQUIRED for fast text paint
});

export const metadata: Metadata = {
  /**
   * ⚠ VERY LONG TITLE earlier caused snippet instability
   * ✅ Cleaned but still strong
   */
  title: {
    default: "ForgeStack Labs | When Vision Meets Precision",
    template: "%s | ForgeStack Labs",
  },

  /**
   * ✅ GOOD description
   * ⚠ Don’t change frequently (Google rewrites snippets if you do)
   */
  description:
    "We design, engineer, and scale reliable digital products for modern businesses—focused on performance, security, and long-term value.",

  metadataBase: new URL("https://forgestacklabs.com"),

  /**
   * ⚠ SAFE BUT UNNECESSARY:
   * Google ignores most keywords today.
   * Keep brand + a few core terms only.
   */
  keywords: [
    "ForgeStack Labs",
    "ForgeStack",
    "Forge Stack",
    "software development",
    "technology studio",
    "precision engineering",
  ],

  authors: [{ name: "ForgeStack Labs" }],
  creator: "ForgeStack Labs",
  publisher: "ForgeStack Labs",

  applicationName: "ForgeStack Labs",

  /**
   * ✅ GOOD security referrer policy
   */
  referrer: "origin-when-cross-origin",

  /**
   * ✅ GOOD Open Graph
   * ⚠ Images must exist or OG may be ignored
   */
  openGraph: {
    title: "ForgeStack Labs | When Vision Meets Precision",
    description:
      "We design, engineer, and scale reliable digital products for modern businesses—focused on performance, security, and long-term value.",
    url: "https://forgestacklabs.com",
    siteName: "ForgeStack Labs",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ForgeStack Labs – When Vision Meets Precision",
      },
    ],
  },


  twitter: {
    card: "summary_large_image",
    title: "ForgeStack Labs | When Vision Meets Precision",
    description:
      "We design, engineer, and scale reliable digital products for modern businesses—focused on performance, security, and long-term value.",
    images: ["/og-image.png"],
  },


  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  /**
   * ✅ REQUIRED schema (Organization)
   * ⚠ Earlier version had GeoCircle + fake coordinates → BAD
   * This version is clean & trusted
   */
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ForgeStack Labs",
    alternateName: ["ForgeStack", "Forge Stack"],
    url: "https://forgestacklabs.com",
    logo: "https://forgestacklabs.com/logo.png",
    slogan: "When Vision Meets Precision",
    description:
      "ForgeStack Labs builds precision-engineered software systems and digital products with long-term intent.",
  };

  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* ✅ REQUIRED canonical */}
        <link rel="canonical" href="https://forgestacklabs.com" />

        {/* ⚠ SAFE BUT OPTIONAL
            Preconnect is fine, but unnecessary if using next/font only */}
        {/* <link rel="preconnect" href="https://fonts.googleapis.com" /> */}
        {/* <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" /> */}

        {/* ❌ REMOVED ON PURPOSE
            Loading Google Fonts via <link> conflicts with next/font
            Causes LCP delay + CSP issues */}
        {/* 
        <link 
          href="https://fonts.googleapis.com/css2?family=Playwrite+NZ+Basic:wght@100..400&display=swap" 
          rel="stylesheet" 
        /> 
        */}

        {/* ✅ Favicons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* ✅ REQUIRED schema injection */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>

      {/* 🔴 IMPORTANT
          Apply font here, NOT inline on <h1> */}
      <body className="bg-ink text-white font-sans">
        <ReloadRedirect />
        <BackgroundField />

        <div className="relative z-10 min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}