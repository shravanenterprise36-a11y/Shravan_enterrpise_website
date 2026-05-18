import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    name: "Amit Mehta",
    role: "CEO, Mehta Automotives",
    initials: "AM",
    rating: 5,
    text: "Shravan Enterprises transformed our production line efficiency. Their technical expertise is unmatched in the region. We've seen a 30% reduction in facility downtime since partnering with them.",
    color: "#c89357",
  },
  {
    name: "Sanjay Kumar",
    role: "Plant Manager, Green Industries",
    initials: "SK",
    rating: 5,
    text: "Reliability and precision are what we value most, and Shravan Enterprises delivers on both every single time. Their SLA adherence is exceptional, truly best-in-class service.",
    color: "var(--navy)",
  },
  {
    name: "Rina Patel",
    role: "COO, Patel & Sons Ltd.",
    initials: "RP",
    rating: 5,
    text: "Innovative approach to complex engineering problems. They are more than just a vendor; they are a strategic partner. Their proactive maintenance has saved us significant costs.",
    color: "#b98249",
  },
  {
    name: "Rajan Sharma",
    role: "Facilities Head, TechCorp India",
    initials: "RS",
    rating: 5,
    text: "The 24/7 support is a game changer. Any emergency at any hour and Shravan's team is there within the hour. The level of professionalism is outstanding.",
    color: "#9e6830",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => setActive((p) => (p + 1) % testimonials.length), 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="py-28 px-6 md:px-12 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #f6efe5 0%, #fffdfa 100%)" }}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "linear-gradient(rgba(108,78,43,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(108,78,43,0.08) 1px, transparent 1px)",
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

      <div
        className="relative z-10 max-w-7xl mx-auto"
        ref={ref}
        style={{ opacity: 0, transform: "translateY(30px)", transition: "all 0.7s ease" }}
      >
        <div className="text-center mb-16">
          <div className="section-label">Social Proof</div>
          <div className="section-line mx-auto mt-3" />
          <h2 className="font-display mt-4 leading-none" style={{ fontSize: "clamp(2.4rem, 5vw, 3.8rem)", color: "var(--navy)" }}>
            WHAT OUR CLIENTS <span className="text-navy-gradient">SAY</span>
          </h2>
          <p className="mt-4 max-w-md mx-auto text-sm" style={{ color: "var(--steel)" }}>
            Trusted by industry leaders across manufacturing, technology, logistics, and more.
          </p>
        </div>

        <div
          className="max-w-3xl mx-auto text-center mb-12 rounded-[32px] p-10"
          style={{ background: "rgba(255,255,255,0.84)", border: "1px solid var(--line)", boxShadow: "var(--shadow-soft)" }}
        >
          <div className="text-4xl" style={{ color: "var(--navy-light)", fontFamily: "Georgia, serif", lineHeight: 1 }}>
            "
          </div>
          <p
            className="text-xl md:text-2xl leading-relaxed font-light mt-4"
            style={{ color: "var(--navy)", fontFamily: "'DM Serif Display', serif", fontStyle: "italic" }}
          >
            {testimonials[active].text}
          </p>
          <div className="flex justify-center mt-3 text-sm font-semibold tracking-[0.3em]" style={{ color: "var(--navy-light)" }}>
            {testimonials[active].rating}.0 / 5
          </div>
          <div className="mt-6 flex flex-col items-center gap-1">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm"
              style={{ background: testimonials[active].color, color: "white" }}
            >
              {testimonials[active].initials}
            </div>
            <div className="font-semibold" style={{ color: "var(--navy)" }}>{testimonials[active].name}</div>
            <div className="text-xs" style={{ color: "var(--steel)" }}>{testimonials[active].role}</div>
          </div>
        </div>

        <div className="flex justify-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActive(index)}
              className="rounded-full transition-all duration-300"
              style={{
                width: index === active ? "28px" : "8px",
                height: "8px",
                background: index === active ? "var(--navy-light)" : "rgba(34,49,59,0.18)",
              }}
            />
          ))}
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {testimonials.map((item, index) => (
            <button
              key={item.name}
              onClick={() => setActive(index)}
              className="text-left p-5 rounded-[24px] transition-all duration-300"
              style={{
                background: index === active ? "rgba(255,255,255,0.96)" : "rgba(255,255,255,0.74)",
                border: `1px solid ${index === active ? "rgba(185,130,73,0.34)" : "var(--line)"}`,
                boxShadow: index === active ? "0 16px 34px rgba(34,49,59,0.1)" : "none",
              }}
            >
              <div className="flex gap-2 items-center mb-3">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
                  style={{ background: item.color, color: "white" }}
                >
                  {item.initials}
                </div>
                <div>
                  <div className="text-xs font-semibold" style={{ color: "var(--navy)" }}>{item.name}</div>
                  <div style={{ fontSize: "10px", color: "var(--steel)" }}>{item.role}</div>
                </div>
              </div>
              <p className="text-xs leading-relaxed line-clamp-3" style={{ color: "var(--steel)" }}>{item.text}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
