"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  // transparent only on home before scroll
  const isTransparent = isHome && !scrolled;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          backgroundColor: isTransparent ? "transparent" : "#ffffff",
          borderBottom: isTransparent
            ? "1px solid rgba(255,255,255,0.12)"
            : "1px solid #e8e2d9",
          boxShadow:
            scrolled && !isTransparent ? "0 2px 20px rgba(0,0,0,0.06)" : "none",
          transition:
            "background-color 0.4s ease, border-color 0.4s ease, box-shadow 0.3s ease",
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "0 clamp(16px,4vw,40px)",
            height: 64,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              textDecoration: "none",
            }}
          >
            <div
              style={{
                width: 38,
                height: 38,
                borderRadius: "50%",
                background: isTransparent
                  ? "rgba(255,255,255,0.15)"
                  : "#3d6b2c",
                border: isTransparent
                  ? "1px solid rgba(255,255,255,0.3)"
                  : "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: isTransparent
                  ? "none"
                  : "0 2px 8px rgba(61,107,44,0.3)",
                transition: "all 0.4s ease",
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
                  stroke={isTransparent ? "rgba(255,255,255,0.5)" : "#3d6b2c"}
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
                  fontWeight: 700,
                  fontSize: "clamp(14px,2.5vw,17px)",
                  color: isTransparent ? "#ffffff" : "#1a2e12",
                  letterSpacing: "-0.01em",
                  lineHeight: 1.1,
                  transition: "color 0.4s ease",
                  whiteSpace: "nowrap",
                }}
              >
                Matt's Gardens
              </div>
              <div
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 9.5,
                  color: isTransparent ? "rgba(255,255,255,0.55)" : "#7a8c6e",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  marginTop: 1,
                  transition: "color 0.4s ease",
                }}
              >
                Hertfordshire
              </div>
            </div>
          </Link>

          {/* Desktop Links */}
          <div
            style={{ display: "flex", alignItems: "center", gap: 32 }}
            className="desktop-nav"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 14,
                  fontWeight: 500,
                  color: isTransparent ? "rgba(255,255,255,0.85)" : "#3a4a30",
                  textDecoration: "none",
                  position: "relative",
                  transition: "color 0.4s ease",
                }}
                className="nav-link"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA + Hamburger */}
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <Link
              href="/contact"
              className="nav-cta"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 7,
                background: isTransparent
                  ? "rgba(255,255,255,0.15)"
                  : "#3d6b2c",
                border: isTransparent
                  ? "1px solid rgba(255,255,255,0.35)"
                  : "none",
                color: "white",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 14,
                fontWeight: 600,
                padding: "10px 20px",
                borderRadius: 99,
                textDecoration: "none",
                boxShadow: isTransparent
                  ? "none"
                  : "0 2px 12px rgba(61,107,44,0.25)",
                transition: "all 0.4s ease",
              }}
            >
              Get in Touch
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

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="hamburger-btn"
              style={{
                display: "none",
                flexDirection: "column",
                gap: 5,
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 6,
              }}
            >
              {[
                menuOpen ? { rotate: 45, y: 6.5 } : { rotate: 0, y: 0 },
                menuOpen ? { opacity: 0 } : { opacity: 1 },
                menuOpen ? { rotate: -45, y: -6.5 } : { rotate: 0, y: 0 },
              ].map((anim, i) => (
                <motion.span
                  key={i}
                  animate={anim}
                  style={{
                    display: "block",
                    width: 22,
                    height: 2,
                    background: isTransparent ? "#ffffff" : "#3a4a30",
                    borderRadius: 4,
                    transition: "background 0.4s ease",
                  }}
                />
              ))}
            </button>
          </div>
        </div>

        <style jsx>{`
          @media (max-width: 768px) {
            .desktop-nav { display: none !important; }
            .nav-cta { display: none !important; }
            .hamburger-btn { display: flex !important; }
          }
          @media (min-width: 769px) {
            .hamburger-btn { display: none !important; }
          }
          .nav-link:hover { color: #3d6b2c !important; }
          .nav-cta:hover {
            background: #2f5422 !important;
            transform: translateY(-1px);
            box-shadow: 0 6px 20px rgba(61,107,44,0.35) !important;
          }
        `}</style>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22 }}
            style={{
              position: "fixed",
              top: 64,
              left: 0,
              right: 0,
              zIndex: 40,
              background: "#fff",
              borderBottom: "1px solid #e8e2d9",
              boxShadow: "0 8px 30px rgba(0,0,0,0.08)",
            }}
          >
            <div
              style={{
                maxWidth: 1280,
                margin: "0 auto",
                padding: "12px 20px 20px",
              }}
            >
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "14px 0",
                      color: "#3a4a30",
                      fontFamily: "'DM Sans', sans-serif",
                      fontWeight: 500,
                      fontSize: 16,
                      borderBottom: "1px solid #f0ece5",
                      textDecoration: "none",
                    }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: 14,
                  background: "#3d6b2c",
                  color: "white",
                  padding: "14px",
                  borderRadius: 99,
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 600,
                  fontSize: 15,
                  textDecoration: "none",
                }}
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
