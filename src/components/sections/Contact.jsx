import { useState } from "react";
import { FiMapPin, FiPhone, FiMail, FiSend } from "react-icons/fi";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (sending) return;
    setSending(true);

    const whatsappNumber = "91" + "9511777770"; 
    const message = `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nService: ${form.service}\nMessage: ${form.message}`;
    const url = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(message)}`;

    // Open WhatsApp in a new tab/window. If popup is blocked, navigate current window.
    const newWindow = window.open(url, "_blank");
    if (!newWindow) {
      // try wa.me short link
      const waMe = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
      // fallback to navigate current page (will open WhatsApp web)
      window.location.href = waMe;
    }

    // Show local confirmation and reset form
    setSent(true);
    setForm({ name: "", email: "", phone: "", service: "", message: "" });

    // Re-enable button and hide confirmation after short delay
    setTimeout(() => {
      setSent(false);
      setSending(false);
    }, 4000);
  };

  const openGmail = (to) => {
    const url = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(to)}`;
    const newWindow = window.open(url, "_blank");
    if (!newWindow) window.location.href = url;
  };

  const inputStyle = {
    width: "100%",
    padding: "13px 15px",
    borderRadius: "16px",
    border: "1.5px solid var(--line)",
    background: "rgba(255,255,255,0.92)",
    fontSize: "14px",
    color: "var(--navy)",
    transition: "border-color 0.2s",
  };

  const labelStyle = {
    display: "block",
    fontSize: "12px",
    fontWeight: 600,
    letterSpacing: "0.06em",
    marginBottom: "6px",
    color: "#374151",
    textTransform: "uppercase",
  };

  const contactItems = [
    {
      label: "Address",
      value: "Sr No 11 Parnakuti Paytha Near Darbar Bakery Yerwada Pune, 411006 ",
      icon: <FiMapPin size={18} />,
    },
    {
      label: "Phone",
      value: "+91 95117 77770",
      icon: <FiPhone size={18} />,
    },
    {
      label: "Email",
      value: (
        <a
          href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent("support@shravanenterprises.com")}`}
          onClick={(e) => {
            e.preventDefault();
            openGmail("support@shravanenterprises.com");
          }}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "var(--navy)", textDecoration: "underline", cursor: "pointer" }}
        >
          support@shravanenterprises.com
        </a>
      ),
      icon: <FiMail size={18} />,
    },
  ];

  return (
    <section id="contact" className="py-28 px-6 md:px-12" style={{ background: "var(--gray-light)" }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <div className="section-label">Reach Out</div>
            <div className="section-line mt-3" />
            <h2 className="font-display mt-2 leading-none" style={{ fontSize: "clamp(2.4rem, 5vw, 3.8rem)", color: "var(--navy)" }}>
              LET'S DISCUSS
              <br />
              YOUR <span className="text-navy-gradient">PROJECT</span>
            </h2>

            <p className="mt-5 text-sm leading-relaxed" style={{ color: "var(--steel)", maxWidth: "400px" }}>
              Our technical team is ready to evaluate your facility needs and provide a comprehensive, customized
              solution tailored to your business requirements.
            </p>

            <div className="mt-10 space-y-5">
              {contactItems.map((item) => (
                <div key={item.label} className="flex gap-4 items-start">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(185,130,73,0.12)", color: "var(--navy-light)" }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-xs font-semibold tracking-widest mb-0.5" style={{ color: "#9ca3af" }}>
                      {item.label.toUpperCase()}
                    </div>
                    <div className="text-sm" style={{ color: "var(--navy)" }}>{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className="p-8 rounded-[30px]"
            style={{ background: "rgba(255,255,255,0.96)", border: "1px solid var(--line)", boxShadow: "var(--shadow-card)" }}
          >
            <h3 className="text-xl font-bold mb-6" style={{ color: "var(--navy)" }}>
              Send Us a Message
            </h3>

            {sent && (
              <div
                className="mb-5 p-4 rounded-lg text-sm font-medium"
                style={{ background: "rgba(185,130,73,0.1)", color: "var(--navy)", border: "1px solid rgba(185,130,73,0.24)" }}
              >
                Message sent. We'll respond within 24 hours.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label style={labelStyle}>Full Name</label>
                  <input name="name" value={form.name} onChange={handleChange} placeholder="XYZ" style={inputStyle} required />
                </div>
                <div>
                  <label style={labelStyle}>Email</label>
                  <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="xyz@company.com" style={inputStyle} required />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label style={labelStyle}>Phone</label>
                  <input name="phone" value={form.phone} onChange={handleChange} placeholder="+91 95117 77770" style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>Service Required</label>
                  <select name="service" value={form.service} onChange={handleChange} style={inputStyle}>
                    <option value="">Select a service</option>
                    <option>Civil & Interior Works</option>
                    <option>Electrical Services</option>
                    <option>Plumbing Services</option>
                    <option>Carpentry & Furniture</option>
                    <option>Painting & Polishing</option>
                    <option>General Facility Services</option>
                    <option>Multiple Services</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              <div>
                <label style={labelStyle}>Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Describe your project requirements, building size, and timeline..."
                  rows={5}
                  style={{ ...inputStyle, resize: "vertical" }}
                />
              </div>
              <button
                type="submit"
                className="btn-primary w-full justify-center py-3.5 text-sm"
                style={{ width: "100%" }}
                disabled={sending}
                aria-disabled={sending}
              >
                Send Message
                <FiSend style={{ marginLeft: 8 }} />
              </button>
              <p className="text-center text-xs mt-3" style={{ color: "#9ca3af" }}>
                We respond to all inquiries within 24 hours
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
