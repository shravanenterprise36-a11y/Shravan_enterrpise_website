import { FaWhatsapp } from "react-icons/fa";

export default function CTA() {
  return (
    <section className="py-20 px-6 md:px-12 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #f6efe5 0%, #fffdfa 100%)" }}>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(108,78,43,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(108,78,43,0.08) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-96 h-96 opacity-10"
        style={{
          background: "radial-gradient(circle, rgba(185,130,73,0.55) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <div className="text-xs font-semibold tracking-widest mb-2" style={{ color: "rgba(34,49,59,0.74)" }}>
            OUR SERVICES
          </div>
          <h2 className="font-display leading-none" style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", color: "var(--navy)" }}>
            CIVIL, ELECTRICAL &amp; FACILITY
            <br />
            SOLUTIONS FOR YOUR BUSINESS
          </h2>
          <p className="mt-3 text-sm" style={{ color: "rgba(34,49,59,0.76)" }}>
            Civil & interior works, electrical, plumbing, carpentry, painting and full facility management — tailored
            infrastructure services that scale with your operations.
          </p>
        </div>

        <div className="flex gap-3 flex-wrap flex-shrink-0">
          <a
            href={`https://wa.me/919511777770`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3.5 font-semibold text-sm transition-all duration-200 hover:-translate-y-1 flex items-center"
            style={{ background: "var(--navy)", color: "white", boxShadow: "0 4px 20px rgba(10,22,40,0.18)", borderRadius: "999px" }}
          >
            Chat on WhatsApp
            <FaWhatsapp style={{ marginLeft: 8, color: "white" }} />
          </a>

          <a
            href="tel:+919511777770"
            className="px-7 py-3.5 font-semibold text-sm transition-all"
            style={{ background: "rgba(255,255,255,0.86)", color: "var(--navy)", border: "1.5px solid rgba(63, 45, 24, 0.24)", borderRadius: "999px" }}
          >
            Call Us Now
          </a>
        </div>
      </div>
    </section>
  );
}
