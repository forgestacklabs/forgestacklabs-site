"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/technology", label: "Technology" },
  { href: "/principles", label: "Approach" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

export default function NavigationAlt() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/" && pathname === "/") return true;
    if (href !== "/" && pathname.startsWith(href)) return true;
    return false;
  };

  return (
    <header className="relative z-20">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
        <Link href="/" className="text-sm uppercase tracking-[0.4em] text-white/80 hover:text-white transition-colors">
          FORGESTACK LABS
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-xs uppercase tracking-[0.3em] transition-all duration-300 ${
                isActive(link.href)
                  ? "text-white"
                  : "text-white/60 hover:text-white"
              }`}
            >
              <span className={`${
                isActive(link.href)
                  ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
                  : ""
              }`}>
                {link.label}
              </span>
            </Link>
          ))}
        </nav>
        
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-xs uppercase tracking-[0.3em] text-white/80 hover:text-white transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? "Close" : "Menu"}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-sm border-t border-white/10">
          <nav className="flex flex-col px-6 py-4 gap-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`text-xs uppercase tracking-[0.3em] transition-all duration-300 py-2 ${
                  isActive(link.href)
                    ? "text-white"
                    : "text-white/60 hover:text-white"
                }`}
              >
                <span className={`${
                  isActive(link.href)
                    ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
                    : ""
                }`}>
                  {link.label}
                </span>
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}