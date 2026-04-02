/**
 * Matt's Gardens Logo Component
 *
 * Usage:
 *   <MattsGardensLogo size={48} />
 *   <MattsGardensLogo size={120} withText />
 *
 * The logo features a stylised leaf inside a circle with the brand name.
 * Colors adapt to the current theme via CSS variables.
 */

export default function MattsGardensLogo({
  size = 48,
  withText = false,
  className = "",
}) {
  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      {/* Mark */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Matt's Gardens logo mark"
      >
        {/* Outer circle */}
        <circle
          cx="24"
          cy="24"
          r="22.5"
          stroke="var(--color-primary)"
          strokeWidth="2"
          fill="var(--color-primary)"
          fillOpacity="0.08"
        />

        {/* Leaf body */}
        <path
          d="M24 37 C24 37 14 29 14 20 C14 14.5 18.5 10.5 24 10.5 C29.5 10.5 34 14.5 34 20 C34 29 24 37 24 37Z"
          fill="var(--color-primary)"
          fillOpacity="0.9"
        />

        {/* Leaf centre vein */}
        <path
          d="M24 14.5 C24 14.5 19.5 21 24 31"
          stroke="var(--color-base-100)"
          strokeWidth="1.4"
          strokeLinecap="round"
          opacity="0.7"
        />

        {/* Left vein */}
        <path
          d="M24 19 C22 20.5 19 21 17 21.5"
          stroke="var(--color-base-100)"
          strokeWidth="0.9"
          strokeLinecap="round"
          opacity="0.45"
        />

        {/* Right vein */}
        <path
          d="M24 22.5 C26 24 29 24 31 24.5"
          stroke="var(--color-base-100)"
          strokeWidth="0.9"
          strokeLinecap="round"
          opacity="0.45"
        />

        {/* Stem */}
        <line
          x1="24"
          y1="37"
          x2="24"
          y2="42"
          stroke="var(--color-primary)"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* Stem curve hint */}
        <path
          d="M24 39.5 C22 40.5 21 42 20 43"
          stroke="var(--color-primary)"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.5"
        />
      </svg>

      {/* Wordmark */}
      {withText && (
        <div className="flex flex-col">
          <span
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: size * 0.35,
              fontWeight: 700,
              letterSpacing: "-0.01em",
              lineHeight: 1.1,
              color: "var(--color-base-content)",
            }}
          >
            Matt's Gardens
          </span>
          <span
            style={{
              fontFamily: "'DM Sans', system-ui, sans-serif",
              fontSize: size * 0.17,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--color-base-content)",
              opacity: 0.4,
              lineHeight: 1.4,
            }}
          >
            Hertfordshire
          </span>
        </div>
      )}
    </div>
  );
}
