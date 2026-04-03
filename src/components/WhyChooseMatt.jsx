"use client";
import { motion } from "framer-motion";

const C = {
  dark: "#1a2e12",
  green: "#3d6b2c",
  greenBg: "#eaf2e3",
  beige: "#f5f0e8",
  beigeAlt: "#ede8de",
  body: "#5c6b50",
  white: "#ffffff",
};

const whyItems = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" style={{ width: 24, height: 24 }}>
        <path d="M10 1l2.4 4.9 5.4.8-3.9 3.8.9 5.4L10 13.4l-4.8 2.5.9-5.4L2.2 6.7l5.4-.8z" stroke="white" strokeWidth="1.8" strokeLinejoin="round" fill="rgba(255,255,255,0.15)" />
      </svg>
    ),
    title: "Rated 5 Stars",
    text: "Every review on Google is five stars. That's not luck — it's just how Matt works.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" style={{ width: 24, height: 24 }}>
        <rect x="3" y="4" width="18" height="16" rx="2" stroke="white" strokeWidth="1.8" />
        <path d="M16 2v4M8 2v4M3 10h18" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="8" cy="15" r="1.2" fill="white" />
        <circle cx="12" cy="15" r="1.2" fill="white" />
        <circle cx="16" cy="15" r="1.2" fill="white" />
      </svg>
    ),
    title: "Flexible Scheduling",
    text: "Morning, afternoon, weekends — Matt works around what suits you, not the other way around.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" style={{ width: 24, height: 24 }}>
        <path d="M12 22s-7-5-7-11a7 7 0 0114 0c0 6-7 11-7 11z" stroke="white" strokeWidth="1.8" />
        <circle cx="12" cy="11" r="2.5" stroke="white" strokeWidth="1.6" />
      </svg>
    ),
    title: "Local to Hertfordshire",
    text: "Based right here in Hertfordshire — not a national chain with a local number.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" style={{ width: 24, height: 24 }}>
        <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 22C6.5 22 2 17.5 2 12S6.5 2 12 2s10 4.5 10 10-4.5 10-10 10z" stroke="white" strokeWidth="1.8" />
      </svg>
    ),
    title: "Fully Insured",
    text: "All garden work is fully insured. You're completely covered — peace of mind guaranteed.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" style={{ width: 24, height: 24 }}>
        <path d="M20 12V6l-8-4-8 4v6c0 5 8 8 8 8s8-3 8-8z" stroke="white" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    ),
    title: "No Hidden Charges",
    text: "The price you're quoted is the price you pay. No surprises on the invoice.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" style={{ width: 24, height: 24 }}>
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke="white" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    ),
    title: "Quick to Respond",
    text: "Matt actually replies to messages. Usually same day. Refreshing, isn't it.",
  },
];

export default function WhyChooseMatt() {
  return (
    <section style={{ background: C.beige, padding: "96px 40px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ display: "inline-flex", alignItems: "center", gap: 8, background: C.greenBg, border: "1px solid rgba(61,107,44,0.18)", borderRadius: 99, padding: "6px 14px 6px 8px", marginBottom: 20 }}
          >
            <div style={{ width: 22, height: 22, borderRadius: "50%", background: C.green, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg viewBox="0 0 16 16" fill="white" style={{ width: 10, height: 10 }}>
                <path d="M8 1l1.8 3.6 4 .6-2.9 2.8.7 4L8 10.1 4.4 12l.7-4L2.2 5.2l4-.6z" />
              </svg>
            </div>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11.5, fontWeight: 600, color: C.green, letterSpacing: "0.16em", textTransform: "uppercase" }}>
              Why Matt's Gardens
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.9rem, 3.5vw, 2.9rem)", fontWeight: 700, color: C.dark, lineHeight: 1.13, marginBottom: 14 }}
          >
            The Honest, Local Choice
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.18 }}
            style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 16, color: C.body, maxWidth: 480, margin: "0 auto", lineHeight: 1.65 }}
          >
            There are plenty of gardeners out there. Here's why people in Hertfordshire keep coming back to Matt.
          </motion.p>
        </div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }} className="why-grid">
          {whyItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.08, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              style={{ background: C.white, border: `1px solid ${C.beigeAlt}`, borderRadius: 18, padding: "32px 28px", transition: "box-shadow 0.25s ease, transform 0.25s ease" }}
              className="why-card"
            >
              <div style={{ width: 48, height: 48, borderRadius: 14, background: C.green, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18, boxShadow: "0 4px 14px rgba(61,107,44,0.28)" }}>
                {item.icon}
              </div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 700, color: C.dark, marginBottom: 10, lineHeight: 1.25 }}>
                {item.title}
              </h3>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: C.body, lineHeight: 1.65 }}>
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .why-card:hover { box-shadow: 0 14px 40px rgba(0,0,0,0.09) !important; transform: translateY(-4px); }
        @media (max-width: 900px) { .why-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 560px) { .why-grid { grid-template-columns: 1fr !important; } section { padding: 64px 20px !important; } }
      `}</style>
    </section>
  );
}
