export function SolarIcon({ className = '' }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {/* Sun center */}
      <circle cx="24" cy="24" r="8" fill="currentColor" opacity="0.9" />
      {/* Rays */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
        <line
          key={angle}
          x1="24"
          y1="24"
          x2={24 + 16 * Math.cos((angle * Math.PI) / 180)}
          y2={24 + 16 * Math.sin((angle * Math.PI) / 180)}
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity="0.7"
        />
      ))}
    </svg>
  )
}
