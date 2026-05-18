import { useEffect, useRef } from "react";
import { FiEye, FiCheckCircle, FiHeart } from "react-icons/fi";

const cards = [
  {
    icon: <FiEye size={22} />,
    label: "OUR VISION",
    title: "Leading Services Provider",
    text: "Shravan Enterprises vision is to be leading services provider delivering a multitude of project and services disciplines, whilst maintaining the core business ethics of professionalism and transparency.",
  },
  {
    icon: <FiCheckCircle size={22} />,
    label: "OUR MISSION",
    title: "Reliable & Efficient",
    text: "Our Mission is to remain reliable and efficient at the forefront of industry through quality, honesty, and hard work.",
  },
  {
    icon: <FiHeart size={22} />,
    label: "OUR VALUES",
    title: "Integrity & Trust",
    text: "Our values are - high integrity, compassion, innovation, and trust for long lasting customer experience.",
  },
];

export default function VisionMission() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll(".vm-card").forEach((el, i) => {
            setTimeout(() => {
              el.style.opacity = "1";
              el.style.transform = "translateY(0)";
            }, i * 150);
          });
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="py-28 px-6 md:px-12"
      style={{ background: "linear-gradient(180deg, #fffdfa 0%, #f6efe5 100%)", position: "relative", overflow: "hidden" }}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "linear-gradient(rgba(108,78,43,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(108,78,43,0.08) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div
        className="absolute top-0 right-0 w-96 h-96 opacity-10"
        style={{
          background: "radial-gradient(circle, rgba(185,130,73,0.55) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto" ref={ref}>
        <div className="text-center mb-16">
          <div className="section-label">Our Foundation</div>
          <div className="section-line mx-auto mt-3" />
          <h2 className="font-display mt-4 leading-none" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "var(--navy)" }}>
            VISION, MISSION &amp; <span className="text-gold-gradient">INTEGRITY</span>
          </h2>
          <p className="mt-4 max-w-xl mx-auto" style={{ color: "var(--steel)" }}>
            The principles that guide our work and define our commitment to professional infrastructure services.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div
              key={card.label}
              className="vm-card p-8 rounded-[28px] relative overflow-hidden card-lift"
              style={{
                opacity: 0,
                transform: "translateY(30px)",
                transition: "all 0.6s ease",
                background: index === 1 ? "linear-gradient(135deg, #fff8ee, #f3e3cf)" : "rgba(255,255,255,0.84)",
                border: "1px solid var(--line)",
                boxShadow: "var(--shadow-soft)",
              }}
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center mb-6 text-sm font-bold"
                style={{
                  background: index === 1 ? "var(--navy)" : "rgba(185,130,73,0.12)",
                  color: index === 1 ? "var(--white)" : "var(--navy-light)",
                  letterSpacing: "0.08em",
                }}
              >
                {card.icon}
              </div>
              <div className="text-xs font-semibold tracking-widest mb-2" style={{ color: "var(--navy-light)" }}>
                {card.label}
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: "var(--navy)" }}>
                {card.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--steel)" }}>
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
