"use client";
import { motion } from "framer-motion";

const C = {
  dark: "#1a2e12",
  green: "#3d6b2c",
  white: "#ffffff",
};

const reviews = [
  {
    name: "Sarah T.",
    location: "St Albans",
    text: "Matt cleared our entire back garden in a day. Brilliant work, very fair price, and he tidied up impeccably. Would absolutely use again.",
    stars: 5,
  },
  {
    name: "James P.",
    location: "Harpenden",
    text: "Had the hedges trimmed and the patio jet washed. Transformation is unreal. Friendly, professional, and on time. Highly recommend.",
    stars: 5,
  },
  {
    name: "Claire M.",
    location: "Welwyn",
    text: "Easy to contact, quoted quickly, and the work was done the following week. Garden looks immaculate. Great value for money.",
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section style={{ background: C.dark, padding: "96px 40px", overflow: "hidden" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 99, padding: "6px 14px 6px 8px", marginBottom: 20 }}
          >
            <div style={{ width: 22, height: 22, borderRadius: "50%", background: C.green, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg viewBox="0 0 16 16" fill="white" style={{ width: 10, height: 10 }}>
                <path d="M8 1l1.8 3.6 4 .6-2.9 2.8.7 4L8 10.1 4.4 12l.7-4L2.2 5.2l4-.6z" />
              </svg>
            </div>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11.5, fontWeight: 600, color: "rgba(255,255,255,0.6)", letterSpacing: "0.16em", textTransform: "uppercase" }}>
              What Customers Say
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.9rem, 3.5vw, 2.9rem)", fontWeight: 700, color: C.white, lineHeight: 1.13 }}
          >
            Don't Just Take My Word For It
          </motion.h2>
        </div>

        {/* Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }} className="review-grid">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.09)", borderRadius: 20, padding: "32px 28px" }}
            >
              <div style={{ display: "flex", gap: 4, marginBottom: 18 }}>
                {[...Array(r.stars)].map((_, k) => (
                  <svg key={k} width="14" height="14" viewBox="0 0 20 20" fill="#f5c842">
                    <path d="M10 1l2.4 4.9 5.4.8-3.9 3.8.9 5.4L10 13.4l-4.8 2.5.9-5.4L2.2 6.7l5.4-.8z" />
                  </svg>
                ))}
              </div>

              <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 16.5, fontStyle: "italic", color: "rgba(255,255,255,0.82)", lineHeight: 1.65, marginBottom: 24 }}>
                "{r.text}"
              </p>

              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ width: 36, height: 36, borderRadius: "50%", background: C.green, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Playfair Display', serif", fontSize: 14, fontWeight: 700, color: C.white }}>
                  {r.name[0]}
                </div>
                <div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 600, color: C.white }}>{r.name}</div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.4)" }}>{r.location}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) { .review-grid { grid-template-columns: 1fr !important; gap: 16px !important; } }
        @media (max-width: 580px) { section { padding: 64px 20px !important; } }
      `}</style>
    </section>
  );
}
