import { useEffect, useRef } from "react";
import { FiBox, FiLock, FiClipboard, FiClock, FiUsers } from "react-icons/fi";

const competencies = [
  { icon: <FiBox size={20} />, title: "Customized Solutions", desc: "Analysing and providing customize solutions to suit your specific requirements.", },
  { icon: <FiLock size={20} />, title: "Confidentiality & Security", desc: "We ensure the confidentiality and security of Business Information.", },
  { icon: <FiClipboard size={20} />, title: "SLA & Compliance", desc: "We adhere to all SLA’s, Security & HSE policies of the respective company and ensure timely delivery.", },
  { icon: <FiClock size={20} />, title: "24/7 Supervision & Quality", desc: "With Professional & Personal Supervision on job, we ensure 24 x 7 quality service.", },
];

const industries = [
  "Manufacturing",
  "IT & Corporate Offices",
  "Pharmaceuticals",
  "Logistics & Warehousing",
  "Real Estate",
  "Banking & Financial Services",
  "Healthcare & Hospitals",
  "Educational Institutions",
  "Commercial Buildings",
  "Retail & Shopping Malls",
  "Hotels & Hospitality",
  "Residential Complexes",
  "Industrial Facilities",
  "Government Organizations",
  "Institutional Buildings",
  "Co-working Spaces",
  "Restaurants & Cafes",
  "Construction Companies",
  "Warehouses",
  "Factories & Plants",
];

export default function CoreCompetency() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll(".core-card").forEach((el, i) => {
            setTimeout(() => {
              el.style.opacity = "1";
              el.style.transform = "translateY(0)";
            }, i * 120);
          });
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="core" className="py-28 px-6 md:px-12" style={{ background: "#f7f2e9" }}>
      <div className="max-w-7xl mx-auto" ref={ref}>
        <div className="text-center mb-16">
          <div className="section-label">What Defines Us</div>
          <div className="section-line mx-auto mt-3" />
          <h2 className="font-display mt-4 leading-none" style={{ fontSize: "clamp(2.4rem, 5vw, 3.8rem)", color: "var(--navy)" }}>
            CORE <span className="text-gold-gradient">COMPETENCY</span>
          </h2>
          <p className="mt-4 max-w-lg mx-auto text-sm" style={{ color: "var(--steel)" }}>
            The pillars that define our professional standard and set us apart in corporate infrastructure.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {competencies.map((item) => (
            <div
              key={item.title}
              className="core-card group p-8 rounded-[26px] card-lift cursor-default"
              style={{
                opacity: 0,
                transform: "translateY(28px)",
                transition: "all 0.55s ease",
                background: "rgba(255,255,255,0.92)",
                border: "1px solid var(--line)",
                boxShadow: "0 14px 28px rgba(34,49,59,0.08)",
              }}
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110"
                style={{ background: "rgba(185,130,73,0.12)", color: "var(--navy-light)" }}
              >
                {item.icon}
              </div>
              <h4 className="text-lg font-bold" style={{ color: "var(--navy)" }}>{item.title}</h4>
              <div className="mt-2 h-1 rounded-full transition-all duration-300" style={{ background: "linear-gradient(90deg, #ddb77c, #9e6830)", width: "48px" }} />
              <p className="text-sm leading-relaxed mt-4" style={{ color: "var(--steel)" }}>{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 overflow-hidden">
          <div className="text-center text-xs tracking-widest mb-6" style={{ color: "#9ca3af" }}>
            TRUSTED BY CORPORATE LEADERS ACROSS INDUSTRIES
          </div>
          <div className="overflow-hidden">
            <div className="marquee-track gap-12 items-center" style={{ display: "flex", alignItems: "center" }}>
              {[...industries, ...industries].map((industry, index) => (
                <div key={`${industry}-${index}`} className="flex items-center gap-12 flex-shrink-0">
                  <span
                    className="text-sm font-semibold whitespace-nowrap px-6 py-2 rounded-full"
                    style={{ color: "var(--navy)", background: "rgba(255,255,255,0.82)", border: "1px solid var(--line)" }}
                  >
                    {industry}
                  </span>
                  <span style={{ color: "var(--navy-light)", fontSize: "8px" }}>+</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
