"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const serviceCards = [
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" style={{ width: 38, height: 38 }}>
        <circle cx="20" cy="20" r="18" fill="#e8f2e1" />
        <path
          d="M20 30C20 30 11 23 11 16C11 12 15 9 20 9C25 9 29 12 29 16C29 23 20 30 20 30Z"
          fill="#3d6b2c"
          fillOpacity="0.85"
        />
        <path
          d="M20 12C20 12 17 16 20 22"
          stroke="white"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Hedge Trimming",
    desc: "Crisp, clean edges on all hedge types. Tidy lines every time, waste removed.",
    href: "/services#hedge-trimming",
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" style={{ width: 38, height: 38 }}>
        <circle cx="20" cy="20" r="18" fill="#f2ede5" />
        <rect x="11" y="22" width="18" height="4" rx="2" fill="#8b6340" />
        <path
          d="M14 22V14C14 12.9 14.9 12 16 12H24C25.1 12 26 12.9 26 14V22"
          stroke="#8b6340"
          strokeWidth="1.5"
        />
        <path
          d="M17 17L20 14L23 17"
          stroke="#8b6340"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Garden Clearance",
    desc: "Full or partial clearances. We take the lot — weeds, debris, old plants.",
    href: "/services#garden-clearance",
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" style={{ width: 38, height: 38 }}>
        <circle cx="20" cy="20" r="18" fill="#eaf2e6" />
        <path
          d="M20 30V10M14 16L20 10L26 16"
          stroke="#3d6b2c"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13 30H27"
          stroke="#3d6b2c"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="20" cy="22" r="3" fill="#3d6b2c" fillOpacity="0.25" />
      </svg>
    ),
    title: "Small Tree Work",
    desc: "Crown reduction, shaping and deadwood removal for small trees.",
    href: "/services#tree-work",
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" style={{ width: 38, height: 38 }}>
        <circle cx="20" cy="20" r="18" fill="#e5eef5" />
        <path
          d="M13 14C13 14 18 18 18 24"
          stroke="#3a6e9c"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M18 24C18 24 20 27 23 26C26 25 27 22 27 18"
          stroke="#3a6e9c"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <circle
          cx="28"
          cy="14"
          r="3"
          fill="#3a6e9c"
          fillOpacity="0.3"
          stroke="#3a6e9c"
          strokeWidth="1.2"
        />
        <path
          d="M25 14L22 15"
          stroke="#3a6e9c"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Jet Washing",
    desc: "Driveways, patios, decking. Years of grime gone in just a few hours.",
    href: "/services#jet-washing",
  },
];

export default function ServiceStrip() {
  return (
    <section
      style={{
        background: "#ffffff",
        padding: "0 40px",
        position: "relative",
        zIndex: 10,
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 0,
            background: "#ffffff",
            borderRadius: 20,
            boxShadow:
              "0 -8px 40px rgba(0,0,0,0.12), 0 8px 40px rgba(0,0,0,0.06)",
            overflow: "hidden",
            transform: "translateY(-40px)",
          }}
          className="service-strip-grid"
        >
          {serviceCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              style={{
                padding: "32px 28px",
                borderRight:
                  i < serviceCards.length - 1 ? "1px solid #f0ece5" : "none",
                display: "flex",
                flexDirection: "column",
                gap: 14,
                transition: "background 0.2s ease",
                cursor: "pointer",
              }}
              className="strip-card"
              onClick={() => (window.location.href = card.href)}
            >
              <div>{card.icon}</div>
              <div>
                <div
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 17,
                    fontWeight: 700,
                    color: "#1a2e12",
                    marginBottom: 6,
                  }}
                >
                  {card.title}
                </div>
                <div
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 13.5,
                    color: "#6b7c5e",
                    lineHeight: 1.55,
                  }}
                >
                  {card.desc}
                </div>
              </div>
              <Link
                href={card.href}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 5,
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 12.5,
                  fontWeight: 600,
                  color: "#3d6b2c",
                  textDecoration: "none",
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  marginTop: "auto",
                }}
              >
                Read More
                <svg
                  style={{ width: 14, height: 14 }}
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
          ))}
        </div>
      </div>
      <style jsx>{`
        .strip-card:hover {
          background: #f7f4ef !important;
        }
        @media (max-width: 900px) {
          .service-strip-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 540px) {
          .service-strip-grid {
            grid-template-columns: 1fr !important;
            transform: translateY(-20px) !important;
          }
          section {
            padding: 0 16px !important;
          }
        }
      `}</style>
    </section>
  );
}
