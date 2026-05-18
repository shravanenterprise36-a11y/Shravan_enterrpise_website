import { useEffect, useRef } from "react";
import { FiClock, FiTrendingUp, FiTool, FiUsers } from "react-icons/fi";
import { civilImg, electricalImg, generalImg } from "../../data/images";

const features = [
  {
    icon: <FiTool size={20} />,
    number: "01",
    title: "Multi-Service Expertise",
    desc: "Complete infrastructure and facility management support under one roof, covering civil, electrical, plumbing, interiors, MEP, cleaning, and maintenance.",
  },
  {
    icon: <FiTrendingUp size={20} />,
    number: "02",
    title: "Economy With Technical Excellence",
    desc: "We deliver cost-conscious solutions without compromising on workmanship, technical standards, or execution quality.",
  },
  {
    icon: <FiClock size={20} />,
    number: "03",
    title: "Timely Project Execution",
    desc: "Our teams are structured to complete projects and maintenance scopes within committed timelines and controlled budgets.",
  },
  {
    icon: <FiUsers size={20} />,
    number: "04",
    title: "Experienced Workforce",
    desc: "Skilled technicians, engineers, and support professionals manage jobs of different scales with reliable coordination.",
  },
];

const highlights = [
  { value: "500+", label: "Projects Delivered" },
  { value: "200+", label: "Corporate Clients" },
  { value: "15+", label: "Years Of Expertise" },
  { value: "99%", label: "On-Time Delivery" },
];

const gallery = [
  { src: civilImg, alt: "Civil infrastructure execution", size: "large" },
  { src: electricalImg, alt: "Electrical systems maintenance", size: "small" },
  { src: generalImg, alt: "General facility support", size: "small" },
];

export default function WhyChooseUs() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll(".why-anim").forEach((el, i) => {
            setTimeout(() => {
              el.style.opacity = "1";
              el.style.transform = "translateY(0)";
            }, i * 110);
          });
        }
      },
      { threshold: 0.15 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="why"
      className="py-28 px-6 md:px-12"
      ref={ref}
      style={{
        background:
          "radial-gradient(circle at top right, rgba(185,130,73,0.18), transparent 24%), linear-gradient(180deg, #f8f2e9 0%, #efe2d0 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid xl:grid-cols-[0.95fr_1.05fr] gap-10 xl:gap-14 items-start">
          <div>
            <div
              className="why-anim section-label"
              style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.5s ease" }}
            >
              Our Advantage
            </div>
            <div
              className="why-anim section-line mt-3"
              style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.5s ease" }}
            />
            <h2
              className="why-anim font-display mt-2 leading-none"
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4.2rem)",
                color: "var(--navy)",
                opacity: 0,
                transform: "translateY(20px)",
                transition: "all 0.6s ease",
              }}
            >
              WHY CORPORATE
              <br />
              CLIENTS <span className="text-gold-gradient">TRUST US</span>
            </h2>

            <p
              className="why-anim mt-6 text-base md:text-lg leading-relaxed max-w-xl"
              style={{ color: "#55626d", opacity: 0, transform: "translateY(20px)", transition: "all 0.6s ease" }}
            >
              We focus on practical execution, dependable teams, and consistent service quality. Every project is guided
              by the same promise: economy with technical excellence.
            </p>

          </div>

          <div className="why-anim" style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.6s ease" }}>
            <div className="grid md:grid-cols-[1.15fr_0.85fr] gap-4">
              <div className="relative rounded-[30px] overflow-hidden min-h-[420px]" style={{ boxShadow: "var(--shadow-card)" }}>
                <img src={gallery[0].src} alt={gallery[0].alt} className="w-full h-full object-cover" />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(34,49,59,0.78) 0%, rgba(34,49,59,0.12) 52%, transparent 100%)" }}
                />
                <div className="absolute left-6 right-6 bottom-6">
                  <div
                    className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold"
                    style={{ background: "rgba(255,253,250,0.9)", color: "var(--navy)" }}
                  >
                    End-to-End Execution
                  </div>
                  <p className="mt-4 text-white text-base leading-relaxed max-w-sm">
                    Strong field execution supported by planning, supervision, and consistent quality control.
                  </p>
                </div>
              </div>

              <div className="grid gap-4">
                {gallery.slice(1).map((image, index) => (
                  <div
                    key={image.src}
                    className="relative rounded-[26px] overflow-hidden min-h-[202px]"
                    style={{ boxShadow: "0 16px 34px rgba(34,49,59,0.1)" }}
                  >
                    <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
                    <div
                      className="absolute inset-0"
                      style={{ background: "linear-gradient(to top, rgba(34,49,59,0.62) 0%, rgba(34,49,59,0.04) 60%, transparent 100%)" }}
                    />
                    <div className="absolute left-5 bottom-5 text-white">
                      <div className="text-xs font-semibold tracking-[0.22em] uppercase opacity-80">
                        {index === 0 ? "Technical Depth" : "Client Coordination"}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5 mt-16">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="why-anim group h-full rounded-[28px] p-7"
              style={{
                opacity: 0,
                transform: "translateY(24px)",
                transition: "all 0.55s ease",
                background: "linear-gradient(180deg, rgba(255,250,243,0.98) 0%, rgba(245,232,214,0.98) 100%)",
                border: "1px solid rgba(63,45,24,0.16)",
                boxShadow: "0 14px 30px rgba(34,49,59,0.08)",
              }}
            >
              <div className="flex items-center justify-between gap-4">
                <div
                  className="w-14 h-14 rounded-[18px] flex items-center justify-center transition-all duration-300"
                  style={{ background: "rgba(185,130,73,0.16)", color: "#8f5d2c" }}
                >
                  {feature.icon}
                </div>
                <div className="stat-num text-3xl" style={{ color: "rgba(34,49,59,0.16)" }}>
                  {feature.number}
                </div>
              </div>

              <h3 className="mt-6 text-lg font-bold leading-snug" style={{ color: "var(--navy)" }}>
                {feature.title}
              </h3>
              <div
                className="mt-3 h-1 rounded-full"
                style={{ width: "54px", background: "linear-gradient(90deg, #ddb77c, #9e6830)" }}
              />
              <p className="mt-4 text-sm leading-relaxed" style={{ color: "#5b6772" }}>
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
