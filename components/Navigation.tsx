"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/technology", label: "Technology" },
  { href: "/principles", label: "Approach" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

export default function NavigationAlt() {
  const pathname = usePathname();

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
        <div className="md:hidden text-xs uppercase tracking-[0.3em] text-white/50">
          Menu
        </div>
      </div>
    </header>
  );
}