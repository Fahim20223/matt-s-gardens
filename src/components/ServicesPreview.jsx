"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const C = {
  dark: "#1a2e12",
  green: "#3d6b2c",
  greenBg: "#eaf2e3",
  beige: "#f5f0e8",
  beigeAlt: "#ede8de",
  sand: "#c8bfaf",
  body: "#5c6b50",
  white: "#ffffff",
};

const services = [
  {
    title: "Hedge Trimming",
    blurb: "Crisp edges and perfectly shaped boundaries — every single visit.",
    img: "https://t3.ftcdn.net/jpg/05/34/34/92/240_F_534349268_XLErmUsNRNWmBU2f5fBn7z29oP7CNYkW.jpg",
    href: "/services#hedge-trimming",
  },
  {
    title: "Garden Clearance",
    blurb:
      "From overgrown chaos to a clean slate, ready for whatever comes next.",
    img: "https://images.ctfassets.net/5kq8dse7hipf/4PHD3b9MqaxeSom0gjOeJE/463ba7f65610e41e259ed8028943641d/garden-clearance-cost-featured.jpeg",
    href: "/services#garden-clearance",
  },
  {
    title: "Small Tree Work",
    blurb:
      "Pruning, shaping and crown reduction — safely handled from start to finish.",
    img: "https://greenpinetreeservice.com/wp-content/uploads/2024/05/front-yard-1210x423.jpg",
    href: "/services#tree-work",
  },
  {
    title: "garden-maintenance",
    blurb:
      "Regular visits to keep everything in order year-round. Flexible fortnightly or monthly plans tailored to your garden.",
    img: "https://grdcentre.com/assets/powerhouse/uploads/images/maintenence3.jpg",
    href: "/services#jet-washing",
  },
];

function ServiceCard({ s, i }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: 20,
        overflow: "hidden",
        background: C.white,
        border: `1px solid ${C.beigeAlt}`,
        boxShadow: hovered
          ? "0 24px 56px rgba(0,0,0,0.13)"
          : "0 4px 16px rgba(0,0,0,0.05)",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        transition: "all 0.35s cubic-bezier(0.22,1,0.36,1)",
        display: "flex",
        flexDirection: "column",
        cursor: "pointer",
      }}
    >
      <div
        style={{
          position: "relative",
          aspectRatio: "3/2",
          overflow: "hidden",
          background: "#d5cfc5",
        }}
      >
        <Image
          src={s.img}
          alt={s.title}
          fill
          style={{
            objectFit: "cover",
            transform: hovered ? "scale(1.06)" : "scale(1)",
            transition: "transform 0.5s ease",
          }}
          sizes="(max-width: 768px) 100vw, 25vw"
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: hovered
              ? "linear-gradient(to top, rgba(26,46,18,0.55) 0%, transparent 60%)"
              : "linear-gradient(to top, rgba(26,46,18,0.25) 0%, transparent 60%)",
            transition: "background 0.35s ease",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 16,
            left: 16,
            background: "rgba(255,255,255,0.9)",
            backdropFilter: "blur(6px)",
            borderRadius: 99,
            padding: "6px 12px",
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 13,
            fontWeight: 600,
            color: C.dark,
            display: "flex",
            alignItems: "center",
            gap: 6,
          }}
        >
          <span>{s.icon}</span>
          <span style={{ color: C.green }}>{s.title}</span>
        </div>
      </div>

      <div
        style={{
          padding: "22px 24px 26px",
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 14.5,
            color: C.body,
            lineHeight: 1.65,
            flex: 1,
            marginBottom: 18,
          }}
        >
          {s.blurb}
        </p>
        <Link
          href={s.href}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 13.5,
            fontWeight: 600,
            color: C.green,
            textDecoration: "none",
          }}
        >
          Find out more
          <svg
            width="14"
            height="14"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>
    </motion.div>
  );
}

export default function ServicesPreview() {
  return (
    <section style={{ background: C.beige, padding: "96px 40px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: 52,
            flexWrap: "wrap",
            gap: 20,
          }}
        >
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: C.greenBg,
                border: "1px solid rgba(61,107,44,0.18)",
                borderRadius: 99,
                padding: "6px 14px 6px 8px",
                marginBottom: 18,
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
                  <path
                    d="M8 14s-5-3.5-5-7c0-2 2.2-3.5 5-3.5S13 5 13 7c0 3.5-5 7-5 7z"
                    fill="white"
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
                What Matt Does
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(1.9rem, 3.5vw, 2.9rem)",
                fontWeight: 700,
                color: C.dark,
                lineHeight: 1.12,
                maxWidth: 420,
              }}
            >
              Everything Your Garden{" "}
              <em style={{ color: C.green, fontStyle: "italic" }}>Needs</em>
            </motion.h2>
          </div>

          <Link
            href="/services"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              border: `1.5px solid ${C.sand}`,
              borderRadius: 99,
              padding: "12px 22px",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 14,
              fontWeight: 500,
              color: C.dark,
              textDecoration: "none",
              transition: "all 0.2s",
            }}
            className="all-services-link"
          >
            See All Services
            <svg
              width="14"
              height="14"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 24,
          }}
          className="services-grid"
        >
          {services.map((s, i) => (
            <ServiceCard key={s.title} s={s} i={i} />
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 580px) {
          .services-grid {
            grid-template-columns: 1fr !important;
          }
          section {
            padding: 64px 20px !important;
          }
        }
        .all-services-link:hover {
          border-color: #3d6b2c !important;
          color: #3d6b2c !important;
        }
      `}</style>
    </section>
  );
}
