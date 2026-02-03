import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/technology", label: "Technology" },
  { href: "/principles", label: "Approach" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

export default function Navigation() {
  return (
    <header className="relative z-20">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
        <Link href="/" className="text-sm uppercase tracking-[0.4em] text-white/80">
          FORGESTACK LABS
        </Link>
        <nav className="hidden gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs uppercase tracking-[0.3em] text-white/60 transition hover:text-white"
            >
              {link.label}
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
