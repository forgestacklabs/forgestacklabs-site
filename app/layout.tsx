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
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-ink text-white">
        <ReloadRedirect/>
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
