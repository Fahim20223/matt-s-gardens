"use client";
import { useState, useRef, useCallback, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Garden Clearance",
    location: "St Albans",
    service: "Garden Clearance",
    before: "/images/Before_1.jpg",
    after: "/images/After_1.jpg",
    beforeFallback:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=900&q=85",
    afterFallback:
      "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=900&q=85",
  },
  {
    id: 2,
    title: "Hedge Trimming",
    location: "Welwyn Garden City",
    service: "Hedge Trimming",
    before: "/images/Before_2.jpg",
    after: "/images/After_2.jpg",
    beforeFallback:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=85",
    afterFallback:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=900&q=85",
  },
  {
    id: 3,
    title: "Patio Jet Wash",
    location: "Stevenage",
    service: "Jet Washing",
    before: "/images/Before_3.jpg",
    after: "/images/After_3.jpg",
    beforeFallback:
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=900&q=85",
    afterFallback:
      "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=900&q=85",
  },
];

const galleryImages = [
  {
    src: "https://grdcentre.com/assets/powerhouse/uploads/images/maintenence3.jpg",
    label: "Garden Maintenance",
    service: "Maintenance",
  },
  {
    src: "https://images.ctfassets.net/5kq8dse7hipf/4PHD3b9MqaxeSom0gjOeJE/463ba7f65610e41e259ed8028943641d/garden-clearance-cost-featured.jpeg",
    label: "Garden Clearance",
    service: "Clearance",
  },
  {
    src: "https://t3.ftcdn.net/jpg/05/34/34/92/240_F_534349268_XLErmUsNRNWmBU2f5fBn7z29oP7CNYkW.jpg",
    label: "Hedge Trimming",
    service: "Hedges",
  },
  {
    src: "https://greenpinetreeservice.com/wp-content/uploads/2024/05/front-yard-1210x423.jpg",
    label: "Small Tree Work",
    service: "Tree Work",
  },
  {
    src: "https://assets.rhs.org.uk/05836e9f-2692-012f-b4fe-e3f22d127fa9/406e1cbd-00a0-4c5f-b268-51091954c5ea/blue-and-yellow-border.jpg?w=1200&fit=clip&fm=jpg&auto=format",
    label: "Planting",
    service: "Planting",
  },
  {
    src: "https://www.thespruce.com/thmb/gIE2azGLSJr84LCnTm-8XIbAuWs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/spring-lawn-care-2132455-09-df14429ef98948e69439952f6e7287fa.jpg",
    label: "Lawn Care",
    service: "Lawn Care",
  },
];

