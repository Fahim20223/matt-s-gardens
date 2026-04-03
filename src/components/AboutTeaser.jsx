"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const C = {
  dark: "#1a2e12",
  green: "#3d6b2c",
  greenBg: "#eaf2e3",
  beigeAlt: "#ede8de",
  body: "#5c6b50",
  white: "#ffffff",
};

const features = [
  "No call centres — you deal with Matt directly",
  "Free, no-obligation quotes",
  "Fully insured for all garden work",
  "Hertfordshire based, always local",
];

export default function AboutTeaser() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  return (
    <section
      ref={containerRef}
      style={{ background: C.white, padding: "100px 40px", overflow: "hidden" }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 80,
          alignItems: "center",
        }}
        className="about-grid"
      >
        {/* Image column */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          style={{ position: "relative" }}
        >
          <motion.div style={{ y: imgY }}>
            <div
              style={{
                borderRadius: 24,
                overflow: "hidden",
                aspectRatio: "4/5",
                position: "relative",
                background: "#c5c0b5",
                boxShadow: "0 24px 60px rgba(0,0,0,0.12)",
              }}
            >
              <Image
                src="/images/flower-garden.jpg"
                alt="Matt working in the garden"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </motion.div>

          {/* Floating review badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.45,
              duration: 0.55,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{
              position: "absolute",
              bottom: 24,
              right: 16,
              background: C.dark,
              borderRadius: 18,
              padding: "16px 20px",
              boxShadow: "0 12px 36px rgba(0,0,0,0.22)",
              minWidth: 160,
              maxWidth: "calc(100% - 32px)",
            }}
            className="review-badge"
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 10,
              }}
            >
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  background: C.green,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <svg
                  viewBox="0 0 20 20"
                  fill="white"
                  style={{ width: 16, height: 16 }}
                >
                  <path d="M10 1l2.4 4.9 5.4.8-3.9 3.8.9 5.4L10 13.4l-4.8 2.5.9-5.4L2.2 6.7l5.4-.8z" />
                </svg>
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 22,
                    fontWeight: 700,
                    color: C.white,
                    lineHeight: 1,
                  }}
                >
                  5.0
                </div>
                <div style={{ display: "flex", gap: 2, marginTop: 2 }}>
                  {[...Array(5)].map((_, k) => (
                    <svg
                      key={k}
                      width="10"
                      height="10"
                      viewBox="0 0 20 20"
                      fill="#f5c842"
                    >
                      <path d="M10 1l2.4 4.9 5.4.8-3.9 3.8.9 5.4L10 13.4l-4.8 2.5.9-5.4L2.2 6.7l5.4-.8z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 12,
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.5,
              }}
            >
              "Absolutely brilliant — garden looks incredible."
            </p>
          </motion.div>

          {/* Decorative ring */}
          <div
            style={{
              position: "absolute",
              top: -30,
              left: -30,
              width: 140,
              height: 140,
              borderRadius: "50%",
              border: `2px dashed ${C.beigeAlt}`,
              zIndex: -1,
            }}
          />
        </motion.div>

        {/* Text column */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: C.greenBg,
              border: "1px solid rgba(61,107,44,0.18)",
              borderRadius: 99,
              padding: "6px 14px 6px 8px",
              marginBottom: 22,
            }}
          >
            <div
              style={{
                width: 22,
                height: 22,
                borderRadius: "50%",
                background: C.green,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg
                viewBox="0 0 16 16"
                fill="none"
                style={{ width: 10, height: 10 }}
              >
                <circle cx="8" cy="6" r="3" fill="white" />
                <path
                  d="M2 14c0-3 2.7-5 6-5s6 2 6 5"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <span
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 11.5,
                fontWeight: 600,
                color: C.green,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
              }}
            >
              About Matt
            </span>
          </div>

          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.9rem, 3vw, 2.8rem)",
              fontWeight: 700,
              color: C.dark,
              lineHeight: 1.13,
              marginBottom: 20,
            }}
          >
            One Man. One Standard.{" "}
            <span style={{ color: C.green }}>Done Right.</span>
          </h2>

          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 15.5,
              color: C.body,
              lineHeight: 1.72,
              marginBottom: 14,
            }}
          >
            Hi — I'm Matt. I've been looking after gardens across Hertfordshire
            for over eight years. There's no team of strangers, no
            subcontractors. When you book with Matt's Gardens, you get me —
            showing up on time, taking care of your space like it's my own, and
            leaving it looking genuinely great.
          </p>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 15.5,
              color: C.body,
              lineHeight: 1.72,
              marginBottom: 36,
            }}
          >
            I pride myself on doing an honest job at a fair price. No upselling,
            no drama — just solid, reliable garden work.
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 12,
              marginBottom: 38,
            }}
          >
            {features.map((f, i) => (
              <motion.div
                key={f}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.08 }}
                style={{ display: "flex", alignItems: "center", gap: 12 }}
              >
                <div
                  style={{
                    width: 22,
                    height: 22,
                    borderRadius: "50%",
                    background: C.greenBg,
                    border: `1.5px solid ${C.green}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <svg width="10" height="10" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M3 8l4 4 6-7"
                      stroke={C.green}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 14.5,
                    color: C.dark,
                    fontWeight: 500,
                  }}
                >
                  {f}
                </span>
              </motion.div>
            ))}
          </div>

          <Link
            href="/about"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: C.green,
              color: C.white,
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 14.5,
              fontWeight: 600,
              padding: "14px 26px",
              borderRadius: 99,
              textDecoration: "none",
              boxShadow: "0 4px 20px rgba(61,107,44,0.28)",
              transition: "all 0.22s ease",
            }}
            className="about-cta"
          >
            A Bit More About Me
            <svg
              width="15"
              height="15"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </Link>
        </motion.div>
      </div>

      <style jsx>{`
        .about-cta:hover {
          background: #2f5422 !important;
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(61, 107, 44, 0.35) !important;
        }
        @media (min-width: 901px) {
          .review-badge {
            right: -24px !important;
            bottom: 36px !important;
            min-width: 180px !important;
            padding: 20px 24px !important;
          }
        }
        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
          section {
            padding: 64px 20px !important;
          }
        }
      `}</style>
    </section>
  );
}
