import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import BackgroundField from "@/components/BackgroundField";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import ReloadRedirect from "@/components/ReloadRedirect";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "FORGESTACK LABS",
  description: "FORGESTACK LABS builds software systems with precision and long-term intent.",
  metadataBase: new URL("https://forgestacklabs.com"),
  openGraph: {
    title: "FORGESTACK LABS",
    description: "When Vision Meets Precision.",
    type: "website"
  }
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
