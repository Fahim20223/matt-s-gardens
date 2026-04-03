"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FcPhone, FcVoicemail } from "react-icons/fc";
import { RiMapPin3Fill } from "react-icons/ri";

export default function Footer() {
  return (
    <footer style={{ background: "#1a2e12", color: "white" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "64px 40px 0" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: 40,
            paddingBottom: 48,
            borderBottom: "1px solid rgba(255,255,255,0.08)",
          }}
          className="footer-grid"
        >
          {/* Brand */}
          <div>
            <Link
              href="/"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                textDecoration: "none",
                marginBottom: 16,
              }}
            >
              <div
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: "50%",
                  background: "#3d6b2c",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  style={{ width: 20, height: 20 }}
                >
                  <path
                    d="M12 21C12 21 5 15.5 5 9.5C5 6.5 8.5 4 12 4C15.5 4 19 6.5 19 9.5C19 15.5 12 21 12 21Z"
                    fill="white"
                    fillOpacity="0.95"
                  />
                  <path
                    d="M12 7C12 7 9 10.5 12 16"
                    stroke="#3d6b2c"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                  />
                  <line
                    x1="12"
                    y1="21"
                    x2="12"
                    y2="23.5"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 17,
                    fontWeight: 700,
                    color: "white",
                    lineHeight: 1.1,
                  }}
                >
                  Matt's Gardens
                </div>
                <div
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 9.5,
                    color: "rgba(255,255,255,0.4)",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    marginTop: 1,
                  }}
                >
                  Hertfordshire
                </div>
              </div>
            </Link>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 14,
                color: "rgba(255,255,255,0.5)",
                lineHeight: 1.7,
                maxWidth: 260,
                marginBottom: 20,
              }}
            >
              Reliable, friendly gardening services across Hertfordshire. One
              man, one van, and a genuine love for the job.
            </p>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 7,
                background: "rgba(143,206,106,0.12)",
                border: "1px solid rgba(143,206,106,0.2)",
                borderRadius: 99,
                padding: "7px 14px",
              }}
            >
              <span
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  background: "#8fce6a",
                  display: "block",
                }}
              />
              <span
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 12,
                  fontWeight: 600,
                  color: "#8fce6a",
                }}
              >
                Taking bookings now
              </span>
            </div>
          </div>

          {/* Pages */}
          <div>
            <h4
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 11,
                fontWeight: 700,
                color: "rgba(255,255,255,0.4)",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                marginBottom: 18,
              }}
            >
              Pages
            </h4>
            {["Home", "About", "Services", "Gallery", "Contact"].map((page) => (
              <Link
                key={page}
                href={`/${page === "Home" ? "" : page.toLowerCase()}`}
                style={{
                  display: "block",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 14.5,
                  color: "rgba(255,255,255,0.55)",
                  textDecoration: "none",
                  marginBottom: 10,
                  transition: "color 0.2s ease",
                }}
                className="footer-link"
              >
                {page}
              </Link>
            ))}
          </div>

          {/* Services */}
          <div>
            <h4
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 11,
                fontWeight: 700,
                color: "rgba(255,255,255,0.4)",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                marginBottom: 18,
              }}
            >
              Services
            </h4>
            {[
              "Hedge Trimming",
              "Garden Clearance",
              "Small Tree Work",
              "Jet Washing",
            ].map((s) => (
              <Link
                key={s}
                href="/services"
                style={{
                  display: "block",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 14.5,
                  color: "rgba(255,255,255,0.55)",
                  textDecoration: "none",
                  marginBottom: 10,
                  transition: "color 0.2s ease",
                }}
                className="footer-link"
              >
                {s}
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 11,
                fontWeight: 700,
                color: "rgba(255,255,255,0.4)",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                marginBottom: 18,
              }}
            >
              Contact
            </h4>
            {[
              { icon: <FcPhone />, val: "07700 000 000" },
              { icon: <FcVoicemail />, val: "hello@mattsgardens.co.uk" },
              { icon: <RiMapPin3Fill />, val: "Hertfordshire, UK" },
            ].map((c) => (
              <div
                key={c.val}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 8,
                  marginBottom: 12,
                }}
              >
                <span style={{ fontSize: 13, marginTop: 1 }}>{c.icon}</span>
                <span
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 14,
                    color: "rgba(255,255,255,0.55)",
                    lineHeight: 1.5,
                  }}
                >
                  {c.val}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "20px 0",
            flexWrap: "wrap",
            gap: 10,
          }}
        >
          <span
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 12.5,
              color: "rgba(255,255,255,0.3)",
            }}
          >
            © {new Date().getFullYear()} Matt's Gardens. All rights reserved.
          </span>
          <span
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 12.5,
              color: "rgba(255,255,255,0.2)",
            }}
          >
            Hertfordshire, UK · Friendly Local Gardener
          </span>
        </div>
      </div>
      <style jsx>{`
        .footer-link:hover {
          color: #8fce6a !important;
        }
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 540px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
          footer > div {
            padding: 48px 20px 0 !important;
          }
        }
      `}</style>
    </footer>
  );
}