function Slider({ project }) {
  const [pos, setPos] = useState(50);
  const [dragging, setDragging] = useState(false);
  const [imgErrors, setImgErrors] = useState({ before: false, after: false });
  const containerRef = useRef(null);

  const update = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPos((x / rect.width) * 100);
  }, []);

  const onMouse = useCallback(
    (e) => {
      if (dragging) update(e.clientX);
    },
    [dragging, update],
  );
  const onTouch = useCallback(
    (e) => {
      if (dragging) update(e.touches[0].clientX);
    },
    [dragging, update],
  );
  const stop = useCallback(() => setDragging(false), []);

  useEffect(() => {
    if (!dragging) return;
    window.addEventListener("mousemove", onMouse);
    window.addEventListener("mouseup", stop);
    window.addEventListener("touchmove", onTouch, { passive: false });
    window.addEventListener("touchend", stop);
    return () => {
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("mouseup", stop);
      window.removeEventListener("touchmove", onTouch);
      window.removeEventListener("touchend", stop);
    };
  }, [dragging, onMouse, onTouch, stop]);

  return (
    <div
      ref={containerRef}
      onMouseMove={onMouse}
      onMouseUp={stop}
      style={{
        position: "relative",
        borderRadius: 18,
        overflow: "hidden",
        aspectRatio: "3/2",
        background: "#c8bfaf",
        userSelect: "none",
        cursor: "col-resize",
        boxShadow: "0 12px 40px rgba(0,0,0,0.15)",
      }}
    >
      {/* After image (full width base) */}
      <div style={{ position: "absolute", inset: 0 }}>
        <Image
          src={imgErrors.after ? project.afterFallback : project.after}
          alt="After"
          fill
          style={{ objectFit: "cover" }}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          onError={() => setImgErrors((p) => ({ ...p, after: true }))}
          quality={90}
        />
        <span
          style={{
            position: "absolute",
            top: 14,
            right: 14,
            background: "#3d6b2c",
            color: "white",
            borderRadius: 99,
            padding: "5px 14px",
            fontSize: 11,
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 700,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
          }}
        >
          After
        </span>
      </div>

      {/* Before image (clipped) */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          overflow: "hidden",
          width: `${pos}%`,
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            width: containerRef.current
              ? `${containerRef.current.offsetWidth}px`
              : "100vw",
          }}
        >
          <Image
            src={imgErrors.before ? project.beforeFallback : project.before}
            alt="Before"
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            onError={() => setImgErrors((p) => ({ ...p, before: true }))}
            quality={90}
          />
        </div>
        <span
          style={{
            position: "absolute",
            top: 14,
            left: 14,
            background: "rgba(0,0,0,0.6)",
            color: "white",
            borderRadius: 99,
            padding: "5px 14px",
            fontSize: 11,
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 700,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
          }}
        >
          Before
        </span>
      </div>

      {/* Divider line + handle */}
      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: `${pos}%`,
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 10,
          cursor: "col-resize",
        }}
        onMouseDown={(e) => {
          e.preventDefault();
          setDragging(true);
        }}
        onTouchStart={(e) => {
          e.preventDefault();
          setDragging(true);
        }}
      >
        {/* Line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            width: 2,
            background: "rgba(255,255,255,0.85)",
            boxShadow: "0 0 8px rgba(0,0,0,0.3)",
          }}
        />
        {/* Handle circle */}
        <div
          style={{
            width: 48,
            height: 48,
            borderRadius: "50%",
            background: "white",
            position: "relative",
            boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "2px solid rgba(255,255,255,0.9)",
          }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            style={{ width: 22, height: 22 }}
            stroke="#3d6b2c"
            strokeWidth={2.2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 9l-3 3 3 3m8-6l3 3-3 3"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function GallerySection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      style={{
        background: "#faf7f2",
        padding: "clamp(56px,9vw,100px) clamp(20px,5vw,48px)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          style={{ marginBottom: 52 }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              marginBottom: 14,
            }}
          >
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: "50%",
                background: "#eaf2e3",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg
                viewBox="0 0 20 20"
                fill="none"
                style={{ width: 16, height: 16 }}
              >
                <path
                  d="M10 17C10 17 4 12.5 4 8C4 5.5 6.7 3.5 10 3.5C13.3 3.5 16 5.5 16 8C16 12.5 10 17 10 17Z"
                  fill="#3d6b2c"
                />
              </svg>
            </div>
            <span
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 12,
                fontWeight: 600,
                color: "#3d6b2c",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
              }}
            >
              Our Work
            </span>
          </div>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.8rem,3.5vw,2.8rem)",
              fontWeight: 700,
              color: "#1a2e12",
              lineHeight: 1.15,
            }}
          >
            Real Results —{" "}
            <span style={{ color: "#3d6b2c" }}>Before &amp; After</span>
          </h2>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 15,
              color: "#7a8c6e",
              marginTop: 10,
              fontWeight: 300,
            }}
          >
            Drag the slider on each project to reveal the transformation.
          </p>
        </motion.div>

        {/* Before / After Sliders */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: 28,
            marginBottom: 72,
          }}
          className="slider-grid"
        >
          {projects.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.1 + i * 0.12 }}
            >
              <Slider project={p} />
              <div style={{ marginTop: 16, paddingLeft: 4 }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: 6,
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: 17,
                      fontWeight: 600,
                      color: "#1a2e12",
                    }}
                  >
                    {p.title}
                  </p>
                  <span
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 11,
                      fontWeight: 600,
                      color: "#3d6b2c",
                      background: "#eaf2e3",
                      padding: "3px 10px",
                      borderRadius: 99,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                    }}
                  >
                    {p.service}
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 5,
                    marginTop: 5,
                  }}
                >
                  <svg
                    viewBox="0 0 20 20"
                    fill="none"
                    style={{ width: 13, height: 13 }}
                    stroke="#8b7c6a"
                    strokeWidth={1.8}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10 11.5a3 3 0 100-6 3 3 0 000 6zM10 17.5s-6-4.5-6-9a6 6 0 1112 0c0 4.5-6 9-6 9z"
                    />
                  </svg>
                  <span
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 13,
                      color: "#8b7c6a",
                    }}
                  >
                    {p.location}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Gallery grid */}
        <div style={{ borderTop: "1px solid #ede9e1", paddingTop: 52 }}>
          <h3
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.3rem,2.5vw,1.8rem)",
              fontWeight: 700,
              color: "#1a2e12",
              marginBottom: 28,
            }}
          >
            More From the Garden
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3,1fr)",
              gap: 16,
            }}
            className="gallery-grid"
          >
            {galleryImages.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.08 + i * 0.07 }}
                style={{
                  borderRadius: 14,
                  overflow: "hidden",
                  aspectRatio: "4/3",
                  position: "relative",
                  background: "#c8bfaf",
                  cursor: "pointer",
                }}
                className="gallery-img"
              >
                <Image
                  src={img.src}
                  alt={img.label}
                  fill
                  style={{
                    objectFit: "cover",
                    transition: "transform 0.6s ease",
                  }}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="gallery-img-inner"
                  quality={85}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, rgba(26,46,18,0.65), transparent 55%)",
                    opacity: 0,
                    transition: "opacity 0.3s ease",
                  }}
                  className="gallery-overlay"
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: "14px 16px",
                    opacity: 0,
                    transition: "opacity 0.3s ease",
                  }}
                  className="gallery-label"
                >
                  <p
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: 15,
                      fontWeight: 600,
                      color: "white",
                      marginBottom: 2,
                    }}
                  >
                    {img.label}
                  </p>
                  <span
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 11,
                      color: "rgba(255,255,255,0.7)",
                      background: "rgba(255,255,255,0.15)",
                      padding: "2px 8px",
                      borderRadius: 99,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                    }}
                  >
                    {img.service}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .gallery-img:hover .gallery-img-inner {
          transform: scale(1.06);
        }
        .gallery-img:hover .gallery-overlay {
          opacity: 1 !important;
        }
        .gallery-img:hover .gallery-label {
          opacity: 1 !important;
        }
        @media (max-width: 900px) {
          .slider-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 540px) {
          .gallery-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
