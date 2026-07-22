import Link from "next/link";

const footerLinks = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-paper">
      <div className="px-5 pt-16 md:px-10 md:pt-20">
        {/* Grid */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 pb-14 md:grid-cols-3 md:gap-12 md:pb-20">
          {/* CTA Column */}
          <div className="col-span-2 border-b border-paper/20 pb-10 md:col-span-1 md:border-b-0 md:pb-0">
            <p className="text-eyebrow text-paper/50">New business</p>
            <Link
              href="/contact"
              className="text-display group mt-4 inline-flex items-baseline gap-3 text-4xl transition-colors duration-300 hover:text-magenta md:mt-3 md:text-2xl"
            >
              Start a project
              <span
                aria-hidden="true"
                className="text-magenta transition-transform duration-300 group-hover:translate-x-2"
              >
                →
              </span>
            </Link>
          </div>

          {/* Location Column */}
          <div>
            <p className="text-eyebrow text-paper/50">Find us</p>
            <address className="mt-3 text-lg not-italic leading-relaxed md:text-xl">
              Mumbai
              <br />
              Delhi
              <br />
              Bangalore
              <br />
              Remote
            </address>
          </div>

          {/* Nav Column */}
          <nav aria-label="Footer">
            <p className="text-eyebrow text-paper/50">Index</p>
            <ul className="mt-3 space-y-1 text-lg md:text-xl">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="link-sweep">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom Bar */}
        <div className="rule-t flex flex-wrap items-center justify-between gap-x-4 gap-y-2 border-paper/20 py-4 text-xs text-paper/50">
          <p>© {year} Vayam Media Pvt. Ltd.</p>
          <p>
            <a
              href="mailto:hello@vayammedia.com"
              className="link-sweep text-paper/70 transition-colors duration-300 hover:text-magenta"
            >
              hello@vayammedia.com
            </a>
          </p>
        </div>
      </div>

      {/* Giant Brand Name */}
      <div className="select-none overflow-hidden pb-2" aria-hidden="true">
        <p className="text-display whitespace-nowrap text-center text-[18.5vw] leading-[0.8] text-paper transition-colors duration-500 hover:text-magenta">
          Vayam Media
        </p>
      </div>
    </footer>
  );
}
