"use client";

import { useEffect, useRef, useState } from "react";

/* ═══════════════════════════════════════════════════════
   GLOBAL STYLES — injected once into <head>
═══════════════════════════════════════════════════════ */
const GLOBAL_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Jost:wght@300;400;500;600&display=swap');

  :root {
    --green-deep:   #1a2e16;
    --green-mid:    #2e5226;
    --green-soft:   #3d6b34;
    --green-light:  #5a8f4e;
    --cream:        #f4efe4;
    --cream-dark:   #e8e0ce;
    --beige:        #d9cfb8;
    --text-dark:    #1a2010;
    --text-body:    #3d4a35;
    --text-muted:   #7a8c6e;
    --white:        #ffffff;
  }

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  .about-root { font-family: 'Jost', sans-serif; background: var(--cream); color: var(--text-body); overflow-x: hidden; }
  .playfair   { font-family: 'Playfair Display', serif; }

  /* ── Scroll reveals ── */
  .reveal        { opacity:0; transform:translateY(36px);  transition:opacity .75s cubic-bezier(.22,1,.36,1), transform .75s cubic-bezier(.22,1,.36,1); }
  .reveal-left   { opacity:0; transform:translateX(-44px); transition:opacity .75s cubic-bezier(.22,1,.36,1), transform .75s cubic-bezier(.22,1,.36,1); }
  .reveal-right  { opacity:0; transform:translateX(44px);  transition:opacity .75s cubic-bezier(.22,1,.36,1), transform .75s cubic-bezier(.22,1,.36,1); }
  .reveal.visible, .reveal-left.visible, .reveal-right.visible { opacity:1; transform:none; }

  /* ── Hero ── */
  .hero-section {
    position:relative; height:clamp(260px,35vw,380px);
    background:url('https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=1800&q=80') center/cover no-repeat;
    display:flex; align-items:center; justify-content:center;
  }
  .hero-gradient {
    position:absolute; inset:0;
    background:linear-gradient(to bottom, rgba(26,46,22,.72) 0%, rgba(26,46,22,.55) 100%);
  }

  /* ── Layout ── */
  .section-wrap { max-width:1200px; margin:0 auto; padding:0 clamp(16px,5vw,64px); }

  /* ── Pill ── */
  .pill {
    display:inline-flex; align-items:center; gap:7px;
    padding:5px 14px; border-radius:99px;
    border:1.5px solid var(--green-mid);
    font-size:.7rem; letter-spacing:.14em; text-transform:uppercase;
    font-weight:600; color:var(--green-mid); font-family:'Jost',sans-serif;
  }
  .pill-dot { width:7px; height:7px; border-radius:50%; background:var(--green-mid); }

  /* ── Image hover zoom ── */
  .img-wrap { overflow:hidden; border-radius:14px; }
  .img-wrap img { width:100%; height:100%; object-fit:cover; display:block; transition:transform .65s ease; }
  .img-wrap:hover img { transform:scale(1.06); }

  /* ── Stat strip ── */
  .stat-strip { background:var(--green-deep); }
  .stat-divider { border-left:1px solid rgba(255,255,255,.12); }
  @media(max-width:640px){ .stat-divider{ border-left:none; border-top:1px solid rgba(255,255,255,.12); } }

  /* ── Commitment cards ── */
  .commit-card {
    border-radius:18px; padding:32px 28px;
    transition:transform .35s ease, box-shadow .35s ease; cursor:default;
  }
  .commit-card:hover { transform:translateY(-8px); box-shadow:0 28px 52px rgba(26,46,22,.24); }
  .cc1 { background:var(--green-deep); }   .cc2 { background:var(--green-mid);  }
  .cc3 { background:var(--green-soft); }   .cc4 { background:#2a4a22; }
  .cc5 { background:var(--green-light); }  .cc6 { background:#3a5e32; }
  .cc7 { background:#22401e; }             .cc8 { background:#4a7040; }
  .leaf-ico { transition:transform .4s ease; }
  .commit-card:hover .leaf-ico { transform:rotate(20deg) scale(1.15); }

  /* ── Process cards ── */
  .process-step {
    border-radius:16px; background:var(--white);
    padding:28px 24px; border:1px solid var(--beige);
    transition:border-color .3s, box-shadow .3s;
  }
  .process-step:hover { border-color:var(--green-light); box-shadow:0 12px 30px rgba(61,107,52,.12); }
  .process-num { font-family:'Playfair Display',serif; font-size:3.5rem; font-weight:700; color:var(--beige); line-height:1; }

  /* ── Values ── */
  .value-item { padding:24px 0; border-bottom:1px solid var(--beige); display:flex; align-items:flex-start; gap:20px; transition:padding-left .3s; }
  .value-item:hover { padding-left:8px; }
  .value-icon-box { flex-shrink:0; width:44px; height:44px; border-radius:10px; background:var(--green-mid); display:flex; align-items:center; justify-content:center; }

  /* ── Testimonials ── */
  .testimonial-card { background:var(--white); border-radius:18px; padding:32px 28px; border:1px solid var(--beige); transition:transform .35s ease; }
  .testimonial-card:hover { transform:translateY(-6px); }
  .stars { color:#e8a020; letter-spacing:2px; font-size:1.05rem; }

  /* ── FAQ ── */
  .faq-item { border-bottom:1px solid var(--beige); }
  .faq-trigger {
    width:100%; text-align:left; padding:22px 0;
    display:flex; align-items:center; justify-content:space-between;
    background:none; border:none; cursor:pointer;
    font-family:'Jost',sans-serif; font-size:1rem; font-weight:500;
    color:var(--text-dark); gap:16px;
  }
  .faq-icon { flex-shrink:0; width:28px; height:28px; border-radius:50%; background:var(--green-mid); color:#fff; display:flex; align-items:center; justify-content:center; font-size:1.1rem; transition:transform .3s; }
  .faq-icon.open { transform:rotate(45deg); }
  .faq-body { max-height:0; overflow:hidden; transition:max-height .4s ease, padding-bottom .4s ease; padding-bottom:0; }
  .faq-body.open { max-height:320px; padding-bottom:20px; }

  /* ── CTA Band ── */
  .cta-band { background:var(--green-mid); position:relative; overflow:hidden; }
  .cta-circle { position:absolute; border-radius:50%; background:rgba(255,255,255,.04); pointer-events:none; }

  /* ── Buttons ── */
  .btn-primary {
    display:inline-flex; align-items:center; gap:8px;
    padding:13px 30px; border-radius:99px; border:none; cursor:pointer;
    font-family:'Jost',sans-serif; font-size:.92rem; font-weight:600;
    letter-spacing:.05em; transition:background .25s, transform .2s; text-decoration:none;
  }
  .btn-primary:hover { transform:translateY(-2px); }
  .btn-outline {
    display:inline-flex; align-items:center; gap:8px;
    padding:13px 30px; border-radius:99px; cursor:pointer;
    font-family:'Jost',sans-serif; font-size:.92rem; font-weight:600;
    letter-spacing:.05em; transition:transform .2s, border-color .25s;
    background:none; text-decoration:none;
  }
  .btn-outline:hover { transform:translateY(-2px); }

  /* ── Area chips ── */
  .area-chip { padding:8px 16px; border-radius:99px; background:rgba(255,255,255,.08); border:1px solid rgba(255,255,255,.15); color:rgba(255,255,255,.8); font-size:.82rem; font-weight:400; display:inline-flex; align-items:center; gap:6px; }

  /* ── Quick fact cards ── */
  .fact-card { background:#fff; border-radius:12px; padding:16px 18px; border:1px solid var(--beige); }

  /* ── Mobile overrides ── */
  @media (max-width: 900px) {
    .commitments-grid { grid-template-columns: repeat(2, 1fr) !important; }
  }
  @media (max-width: 640px) {
    .commitments-grid { grid-template-columns: 1fr !important; }
    .hero-content { padding-bottom: 48px !important; }
    .hero-content h1 { font-size: clamp(2.2rem, 10vw, 3rem) !important; }
    .hero-content p { font-size: .95rem !important; }
    .hero-badges { flex-direction: column; align-items: flex-start; }
    .hero-badges span { font-size: .72rem !important; }
    .stat-strip .section-wrap > div { grid-template-columns: 1fr 1fr !important; }
    .commit-card { padding: 24px 20px !important; }
    .process-step { padding: 22px 18px !important; }
    .value-item { gap: 14px !important; }
    .testimonial-card { padding: 24px 20px !important; }
    .fact-card { padding: 12px 14px !important; }
    .btn-primary, .btn-outline { padding: 12px 22px !important; font-size: .88rem !important; }
    .cta-band .section-wrap { padding: 0 20px !important; }
  }
`;

/* ═══════════════════════════════════════════════════════
   HOOKS
═══════════════════════════════════════════════════════ */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(
      ".reveal, .reveal-left, .reveal-right",
    );
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        }),
      { threshold: 0.1 },
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

function useInView(threshold = 0.25) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function useCounter(target, inView) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let n = 0;
    const step = Math.max(1, Math.ceil(target / 70));
    const t = setInterval(() => {
      n += step;
      if (n >= target) {
        setCount(target);
        clearInterval(t);
      } else setCount(n);
    }, 16);
    return () => clearInterval(t);
  }, [inView, target]);
  return count;
}

/* ═══════════════════════════════════════════════════════
   SMALL COMPONENTS
═══════════════════════════════════════════════════════ */
function Pill({ children }) {
  return (
    <span className="pill">
      <span className="pill-dot" />
      {children}
    </span>
  );
}

function LeafSVG({ size = 28 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      className="leaf-ico"
    >
      <path
        d="M16 3C9 3 4 8.5 4 16c0 5.5 3 10 8 12.5L16 17l4 11.5C25 26 28 21.5 28 16 28 8.5 23 3 16 3z"
        fill="rgba(255,255,255,0.25)"
        stroke="rgba(255,255,255,0.5)"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function SectionHeading({ pill, title, italic, sub, light = false }) {
  return (
    <div className="reveal" style={{ marginBottom: "52px" }}>
      <Pill>{pill}</Pill>
      <h2
        className="playfair"
        style={{
          fontSize: "clamp(2rem,4.5vw,3.2rem)",
          color: light ? "#fff" : "var(--text-dark)",
          lineHeight: 1.15,
          marginTop: "16px",
          marginBottom: sub ? "16px" : 0,
        }}
      >
        {title}{" "}
        {italic && (
          <em style={{ color: light ? "#8cc47a" : "var(--green-soft)" }}>
            {italic}
          </em>
        )}
      </h2>
      {sub && (
        <p
          style={{
            color: light ? "rgba(255,255,255,.6)" : "var(--text-muted)",
            maxWidth: "560px",
            fontWeight: 300,
            lineHeight: 1.75,
          }}
        >
          {sub}
        </p>
      )}
    </div>
  );
}

function AnimatedCounter({ target, suffix = "", override = null }) {
  const { ref, inView } = useInView(0.3);
  const count = useCounter(target, inView);
  return <div ref={ref}>{override ? override : `${count}${suffix}`}</div>;
}

function FAQ({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="faq-item">
      <button className="faq-trigger" onClick={() => setOpen((o) => !o)}>
        <span>{q}</span>
        <span className={`faq-icon${open ? " open" : ""}`}>+</span>
      </button>
      <div className={`faq-body${open ? " open" : ""}`}>
        <p
          style={{
            color: "var(--text-body)",
            fontWeight: 300,
            lineHeight: 1.75,
            fontSize: ".95rem",
          }}
        >
          {a}
        </p>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   DATA
═══════════════════════════════════════════════════════ */
const COMMITMENTS = [
  {
    num: "01",

    title: "Local Expert",
    body: "Matt has worked across Hertfordshire for over 8 years. He knows the soil, the climate, and exactly which plants and maintenance approaches thrive in this corner of England.",
  },
  {
    num: "02",

    title: "One-Man Operation",
    body: "When you book Matt, you get Matt. No call centres, no subcontractors, no strangers turning up at your gate. He arrives on time, does the job properly, and leaves your garden spotless.",
  },
  {
    num: "03",

    title: "Fully Insured",
    body: "Matt carries full public liability insurance on every job. Whether it's a routine hedge trim or a more involved tree clearance, you can have total peace of mind throughout.",
  },
  {
    num: "04",

    title: "Same-Day Free Quotes",
    body: "Matt offers no-obligation quotes usually on the same day. He'll come out, look at what needs doing, and give you a clear honest price before any work begins — no guesswork.",
  },
];

const FAQS = [
  {
    q: "Do you work throughout the year, or just in summer?",
    a: "Matt works year-round. Different seasons bring different tasks — hedge trimming, clearances, and jet washing can all be done outside of the main growing season.",
  },
  {
    q: "Are you insured?",
    a: "Yes. Matt carries full public liability insurance on all jobs. He's happy to provide a copy of the certificate on request — just ask when you get in touch.",
  },
  {
    q: "Do you take away garden waste?",
    a: "Yes. All waste generated during the job — clippings, debris, green waste — is loaded and removed by Matt as standard. No need to arrange skips or council collections.",
  },
  {
    q: "How quickly can you start?",
    a: "Matt aims to get out for a quote within 48 hours and can often schedule the work itself within a week or two of agreement, depending on current workload.",
  },
];

const COVERAGE_AREAS = [
  "St Albans",
  "Hemel Hempstead",
  "Hatfield",
  "Welwyn Garden City",
  "Harpenden",
  "Watford",
  "Borehamwood",
  "Radlett",
  "Berkhamsted",
  "Rickmansworth",
  "Stevenage",
  "Hitchin",
  "Potters Bar",
  "Cheshunt",
  "Tring",
  "Kings Langley",
];

/* ═══════════════════════════════════════════════════════
   MAIN EXPORT
═══════════════════════════════════════════════════════ */
export default function AboutPage() {
  useReveal();

  return (
    <main className="about-root">
      <style>{GLOBAL_CSS}</style>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          §1  HERO
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="hero-section">
        <div className="hero-gradient" />
        <div
          className="hero-content section-wrap"
          style={{
            position: "relative",
            zIndex: 2,
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            paddingTop: "clamp(80px,14vw,140px)",
            paddingBottom: "clamp(48px,10vw,100px)",
          }}
        >
          <p
            style={{
              color: "rgba(255,255,255,.45)",
              fontSize: ".72rem",
              letterSpacing: ".18em",
              textTransform: "uppercase",
              marginBottom: "16px",
            }}
          >
            <a href="/" style={{ color: "inherit", textDecoration: "none" }}>
              Home
            </a>{" "}
            › <span style={{ color: "rgba(255,255,255,.7)" }}>About</span>
          </p>

          <h1
            className="playfair"
            style={{
              fontSize: "clamp(2.2rem,5vw,3.8rem)",
              color: "#fff",
              lineHeight: 1.1,
              fontWeight: 700,
            }}
          >
            About Matt&apos;s <em style={{ color: "#8cc47a" }}>Gardens</em>
          </h1>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          §2  STATS STRIP
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="stat-strip">
        <div className="section-wrap">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
            }}
          >
            {[
              { target: 200, suffix: "+", label: "Happy Customers" },
              { target: 8, suffix: " yrs", label: "In the Trade" },
              { target: 100, suffix: "%", label: "5-Star Reviews" },
              { target: 0, override: "Same Day", label: "Quotes Available" },
            ].map((s, i) => (
              <div
                key={i}
                className={i > 0 ? "stat-divider" : ""}
                style={{
                  padding: "clamp(22px,4vw,44px) clamp(10px,2vw,20px)",
                  textAlign: "center",
                }}
              >
                <p
                  className="playfair"
                  style={{
                    fontSize: "clamp(1.9rem,3.8vw,3rem)",
                    color: "#fff",
                    fontWeight: 700,
                  }}
                >
                  <AnimatedCounter
                    target={s.target}
                    suffix={s.suffix}
                    override={s.override}
                  />
                </p>
                <p
                  style={{
                    fontSize: ".7rem",
                    letterSpacing: ".14em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,.42)",
                    marginTop: "6px",
                  }}
                >
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          §3  OUR STORY
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section style={{ padding: "clamp(48px,8vw,96px) 0" }}>
        <div className="section-wrap">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
              gap: "clamp(36px,6vw,88px)",
              alignItems: "center",
            }}
          >
            {/* Images grid */}
            <div
              className="reveal-left"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "12px",
              }}
            >
              <div
                className="img-wrap"
                style={{
                  gridColumn: "span 2",
                  height: "clamp(200px,26vw,300px)",
                }}
              >
                <img
                  src="https://c8.alamy.com/comp/2FN98R6/a-large-8-ft-overfilled-yellow-skip-used-for-garden-clearance-and-debris-removal-full-of-garden-waste-in-a-garden-in-surrey-south-east-england-2FN98R6.jpg"
                  alt="Garden in full bloom"
                  loading="lazy"
                />
              </div>
              <div
                className="img-wrap"
                style={{ height: "clamp(140px,17vw,200px)" }}
              >
                <img
                  src="https://t4.ftcdn.net/jpg/19/17/39/77/360_F_1917397794_rlNHU7LBU6A2clkzBjmsrf4kVCqNR4HF.jpg"
                  alt="Hedge trimming"
                  loading="lazy"
                />
              </div>
              <div
                style={{
                  borderRadius: "14px",
                  background: "var(--green-mid)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "clamp(140px,17vw,200px)",
                  gap: "6px",
                }}
              >
                <p
                  className="playfair"
                  style={{
                    fontSize: "clamp(2rem,3.5vw,2.8rem)",
                    color: "#fff",
                    fontWeight: 700,
                  }}
                >
                  200<span style={{ color: "#8cc47a" }}>+</span>
                </p>
                <p
                  style={{
                    fontSize: ".68rem",
                    letterSpacing: ".14em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,.5)",
                  }}
                >
                  Happy Customers
                </p>
              </div>
            </div>

            {/* Story copy */}
            <div className="reveal-right">
              <Pill>Our Story</Pill>
              <h2
                className="playfair"
                style={{
                  fontSize: "clamp(1.5rem,2.8vw,2.2rem)",
                  color: "var(--text-dark)",
                  lineHeight: 1.2,
                  margin: "14px 0 18px",
                }}
              >
                Keeping Hertfordshire&apos;s Gardens{" "}
                <em style={{ color: "var(--green-soft)" }}>
                  Looking Their Best
                </em>
              </h2>

              <p
                style={{
                  color: "var(--text-body)",
                  fontWeight: 300,
                  lineHeight: 1.75,
                  marginBottom: "14px",
                  fontSize: ".95rem",
                }}
              >
                Hi, I&apos;m Matt — a one-man gardening operation based in
                Hertfordshire since 2016. No subcontractors, no call centres.
                Just me, showing up on time and doing the job properly.
              </p>
              <p
                style={{
                  color: "var(--text-body)",
                  fontWeight: 300,
                  lineHeight: 1.75,
                  marginBottom: "28px",
                  fontSize: ".95rem",
                }}
              >
                Every customer deals directly with me, and every job carries my
                personal guarantee.
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
                <a
                  href="/contact"
                  className="btn-primary"
                  style={{ background: "var(--green-mid)", color: "#fff" }}
                >
                  Get a Free Quote
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M2 7h10M8 3l4 4-4 4" />
                  </svg>
                </a>
                <a
                  href="/services"
                  className="btn-outline"
                  style={{
                    border: "1.5px solid var(--green-mid)",
                    color: "var(--green-mid)",
                  }}
                >
                  View Services
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          §5  WHY CHOOSE MATT — 8 commitment cards
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section style={{ padding: "clamp(64px,11vw,130px) 0" }}>
        <div className="section-wrap">
          <SectionHeading
            pill="Why Matt"
            title="Our Commitment to"
            italic="Excellence"
            sub="Four reasons why Hertfordshire homeowners trust Matt's Gardens with their outdoor spaces — and keep coming back year after year."
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "16px",
            }}
            className="commitments-grid"
          >
            {COMMITMENTS.map((c, i) => (
              <div
                key={c.num}
                className={`commit-card cc${i + 1} reveal`}
                style={{ transitionDelay: `${i * 45}ms` }}
              >
                <div style={{ marginBottom: "18px" }}>
                  <LeafSVG />
                </div>
                <p
                  style={{
                    fontSize: ".68rem",
                    letterSpacing: ".14em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,.3)",
                    marginBottom: "8px",
                  }}
                >
                  {c.num}
                </p>
                <h3
                  className="playfair"
                  style={{
                    fontSize: "1.2rem",
                    color: "#fff",
                    marginBottom: "12px",
                    fontWeight: 600,
                  }}
                >
                  {c.icon} {c.title}
                </h3>
                <p
                  style={{
                    color: "rgba(255,255,255,.65)",
                    fontWeight: 300,
                    lineHeight: 1.75,
                    fontSize: ".92rem",
                  }}
                >
                  {c.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          §9  SERVICE AREA
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section
        style={{
          background: "var(--green-mid)",
          padding: "clamp(64px,10vw,110px) 0",
        }}
      >
        <div className="section-wrap">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
              gap: "clamp(36px,5vw,72px)",
              alignItems: "center",
            }}
          >
            <div className="reveal-left">
              <Pill>Service Area</Pill>
              <h2
                className="playfair"
                style={{
                  fontSize: "clamp(1.9rem,3.5vw,2.8rem)",
                  color: "#fff",
                  lineHeight: 1.2,
                  margin: "18px 0 18px",
                }}
              >
                Serving Hertfordshire{" "}
                <em style={{ color: "#8cc47a" }}>&amp; Surrounding Areas</em>
              </h2>
              <p
                style={{
                  color: "rgba(255,255,255,.62)",
                  fontWeight: 300,
                  lineHeight: 1.78,
                  marginBottom: "28px",
                }}
              >
                Matt covers a wide area across Hertfordshire and surrounding
                boroughs. If you&apos;re unsure whether he covers your postcode,
                just get in touch — he&apos;ll let you know straightaway without
                wasting your time.
              </p>
              <a
                href="/contact"
                className="btn-primary"
                style={{ background: "#fff", color: "var(--green-deep)" }}
              >
                Check Your Area
              </a>
            </div>

            <div className="reveal-right">
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                {COVERAGE_AREAS.map((a) => (
                  <span key={a} className="area-chip">
                    <span
                      style={{
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        background: "#8cc47a",
                        flexShrink: 0,
                      }}
                    />
                    {a}
                  </span>
                ))}
              </div>
              <p
                style={{
                  color: "rgba(255,255,255,.35)",
                  fontSize: ".78rem",
                  marginTop: "18px",
                }}
              >
                …and many more. Don&apos;t see your town? Just ask.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          §10  FAQ
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section style={{ padding: "clamp(48px,8vw,96px) 0" }}>
        <div className="section-wrap" style={{ maxWidth: "640px" }}>
          <SectionHeading
            pill="FAQs"
            title="Common Questions"
            italic="Answered"
            sub="Everything you might want to know before getting in touch — answered honestly."
          />

          <div className="reveal">
            {FAQS.map((f, i) => (
              <FAQ key={i} q={f.q} a={f.a} />
            ))}
          </div>

          <div
            className="reveal"
            style={{ marginTop: "44px", textAlign: "center" }}
          >
            <p
              style={{
                color: "var(--text-muted)",
                marginBottom: "18px",
                fontWeight: 300,
              }}
            >
              Didn&apos;t find the answer you were looking for?
            </p>
            <a
              href="/contact"
              className="btn-primary"
              style={{ background: "var(--green-mid)", color: "#fff" }}
            >
              Ask Matt Directly
            </a>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          §11  CTA BAND
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section
        className="cta-band"
        style={{ padding: "clamp(72px,12vw,140px) 0" }}
      >
        {/* Decorative blobs */}
        <div
          className="cta-circle"
          style={{
            width: "460px",
            height: "460px",
            top: "-160px",
            right: "-100px",
          }}
        />
        <div
          className="cta-circle"
          style={{
            width: "280px",
            height: "280px",
            bottom: "-110px",
            left: "4%",
          }}
        />
        <div
          className="cta-circle"
          style={{ width: "180px", height: "180px", top: "25%", left: "28%" }}
        />

        <div
          className="section-wrap"
          style={{
            position: "relative",
            zIndex: 2,
            textAlign: "center",
            maxWidth: "780px",
          }}
        >
          <div className="reveal">
            <p style={{ fontSize: "1.5rem", marginBottom: "10px" }}>✦</p>
            <h2
              className="playfair"
              style={{
                fontSize: "clamp(2rem,4.8vw,3.6rem)",
                color: "#fff",
                lineHeight: 1.12,
                marginBottom: "20px",
              }}
            >
              Ready to Transform Your Garden?
            </h2>
            <p
              style={{
                color: "rgba(255,255,255,.62)",
                fontWeight: 300,
                lineHeight: 1.78,
                marginBottom: "40px",
                fontSize: "1.05rem",
              }}
            >
              Get in touch today for a free, no-obligation quote. Matt will come
              out, look at what needs doing, and give you an honest price —
              usually the same day. No pushy sales tactics, no hidden costs, no
              surprises.
            </p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "14px",
                justifyContent: "center",
              }}
            >
              <a
                href="/contact"
                className="btn-primary"
                style={{
                  background: "var(--cream)",
                  color: "var(--green-deep)",
                  fontSize: "1rem",
                }}
              >
                Book a Free Visit
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M2 7h10M8 3l4 4-4 4" />
                </svg>
              </a>
              <a
                href="tel:+441234567890"
                className="btn-outline"
                style={{
                  border: "2px solid rgba(255,255,255,.38)",
                  color: "#fff",
                  fontSize: "1rem",
                }}
              >
                📞 01234 567 890
              </a>
            </div>

            {/* Bottom trust row */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "22px",
                marginTop: "44px",
              }}
            >
              {[
                "No Obligation",
                "Same-Day Response",
                "Fully Insured",
                "Hertfordshire Based",
                "Waste Removed",
              ].map((t) => (
                <span
                  key={t}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    color: "rgba(255,255,255,.42)",
                    fontSize: ".74rem",
                    letterSpacing: ".1em",
                    textTransform: "uppercase",
                  }}
                >
                  <span style={{ color: "#8cc47a" }}>✓</span> {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
