import { useEffect, useRef } from "react";
import herosection from "../../assets/Herosection/Herosection.jpg";

const stats = [
  { num: "15+", label: "Years Experience" },
  { num: "500+", label: "Projects Completed" },
  { num: "200+", label: "Corporate Clients" },
  { num: "99%", label: "Client Satisfaction" },
];

const trust = ["MSME Registered", "GSTIN Verified", "24/7 Support"];

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    setTimeout(() => {
      el.style.transition = "opacity 0.9s ease, transform 0.9s ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, 100);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col  overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #fffaf3 0%, #f8efe4 52%, #f4ebdf 100%)",
      }}
    >
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: `
            linear-gradient(rgba(108, 78, 43, 0.12) 1px, transparent 1px),
            linear-gradient(90deg, rgba(108, 78, 43, 0.12) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      <div
        className="absolute top-0 right-0 w-1/2 h-full opacity-20"
        style={{
          background: "linear-gradient(135deg, transparent 40%, rgba(185, 130, 73, 0.12) 100%)",
          clipPath: "polygon(30% 0, 100% 0, 100% 100%, 0% 100%)",
        }}
      />

      <div
        className="absolute"
        style={{
          top: "14%",
          right: "10%",
          width: "520px",
          height: "520px",
          background: "radial-gradient(circle, rgba(185, 130, 73, 0.18) 0%, transparent 72%)",
          borderRadius: "50%",
          filter: "blur(44px)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-10 w-full">
        <div ref={heroRef} className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="section-label mb-4">Infrastructure & Facility Management</div>

            <h1
              className="font-display leading-none"
              style={{ fontSize: "clamp(3.5rem, 8vw, 6.5rem)", letterSpacing: "0.02em", color: "var(--navy)" }}
            >
              BUILDING
              <br />
              <span className="text-navy-gradient">TOMORROW'S</span>
              <br />
              INDIA
            </h1>

            <p className="mt-6 text-lg leading-relaxed" style={{ color: "var(--steel)", maxWidth: "540px" }}>
              Premium corporate infrastructure solutions across civil, electrical, plumbing, and facility management,
              delivered with precision, reliability, and 15+ years of expertise.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#contact" className="btn-primary">
                Get Free Consultation
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </a>
              <a href="#services" className="btn-outline">
                Our Services
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {trust.map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-full"
                  style={{
                    background: "rgba(255,255,255,0.78)",
                    border: "1px solid var(--line)",
                    color: "var(--navy)",
                    letterSpacing: "0.05em",
                    boxShadow: "0 10px 24px rgba(34, 49, 59, 0.07)",
                  }}
                >
                  <span style={{ color: "var(--navy-light)" }}>{String(index + 1).padStart(2, "0")}</span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="hidden md:block relative md:-translate-y-8">
            <div
              className="absolute -inset-x-2 top-6 bottom-20 rounded-[38px] -z-10"
              style={{
                background: "linear-gradient(180deg, rgba(255,255,255,0.55), rgba(239,226,208,0.72))",
                border: "1px solid rgba(63, 45, 24, 0.08)",
              }}
            />

            <div
              className="relative ml-auto w-full max-w-[500px] rounded-[34px] overflow-hidden"
              style={{
                height: "490px",
                border: "1px solid rgba(63, 45, 24, 0.16)",
                boxShadow: "0 28px 60px rgba(34, 49, 59, 0.14)",
              }}
            >
              <img
                src={herosection}
                alt="Professional corporate workspace and infrastructure environment"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(180deg, rgba(34,49,59,0.1) 0%, rgba(34,49,59,0.76) 100%)",
                }}
              />

              <div className="absolute top-6 left-6 right-6 flex items-start justify-between gap-4">
                <div
                  className="px-4 py-2.5 rounded-full"
                  style={{
                    background: "rgba(255,255,255,0.84)",
                    color: "var(--navy)",
                    border: "1px solid rgba(255,255,255,0.55)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <span className="text-[11px] font-semibold tracking-[0.18em]" style={{ color: "var(--navy-light)" }}>
                    CORPORATE INFRASTRUCTURE
                  </span>
                </div>

                <div
                  className="px-4 py-3 rounded-[22px] text-right"
                  style={{
                    background: "rgba(34,49,59,0.68)",
                    color: "white",
                    backdropFilter: "blur(12px)",
                  }}
                >
                  <div className="text-[10px] font-semibold tracking-[0.22em]" style={{ color: "#ead4b2" }}>
                    BASED IN
                  </div>
                  <div className="mt-1 text-sm font-semibold">Pune, Maharashtra</div>
                </div>
              </div>

              <div
                className="absolute left-6 right-6 bottom-6 rounded-[28px] p-5"
                style={{
                  background: "rgba(255,255,255,0.18)",
                  border: "1px solid rgba(255,255,255,0.24)",
                  backdropFilter: "blur(14px)",
                }}
              >
                <div className="max-w-[285px]">
                    <div className="text-[10px] font-semibold tracking-[0.24em]" style={{ color: "#f0dbc0" }}>
                      SHRAVAN ENTERPRISES
                    </div>
                    <div
                      className="mt-2 font-serif-disp text-white"
                      style={{ fontSize: "1.42rem", lineHeight: 1.18 }}
                    >
                      Complete facility solutions under one roof.
                    </div>
                </div>
              </div>
            </div>

            {/* <div
              className="absolute left-10 right-6 -bottom-14 rounded-[28px] p-5"
              style={{
                background: "rgba(255,255,255,0.96)",
                border: "1px solid rgba(63, 45, 24, 0.16)",
                boxShadow: "0 20px 44px rgba(34, 49, 59, 0.14)",
                backdropFilter: "blur(14px)",
              }}
            >
              <div className="flex items-center justify-between gap-4 mb-4">
                <div>
                  <div className="text-[10px] font-semibold tracking-[0.22em]" style={{ color: "var(--navy-light)" }}>
                    PERFORMANCE SNAPSHOT
                  </div>
                  <div className="mt-1 text-sm font-semibold" style={{ color: "var(--navy)" }}>
                    Proven delivery for modern corporate spaces
                  </div>
                </div>
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(185,130,73,0.12)", color: "var(--navy-light)" }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17 17 7" />
                    <path d="M8 7h9v9" />
                  </svg>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {stats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className="p-4 rounded-[20px]"
                    style={{
                      background: index % 2 === 0 ? "#fff8ef" : "#f5ede2",
                      border: "1px solid rgba(63, 45, 24, 0.12)",
                    }}
                  >
                    <div className="stat-num" style={{ fontSize: "2.6rem", lineHeight: 1, color: "var(--navy)" }}>
                      {stat.num}
                    </div>
                    <div className="mt-2 text-xs font-medium" style={{ color: "#5b6772" }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div> */}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <div className="text-xs tracking-widest" style={{ color: "var(--muted)" }}>
            SCROLL
          </div>
          <div className="w-px h-12 mx-auto" style={{ background: "linear-gradient(to bottom, #c38d52, transparent)" }} />
        </div>
      </div>
    </section>
  );
}
