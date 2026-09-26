export function FootballBall({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      aria-hidden="true"
      fill="none"
    >
      <circle cx="32" cy="32" r="30" fill="#f4f1e8" />
      <circle cx="32" cy="32" r="30" stroke="#1a1a1a" strokeWidth="2" />
      <path
        fill="#1a1a1a"
        d="M32 22.5 38.2 27l-2.4 7.3H28.2L25.8 27 32 22.5Z"
      />
      <path
        stroke="#1a1a1a"
        strokeWidth="1.8"
        strokeLinejoin="round"
        d="M32 22.5 25.8 27 18 24.2M32 22.5 38.2 27 46 24.2M18 24.2 14 32l4.8 9.2M46 24.2 50 32l-4.8 9.2M28.2 34.3 22.8 41.2 32 47.2 41.2 41.2 35.8 34.3"
      />
    </svg>
  )
}
