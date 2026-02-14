import Link from "next/link";

export default function Footer() {
  const navMain = [
    { href: "/", label: "Home" },
    { href: "/technology", label: "Technology" },
    { href: "/principles", label: "Approach" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" }
  ];

  const navLegal = [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" }
  ];

  return (
    <footer className="border-t border-white/10">
      {/* FULL-WIDTH WRAPPER */}
      <div className="w-full px-4 sm:px-6 lg:px-12 py-8 md:py-10">
        {/* CENTERED CONTENT */}
        <div className="mx-auto max-w-7xl">

          {/* Main footer content */}
          <div className="flex flex-col gap-6 md:grid md:grid-cols-3 md:gap-10">

            {/* Brand */}
          <div className="space-y-3">
  <div className="flex items-center gap-2">
    <img
      src="/logo.png"
      alt="ForgeStack Labs"
      className="h-9 w-auto"
    />
    <h3 className="text-base md:text-lg uppercase tracking-[0.25em] text-white/90">
      FORGESTACKLABS
    </h3>
  </div>

  <p className="text-xs md:text-sm leading-relaxed text-white/50 max-w-xs">
    We build internal products that solve real industry challenges.
  </p>
</div>


            {/* Navigation */}
            <div className="space-y-3">
              <h4 className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-white/60">
                Navigation
              </h4>
              <nav className="grid grid-cols-2 gap-x-6 gap-y-2">
                {navMain.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-xs md:text-sm text-white/50 hover:text-white/80 transition"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Contact */}
            <div className="space-y-3">
              <h4 className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-white/60">
                Get in Touch
              </h4>
              <a
                href="mailto:forgestacklabs@forgestacklabs.com"
                className="block text-xs md:text-sm text-white/50 hover:text-white/80 break-all"
              >
                forgestacklabs@forgestacklabs.com
              </a>
              <p className="text-xs md:text-sm text-white/50">
                India · Global
              </p>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-6 pt-4 border-t border-white/10 flex flex-col gap-2">
            <div className="flex gap-4">
              {navLegal.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-[10px] md:text-xs text-white/40 hover:text-white/70 transition"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <p className="text-[10px] md:text-xs text-white/40">
              © 2026 Forgestack Labs LLP. All rights reserved.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}
