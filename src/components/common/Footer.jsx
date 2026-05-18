import logo from "../../assets/Logo/Professional Logo Design for Shravan Enterprises.svg";
import { FaLinkedinIn, FaWhatsapp, FaFacebookF } from "react-icons/fa";

const footerLinks = {
  "Quick Links": [
    { label: "Home", href: "/" },
    { label: "About Us", href: "#about" },
    { label: "Our Services", href: "/services" },
    { label: "Why Choose Us", href: "#why-choose-us" },
    { label: "Contact", href: "#contact" },
  ],
  Services: [
    "Civil & Interior",
    "Electrical Work",
    "Plumbing Solutions",
    "Carpentry & Furniture",
    "General Maintenance",
  ],
  Connect: {
    email: "contact@shravanenterprises.com",
    phone: "+919511777770",
    address: "Sr No 11 Parnakuti Paytha, Yerwada, Pune, Maharashtra 411006",
  },
};

function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export default function Footer() {
  return (
    <footer style={{ background: "linear-gradient(180deg, #e8d6bf 0%, #d9c0a0 100%)", borderTop: "1px solid rgba(63, 45, 24, 0.2)" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4 h-14 md:h-20">
              <img src={logo} alt="Shravan Enterprises" className="max-h-full w-auto object-contain" />
            </div>
            <p className="text-sm leading-relaxed mb-5" style={{ color: "#554d45", maxWidth: "280px" }}>
              Leading provider of corporate infrastructure maintenance and facility management solutions in Pune, Maharashtra.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/company/shravan-enterprises"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg flex items-center justify-center text-xs font-bold transition-all duration-200"
                style={{ background: "rgba(255,255,255,0.6)", color: "#6f604f", border: "1px solid rgba(63, 45, 24, 0.16)" }}
              >
                <FaLinkedinIn />
              </a>
              <a
                href={`https://wa.me/${footerLinks.Connect.phone.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg flex items-center justify-center text-xs font-bold transition-all duration-200"
                style={{ background: "rgba(255,255,255,0.6)", color: "#6f604f", border: "1px solid rgba(63, 45, 24, 0.16)" }}
              >
                <FaWhatsapp />
              </a>
              <a
                href="https://www.facebook.com/shravanenterprises"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg flex items-center justify-center text-xs font-bold transition-all duration-200"
                style={{ background: "rgba(255,255,255,0.6)", color: "#6f604f", border: "1px solid rgba(63, 45, 24, 0.16)" }}
              >
                <FaFacebookF />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-xs font-semibold tracking-widest mb-5" style={{ color: "#87572a", textTransform: "uppercase" }}>
                {heading}
              </h4>
              <ul className="space-y-3">
                {heading === "Connect" ? (
                  <>
                    <li>
                      <a
                        href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(footerLinks.Connect.email)}`}
                        onClick={(e) => {
                          /* prefer opening Gmail compose */
                        }}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm transition-colors duration-200"
                        style={{ color: "#564d45" }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "var(--navy)")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "#564d45")}
                      >
                        {footerLinks.Connect.email}
                      </a>
                    </li>
                    <li>
                      <a
                        href={`tel:${footerLinks.Connect.phone.replace(/\s+/g, "")}`}
                        className="text-sm transition-colors duration-200"
                        style={{ color: "#564d45" }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "var(--navy)")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "#564d45")}
                      >
                        {footerLinks.Connect.phone}
                      </a>
                    </li>
                    <li>
                      <a
                        href={`https://www.google.com/maps/search/${encodeURIComponent(footerLinks.Connect.address)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm transition-colors duration-200"
                        style={{ color: "#564d45" }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "var(--navy)")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "#564d45")}
                      >
                        {footerLinks.Connect.address}
                      </a>
                    </li>
                  </>
                ) : heading === "Services" ? (
                  links.map((link) => (
                    <li key={link}>
                      <a
                        href="#services"
                        onClick={(e) => {
                          e.preventDefault();
                          const el = document.querySelector("#services");
                          if (el) el.scrollIntoView({ behavior: "smooth" });
                          try {
                            window.history.pushState(null, "", "#services");
                          } catch (err) {}
                        }}
                        className="text-sm transition-colors duration-200"
                        style={{ color: "#564d45" }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "var(--navy)")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "#564d45")}
                      >
                        {link}
                      </a>
                    </li>
                  ))
                ) : (
                  links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm transition-colors duration-200"
                        style={{ color: "#564d45" }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "var(--navy)")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "#564d45")}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))
                )}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div style={{ borderTop: "1px solid rgba(63, 45, 24, 0.16)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-3 flex flex-col items-center gap-2">
          <p className="text-xs w-full text-center" style={{ color: "#5a5048" }}>
            Copyright {new Date().getFullYear()} Shravan Enterprises. All rights reserved.
          </p>
          {/* <div className="flex gap-5">
            {["Privacy Policy", "Terms of Service"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs transition-colors duration-200"
                style={{ color: "#5a5048" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--navy-light)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#5a5048")}
              >
                {item}
              </a>
            ))}
          </div> */}
        </div>
      </div>
    </footer>
  );
}
