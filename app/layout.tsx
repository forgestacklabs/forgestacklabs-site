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
    default: "ForgeStack Labs | When Vision Meets Precision - Premium Software Development",
    template: "%s | ForgeStack Labs",
  },
  description:
    "ForgeStack Labs connects verified developers and designers with companies that need skilled talent. Find real opportunities, grow your career. Premium software systems and digital products built with precision and long-term intent.",
  metadataBase: new URL("https://forgestacklabs.com"),
  
  // Enhanced keywords with alternate names
  keywords: [
    "ForgeStack Labs",
    "Forge Stack Labs",
    "ForgeStack",
    "Forge Stack",
    "forgestacklabs.com",
    "software development",
    "custom software",
    "technology studio",
    "software systems",
    "precision engineering",
    "web development",
    "mobile app development",
    "digital products",
    "software consulting",
    "tech talent",
    "developer opportunities",
    "designer opportunities",
  ],
  
  // Author and publisher info
  authors: [{ name: "ForgeStack Labs" }],
  creator: "ForgeStack Labs",
  publisher: "ForgeStack Labs",
  
  // Additional metadata
  applicationName: "ForgeStack Labs",
  referrer: "origin-when-cross-origin",
  
  // Enhanced Open Graph
  openGraph: {
    title: "ForgeStack Labs | When Vision Meets Precision",
    description: "ForgeStack Labs connects verified developers and designers with companies that need skilled talent. Find real opportunities, grow your career.",
    url: "https://forgestacklabs.com",
    siteName: "ForgeStack Labs",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ForgeStack Labs - When Vision Meets Precision",
      },
    ],
  },
  
  // Enhanced Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "ForgeStack Labs | When Vision Meets Precision",
    description: "ForgeStack Labs connects verified developers and designers with companies that need skilled talent.",
    images: ["/og-image.png"],
    creator: "@forgestacklabs", // Add your Twitter handle if you have one
  },
  
  // Robots directives
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // Verification (add these when you have them)
  // verification: {
  //   google: "your-google-verification-code",
  //   yandex: "your-yandex-verification-code",
  // },
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  
  // Enhanced Schema markup for better SEO
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ForgeStack Labs",
    "alternateName": [
      "Forge Stack Labs", 
      "ForgeStack", 
      "Forge Stack",
      "forgestacklabs.com",
      "forgestacklabs"
    ],
    "url": "https://forgestacklabs.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://forgestacklabs.com/logo.png",
      "width": "512",
      "height": "512"
    },
    "description": "ForgeStack Labs connects verified developers and designers with companies that need skilled talent. Find real opportunities, grow your career. We build software systems and digital products with precision and long-term intent.",
    "foundingDate": "2024",
    "slogan": "When Vision Meets Precision",
    "knowsAbout": [
      "Software Development",
      "Web Development",
      "Mobile App Development",
      "Digital Product Design",
      "Software Engineering",
      "Technology Consulting"
    ],
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "0",
        "longitude": "0"
      },
      "geoRadius": "20000000"
    },
    "sameAs": [
      // Add your social media profiles here when available
      // "https://twitter.com/forgestacklabs",
      // "https://linkedin.com/company/forgestacklabs",
      // "https://github.com/forgestacklabs"
    ]
  };

  // WebSite schema for search box and site navigation
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "ForgeStack Labs",
    "alternateName": "Forge Stack Labs",
    "url": "https://forgestacklabs.com",
    "description": "ForgeStack Labs connects verified developers and designers with companies that need skilled talent.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://forgestacklabs.com/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  // BreadcrumbList schema for better navigation understanding
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://forgestacklabs.com"
      }
    ]
  };

  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Canonical URL */}
        <link rel="canonical" href="https://forgestacklabs.com" />
        
        {/* Alternate URLs for brand variations - helps search engines understand */}
        <link rel="alternate" href="https://forgestacklabs.com" hrefLang="en" />
        
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS Prefetch for external resources */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        
        {/* Load Playwrite NZ Basic font */}
        <link 
          href="https://fonts.googleapis.com/css2?family=Playwrite+NZ+Basic:wght@100..400&display=swap" 
          rel="stylesheet" 
        />

        {/* Favicon - make sure you have these files */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Enhanced Schema.org markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema)
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema)
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema)
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