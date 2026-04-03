"use client";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

const C = {
  dark: "#1a2e12",
  green: "#3d6b2c",
  white: "#ffffff",
};

const stats = [
  { value: "200+", label: "Happy Customers" },
  { value: "8 yrs", label: "In the Trade" },
  { value: "100%", label: "5-Star Reviews" },
  { value: "Same Day", label: "Quotes Available" },
];

function CountUp({ target, duration = 1800 }) {
  const [display, setDisplay] = useState("0");
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    const num = parseInt(target.replace(/\D/g, ""), 10);
    if (isNaN(num)) { setDisplay(target); return; }
    const suffix = target.replace(/[0-9]/g, "");
    let start = null;
    const step = (ts) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      setDisplay(Math.floor(ease * num) + suffix);
      if (p < 1) requestAnimationFrame(step);
      else setDisplay(target);
    };
    requestAnimationFrame(step);
  }, [inView, target, duration]);

  return <span ref={ref}>{display}</span>;
}

export default function TrustStrip() {
  return (
    <section style={{ background: C.dark, padding: "0 40px", overflow: "hidden" }}>
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
        }}
        className="trust-grid"
      >
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{
              padding: "38px 24px",
              borderRight: i < stats.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
                fontWeight: 700,
                color: C.white,
                lineHeight: 1,
                marginBottom: 6,
              }}
            >
              <CountUp target={s.value} />
            </div>
            <div
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 12,
                fontWeight: 500,
                color: "rgba(255,255,255,0.45)",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
              }}
            >
              {s.label}
            </div>
          </motion.div>
        ))}
      </div>

      <style jsx>{`
        @media (max-width: 640px) {
          .trust-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .trust-grid > div {
            border-right: none !important;
            border-bottom: 1px solid rgba(255,255,255,0.08);
          }
        }
      `}</style>
    </section>
  );
}
