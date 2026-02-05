import Link from "next/link";

export default function Footer() {
  const navigation = [
    { href: "/", label: "Home" },
    { href: "/technology", label: "Technology" },
    { href: "/principles", label: "Approach" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" }
  ];

  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto w-full max-w-6xl px-6 py-12">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-light tracking-tight text-white/90">
              FORGESTACK
            </h3>
            <p className="text-sm font-light leading-relaxed text-white/50">
              Building products that matter. We partner with ambitious businesses to create lasting digital impact.
            </p>
          </div>

          {/* Navigation Section */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.3em] text-white/70">
              Navigation
            </h4>
            <nav className="flex flex-col gap-3">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-light text-white/50 transition-colors hover:text-white/80"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.3em] text-white/70">
              Get in Touch
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:forgestacklabs@forgestacklabs.com"
                className="text-sm font-light text-white/50 transition-colors hover:text-white/80"
              >
                forgestacklabs@forgestacklabs.com
              </a>
              <p className="text-sm font-light text-white/50">
                India | Global
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-white/10 pt-8">
          <p className="text-xs text-white/40">
            © 2026 Forgestack Labs LLP. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}