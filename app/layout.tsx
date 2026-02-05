import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import BackgroundField from "@/components/BackgroundField";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import ReloadRedirect from "@/components/ReloadRedirect";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: {
    default: "ForgeStack Labs | When Vision Meets Precision",
    template: "%s | ForgeStack Labs",
  },
  description:
    "ForgeStack Labs builds software systems and digital products with precision and long-term intent.",
  metadataBase: new URL("https://forgestacklabs.com"),
  openGraph: {
    title: "ForgeStack Labs | When Vision Meets Precision",
    description: "Premium software systems built with precision.",
    url: "https://forgestacklabs.com",
    siteName: "ForgeStack Labs",
    images: [
      {
        url: "/og-image.png",   
        width: 1200,
        height: 630,
        alt: "ForgeStack Labs",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ForgeStack Labs | When Vision Meets Precision",
    description: "Premium software systems built with precision.",
    images: ["/og-image.png"],
  },
  keywords: [
    "ForgeStack Labs",
    "Forge Stack Labs",
    "ForgeStack",
    "software development",
    "custom software",
    "technology studio",
    "software systems",
    "precision engineering"
  ],
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  
  // Schema markup for SEO - helps search engines understand brand name variations
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ForgeStack Labs",
    "alternateName": ["Forge Stack Labs", "ForgeStack", "Forge Stack"],
    "url": "https://forgestacklabs.com",
    "logo": "https://forgestacklabs.com/logo.png",
    "description": "ForgeStack Labs builds software systems and digital products with precision and long-term intent.",
    "foundingDate": "2024",
    "sameAs": []
  };

  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Canonical URL - tells search engines the primary URL */}
        <link rel="canonical" href="https://forgestacklabs.com" />
        
        {/* Preconnect to Google Fonts for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Load Playwrite NZ Basic font for homepage intro animation */}
        <link 
          href="https://fonts.googleapis.com/css2?family=Playwrite+NZ+Basic:wght@100..400&display=swap" 
          rel="stylesheet" 
        />

        {/* Schema.org markup for better SEO and brand recognition */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaMarkup)
          }}
        />
      </head>
      <body className="bg-ink text-white">
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