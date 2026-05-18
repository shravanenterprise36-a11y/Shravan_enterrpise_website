import { useEffect, useRef } from "react";
import { servicesData } from "../../data/servicesData";

function openServicePage(slug) {
  window.history.pushState({}, "", `/services/${slug}`);
  window.dispatchEvent(new PopStateEvent("popstate"));
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export default function Services() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll(".svc-card").forEach((el, i) => {
            setTimeout(() => {
              el.style.opacity = "1";
              el.style.transform = "translateY(0)";
            }, i * 90);
          });
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="py-28 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="section-label">What We Offer</div>
            <div className="section-line mt-3" />
            <h2
              className="font-display mt-2 leading-none"
              style={{ fontSize: "clamp(2.4rem, 5vw, 3.8rem)", color: "var(--navy)" }}
            >
              COMPREHENSIVE
              <br />
              <span className="text-gold-gradient">INFRASTRUCTURE</span> SOLUTIONS
            </h2>
          </div>
          <p className="text-sm md:text-base max-w-sm md:text-right" style={{ color: "var(--steel)" }}>
            Explore the full service portfolio below. Each card opens a dedicated detail page with subservices and scope.
          </p>
        </div>

        <div className="grid items-stretch sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {servicesData.map((service) => (
            <article
              key={service.id}
              className="svc-card h-full rounded-[28px] overflow-hidden card-lift flex flex-col"
              role="button"
              tabIndex={0}
              onClick={() => openServicePage(service.slug)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") openServicePage(service.slug);
              }}
              style={{
                opacity: 0,
                transform: "translateY(30px)",
                transition: "all 0.5s ease",
                border: "1px solid var(--line)",
                background: "rgba(255,255,255,0.96)",
                boxShadow: "0 16px 32px rgba(34,49,59,0.08)",
                cursor: "pointer",
              }}
            >
              <div className="relative img-zoom" style={{ height: "190px" }}>
                <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(34,49,59,0.74) 0%, rgba(34,49,59,0.16) 48%, transparent 100%)" }}
                />
                <div
                  className="absolute top-5 left-5 inline-flex items-center text-xs font-semibold px-3 py-1.5 rounded-full"
                  style={{
                    background: "rgba(255,253,250,0.92)",
                    color: "var(--navy)",
                    border: "1px solid rgba(185,130,73,0.22)",
                  }}
                >
                  {service.tag}
                </div>
              </div>

              <div
                className="flex-1 flex flex-col p-6"
                style={{
                  background: `linear-gradient(180deg, ${service.accent} 0%, rgba(255,255,255,0) 120%)`,
                }}
              >
                <h3 className="text-xl font-bold min-h-[56px]" style={{ color: "var(--navy)" }}>
                  {service.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed flex-1" style={{ color: "var(--steel)" }}>
                  {service.desc}
                </p>

                <div className="mt-6 flex items-center justify-between gap-3">
                  <span className="text-sm font-semibold" style={{ color: "var(--navy-light)" }}>
                    {service.items.length} subservices
                  </span>
                  <button
                    type="button"
                    onClick={() => openServicePage(service.slug)}
                    className="inline-flex items-center gap-2 text-sm font-semibold"
                    style={{ color: "var(--navy)" }}
                  >
                    View service
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
