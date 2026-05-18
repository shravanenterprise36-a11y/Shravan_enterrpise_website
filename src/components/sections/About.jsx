import { useEffect, useRef } from "react";

const bullets = [
  "In-house civil, electrical, and plumbing experts",
  "Building trust through infrastructure excellence",
  "Technical excellence in every project",
  "Customized facility management for corporate spaces",
];

export default function About() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll(".anim-child").forEach((el, i) => {
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
    <section id="about" className="py-24 px-6 md:px-12 grid-pattern" style={{ background: "#f7f2e9" }}>
      <div className="max-w-6xl mx-auto" ref={ref}>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative anim-child" style={{ opacity: 0, transform: "translateY(30px)", transition: "all 0.7s ease" }}>
            <div className="rounded-[28px] overflow-hidden shadow-2xl">
              <img
                src="src\assets\Herosection\ourservices.png"
                alt="About Shravan Enterprises"
                style={{ width: "100%", height: "auto", display: "block", margin: "0 auto" }}
              />
            </div>

            <div
              className="absolute -bottom-6 -right-6 p-6 rounded-[24px] hidden md:block"
              style={{
                background: "rgba(255, 253, 250, 0.96)",
                border: "1px solid var(--line)",
                boxShadow: "var(--shadow-card)",
              }}
            >
              <div className="stat-num" style={{ fontSize: "3rem", color: "var(--navy)" }}>
                1+
              </div>
              <div className="text-sm mt-1" style={{ color: "var(--steel)" }}>
                Years of Excellence
              </div>
            </div>

            <div
              className="absolute -top-4 -left-4 w-24 h-24 rounded-[20px] -z-10 hidden md:block"
              style={{ background: "linear-gradient(135deg, #ddb77c, #c08a4b)", opacity: 0.22 }}
            />
          </div>

          <div>
            <div className="anim-child" style={{ opacity: 0, transform: "translateY(24px)", transition: "all 0.6s ease" }}>
              <div className="section-label">Who We Are</div>
              <div className="section-line mt-3" />
              <h2
                className="font-display mt-2 leading-none"
                style={{ fontSize: "clamp(2.4rem, 5vw, 3.8rem)", color: "var(--navy)" }}
              >
                WELCOME TO
                <br />
                <span className="text-gold-gradient">SHRAVAN</span> ENTERPRISES
              </h2>
            </div>

            <p
              className="mt-6 text-base leading-relaxed anim-child"
              style={{ color: "var(--steel)", transition: "all 0.6s ease", opacity: 0, transform: "translateY(20px)" }}
            >
              We build long-term relationships through an unwavering commitment to quality and technical excellence.
              Our in-house experts manage civil, electrical, and plumbing services with precision, ensuring your
              corporate environment remains functional, efficient, and sustainable.
            </p>

            <ul className="mt-8 space-y-4">
              {bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="flex items-start gap-3 anim-child"
                  style={{ opacity: 0, transform: "translateY(16px)", transition: "all 0.5s ease" }}
                >
                  <div
                    className="mt-1 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(185,130,73,0.12)", border: "1px solid rgba(185,130,73,0.36)" }}
                  >
                    <div style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--navy-light)" }} />
                  </div>
                  <span style={{ color: "#374151" }}>{bullet}</span>
                </li>
              ))}
            </ul>

            <div
              className="mt-10 flex gap-4 anim-child"
              style={{ opacity: 0, transform: "translateY(16px)", transition: "all 0.5s ease" }}
            >
              <a href="#contact" className="btn-primary text-sm py-3 px-6">
                Work With Us
              </a>
              <a href="#services" className="btn-navy text-sm py-3 px-6">
                Explore Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
