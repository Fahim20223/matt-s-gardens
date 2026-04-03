"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const testimonials = [
  {
    name: "Sarah T.",
    location: "St Albans",
    text: "My lawn went from dry and patchy to lush and green. Matt was professional, friendly, and truly knew what he was doing. I've tried other gardeners before, but none compare to Matt's Gardens. Reliable, always on time, and always leaves the place spotless.",
    rating: 5,
    service: "Garden Clearance",
    initials: "ST",
  },
  {
    name: "David H.",
    location: "Welwyn Garden City",
    text: "Absolutely brilliant — the hedges and garden look so much better. Really friendly bloke, fair price, and tidied up after himself. Couldn't ask for more from a local tradesman. Will be booking again every season without a doubt.",
    rating: 5,
    service: "Hedge Trimming",
    initials: "DH",
  },
  {
    name: "Karen M.",
    location: "Stevenage",
    text: "The patio jet wash was unreal. Years of grime gone in a few hours. It looks brand new. The neighbours have already asked for his number — that says it all really. Highly recommend Matt for any garden or outdoor work.",
    rating: 5,
    service: "Jet Washing",
    initials: "KM",
  },
];

function Stars({ count = 5 }) {
  return (
    <div style={{ display: "flex", gap: 3 }}>
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          fill="#f5b942"
          style={{ width: 18, height: 18 }}
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292Z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      style={{
        background: "#1a2e12",
        padding: "96px 40px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative */}
      <div
        style={{
          position: "absolute",
          top: -80,
          right: -80,
          width: 320,
          height: 320,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.02)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -60,
          left: -60,
          width: 240,
          height: 240,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.02)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          style={{ textAlign: "center", marginBottom: 56 }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              marginBottom: 14,
            }}
          >
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: "50%",
                background: "rgba(143,206,106,0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg
                viewBox="0 0 20 20"
                fill="none"
                style={{ width: 14, height: 14 }}
              >
                <path
                  d="M10 17C10 17 4 12.5 4 8C4 5.5 6.7 3.5 10 3.5C13.3 3.5 16 5.5 16 8C16 12.5 10 17 10 17Z"
                  fill="#8fce6a"
                />
              </svg>
            </div>
            <span
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 12,
                fontWeight: 600,
                color: "#8fce6a",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
              }}
            >
              Testimonials
            </span>
          </div>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              fontWeight: 700,
              color: "#ffffff",
              lineHeight: 1.2,
            }}
          >
            What Our Happy Customers Say
          </h2>
        </motion.div>

        {/* Testimonial box */}
        <div style={{ maxWidth: 780, margin: "0 auto", position: "relative" }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35 }}
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 24,
                padding: "48px 52px",
                textAlign: "center",
                backdropFilter: "blur(4px)",
              }}
              className="testimonial-card"
            >
              {/* Avatar */}
              <div
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: "50%",
                  background: "#3d6b2c",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 20px",
                  border: "3px solid rgba(143,206,106,0.3)",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 22,
                    fontWeight: 700,
                    color: "white",
                  }}
                >
                  {testimonials[active].initials}
                </span>
              </div>

              <Stars count={testimonials[active].rating} />

              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 16,
                  color: "rgba(255,255,255,0.75)",
                  lineHeight: 1.75,
                  margin: "22px 0 26px",
                  fontStyle: "italic",
                }}
              >
                "{testimonials[active].text}"
              </p>

              <div>
                <div
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 17,
                    fontWeight: 600,
                    color: "#ffffff",
                  }}
                >
                  {testimonials[active].name}
                </div>
                <div
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 13,
                    color: "rgba(255,255,255,0.4)",
                    marginTop: 4,
                  }}
                >
                  {testimonials[active].service} ·{" "}
                  {testimonials[active].location}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Nav arrows */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 12,
              marginTop: 28,
            }}
          >
            <button
              onClick={() =>
                setActive(
                  (p) => (p - 1 + testimonials.length) % testimonials.length,
                )
              }
              style={{
                width: 44,
                height: 44,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.12)",
                color: "white",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.2s ease",
              }}
              className="testimonial-nav-btn"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                style={{ width: 18, height: 18 }}
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <div style={{ display: "flex", gap: 8 }}>
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  style={{
                    width: i === active ? 24 : 8,
                    height: 8,
                    borderRadius: 99,
                    background:
                      i === active ? "#8fce6a" : "rgba(255,255,255,0.2)",
                    border: "none",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                />
              ))}
            </div>

            <button
              onClick={() => setActive((p) => (p + 1) % testimonials.length)}
              style={{
                width: 44,
                height: 44,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.12)",
                color: "white",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.2s ease",
              }}
              className="testimonial-nav-btn"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                style={{ width: 18, height: 18 }}
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <style jsx>{`
        .testimonial-nav-btn:hover {
          background: rgba(255, 255, 255, 0.14) !important;
        }
        .testimonial-card {
          transition: none;
        }
        @media (max-width: 640px) {
          section {
            padding: 64px 20px !important;
          }
          .testimonial-card {
            padding: 32px 24px !important;
          }
        }
      `}</style>
    </section>
  );
}
