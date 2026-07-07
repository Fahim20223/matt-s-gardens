"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const C = {
  dark: "#1a2e12",
  white: "#ffffff",
};

export default function CTABanner() {
  return (
    <section style={{ background: C.white, padding: "80px 40px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{
            background:
              "linear-gradient(135deg, #1a2e12 0%, #2a4a1c 60%, #3d6b2c 100%)",
            borderRadius: 28,
            padding: "72px 60px",
            position: "relative",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 40,
            flexWrap: "wrap",
          }}
          className="cta-inner"
        >
          {/* Decorative circles */}
          <div
            style={{
              position: "absolute",
              top: -60,
              right: -60,
              width: 280,
              height: 280,
              borderRadius: "50%",
              border: "1px solid rgba(255,255,255,0.06)",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: -80,
              left: 120,
              width: 200,
              height: 200,
              borderRadius: "50%",
              border: "1px solid rgba(255,255,255,0.05)",
              pointerEvents: "none",
            }}
          />

          {/* Text */}
          <div style={{ position: "relative", maxWidth: 580 }}>
            <div
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 12,
                fontWeight: 600,
                color: "rgba(255,255,255,0.5)",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                marginBottom: 14,
              }}
            >
              Ready to Get Started?
            </div>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                fontWeight: 700,
                color: C.white,
                lineHeight: 1.15,
                marginBottom: 14,
              }}
            >
              Book a Free Quote No Obligation, No Hassle
            </h2>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 15.5,
                color: "rgba(255,255,255,0.6)",
                lineHeight: 1.65,
              }}
            >
              Drop Matt a message, give him a call, or fill in the form. He'll
              come and have a look, give you a fair price, and you decide from
              there.
            </p>
          </div>

          {/* Buttons */}
          <div
            style={{
              display: "flex",
              gap: 14,
              flexWrap: "wrap",
              position: "relative",
            }}
          >
            <Link
              href="/contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: C.white,
                color: C.dark,
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 15,
                fontWeight: 700,
                padding: "15px 28px",
                borderRadius: 99,
                textDecoration: "none",
                boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
                transition: "all 0.22s ease",
                whiteSpace: "nowrap",
              }}
              className="cta-primary"
            >
              Get a Free Quote
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

            <a
              href="tel:+441234567890"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "rgba(255,255,255,0.1)",
                border: "1.5px solid rgba(255,255,255,0.22)",
                color: C.white,
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 15,
                fontWeight: 600,
                padding: "15px 28px",
                borderRadius: 99,
                textDecoration: "none",
                transition: "all 0.22s ease",
                whiteSpace: "nowrap",
              }}
              className="cta-secondary"
            >
              <svg
                width="16"
                height="16"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 6.75z"
                />
              </svg>
              01234 567 890
            </a>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .cta-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3) !important;
        }
        .cta-secondary:hover {
          background: rgba(255, 255, 255, 0.16) !important;
          transform: translateY(-2px);
        }
        @media (max-width: 768px) {
          .cta-inner {
            padding: 48px 28px !important;
            flex-direction: column;
          }
          section {
            padding: 48px 20px !important;
          }
        }
      `}</style>
    </section>
  );
}
