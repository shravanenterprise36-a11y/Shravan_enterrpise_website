import { useEffect, useState } from "react";
import logo from "../../assets/Logo/Professional Logo Design for Shravan Enterprises.svg";
const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#core", label: "Core Competency" },
  { href: "#why", label: "Why Us" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const isServicePage = window.location.pathname.startsWith("/services/");
  const getNavHref = (href) => (isServicePage ? `/${href}` : href);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-all duration-400"
      style={{
        background: scrolled ? "rgba(255, 253, 250, 0.97)" : "rgba(255, 250, 243, 0.88)",
        backdropFilter: "blur(16px)",
        borderBottom: scrolled ? "1px solid var(--line)" : "1px solid transparent",
        boxShadow: scrolled ? "0 12px 40px rgba(34, 49, 59, 0.08)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12 h-20">
        <a href={isServicePage ? "/" : "#hero"} className="flex items-center gap-3 group">
          <img src={logo} alt="Shravan Enterprises" className="h-28 md:h-34 w-auto object-contain" />
        </a>

        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={getNavHref(link.href)}
              className="text-sm font-medium transition-colors duration-200"
              style={{ color: "var(--navy)", letterSpacing: "0.03em" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--navy-light)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--navy)")}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="tel:+919511777770" className="text-sm font-medium" style={{ color: "var(--muted)" }}>
            Call for a Quote
          </a>
          <a
            href={"https://wa.me/919511777770"}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm py-2.5 px-5"
          >
            Chat on WhatsApp
          </a>
        </div>

        <button
          className="md:hidden p-2"
          style={{ color: "var(--navy)" }}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <div
          className="md:hidden px-6 pb-6"
          style={{ background: "rgba(255, 253, 250, 0.98)", borderTop: "1px solid var(--line)" }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={getNavHref(link.href)}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm font-medium border-b"
              style={{ color: "var(--navy)", borderColor: "var(--line)" }}
            >
              {link.label}
            </a>
          ))}
          <a
            href={"https://wa.me/919511777770"}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-4 w-full justify-center text-sm py-3"
          >
            Chat on WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}
