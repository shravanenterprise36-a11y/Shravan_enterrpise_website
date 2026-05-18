import { servicesData } from "../../data/servicesData";

function goTo(path) {
  window.history.pushState({}, "", path);
  window.dispatchEvent(new PopStateEvent("popstate"));
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export default function ServiceDetailPage({ service }) {
  const relatedServices = servicesData.filter((item) => item.slug !== service.slug).slice(0, 4);

  return (
    <main style={{ background: "linear-gradient(180deg, #fffcf7 0%, #f7f1e8 52%, #fffdfa 100%)" }}>
      <section className="px-6 md:px-12 pt-10 pb-16">
        <div className="max-w-7xl mx-auto">
          <button
            type="button"
            onClick={() => goTo("/")}
            className="inline-flex items-center gap-2 text-sm font-semibold"
            style={{ color: "var(--navy)" }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="m15 18-6-6 6-6" />
            </svg>
            Back to all services
          </button>

          <div className="mt-8 grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
            <div>
              <div className="section-label">{service.tag}</div>
              <div className="section-line mt-3" />
              <h1
                className="font-display mt-2 leading-none"
                style={{ fontSize: "clamp(2.6rem, 6vw, 4.8rem)", color: "var(--navy)" }}
              >
                {service.shortTitle}
                <br />
                <span className="text-gold-gradient">SERVICES</span>
              </h1>
              <p className="mt-6 text-base md:text-lg leading-relaxed max-w-2xl" style={{ color: "var(--steel)" }}>
                {service.overview}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#service-list" className="btn-primary text-sm py-3 px-6">
                  View Subservices
                </a>
                <a href="/#contact" className="btn-navy text-sm py-3 px-6">
                  Get Quote
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-[32px] overflow-hidden" style={{ boxShadow: "var(--shadow-card)" }}>
                <img src={service.heroImage} alt={service.title} className="w-full h-[420px] object-cover" />
              </div>
              <div
                className="absolute -bottom-6 -left-6 rounded-[24px] p-5 hidden md:block"
                style={{
                  background: "rgba(255, 253, 250, 0.96)",
                  border: "1px solid var(--line)",
                  boxShadow: "var(--shadow-card)",
                }}
              >
                <div className="stat-num" style={{ fontSize: "2.6rem", color: "var(--navy)" }}>
                  {service.items.length}
                </div>
                <div className="text-sm" style={{ color: "var(--steel)" }}>
                  Specialized Subservices
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="service-list" className="px-6 md:px-12 pb-20">
        <div className="max-w-7xl mx-auto grid xl:grid-cols-[1.15fr_0.85fr] gap-8">
          <div
            className="rounded-[30px] p-8 md:p-10"
            style={{
              background: "rgba(255,255,255,0.92)",
              border: "1px solid var(--line)",
              boxShadow: "0 18px 44px rgba(34,49,59,0.08)",
            }}
          >
            <div className="section-label">Service Scope</div>
            <h2 className="font-display text-5xl mt-3" style={{ color: "var(--navy)" }}>
              INCLUDED <span className="text-gold-gradient">SUBSERVICES</span>
            </h2>

            <div className="mt-8 grid md:grid-cols-2 gap-4">
              {service.items.map((item) => (
                <div
                  key={item}
                  className="rounded-[22px] p-5"
                  style={{
                    background: "linear-gradient(180deg, rgba(236,223,204,0.98) 0%, rgba(244,236,224,0.98) 100%)",
                    border: "1px solid rgba(63,45,24,0.12)",
                    boxShadow: "0 10px 24px rgba(34,49,59,0.06)",
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: "rgba(185,130,73,0.18)", color: "var(--navy)" }}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="m5 12 5 5L20 7" />
                      </svg>
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--navy)" }}>
                      {item}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <aside className="space-y-6">
            <div
              className="rounded-[30px] p-7"
              style={{
                background: "linear-gradient(160deg, rgba(34,49,59,0.98), rgba(67,85,96,0.94))",
                color: "white",
                boxShadow: "var(--shadow-card)",
              }}
            >
              <div className="section-label" style={{ color: "#ddb77c" }}>
                Why This Service
              </div>
              <h3 className="font-display text-4xl mt-3">Built For Modern Facilities</h3>
              <p className="mt-4 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.8)" }}>
                We combine execution quality, dependable manpower, and responsive support to deliver service outcomes that
                fit operational workplaces.
              </p>
              <a href="/#contact" className="btn-primary mt-6 text-sm py-3 px-6">
                Request Consultation
              </a>
            </div>

            <div
              className="rounded-[30px] p-7"
              style={{
                background: "rgba(255,255,255,0.92)",
                border: "1px solid var(--line)",
                boxShadow: "0 16px 34px rgba(34,49,59,0.08)",
              }}
            >
              <div className="section-label">More Services</div>
              <h3 className="font-display text-4xl mt-3" style={{ color: "var(--navy)" }}>
                Explore More
              </h3>
              <div className="mt-6 space-y-3">
                {relatedServices.map((item) => (
                  <button
                    key={item.slug}
                    type="button"
                    onClick={() => goTo(`/services/${item.slug}`)}
                    className="w-full text-left rounded-[18px] p-4 transition-all"
                    style={{
                      background: "rgba(247,241,232,0.78)",
                      border: "1px solid rgba(63,45,24,0.08)",
                      color: "var(--navy)",
                    }}
                  >
                    <div className="font-semibold text-sm">{item.title}</div>
                    <div className="text-xs mt-1" style={{ color: "var(--steel)" }}>
                      {item.items.length} subservices
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
