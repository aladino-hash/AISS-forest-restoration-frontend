export const SylvaLogo = ({ size = 40, color = "white" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ transition: 'all 0.3s ease' }}
  >
    {/* Outer Leaf Shape */}
    <path
      d="M50 10C50 10 90 30 90 60C90 85 70 95 50 95C30 95 10 85 10 60C10 30 50 10 50 10Z"
      stroke={color}
      strokeWidth="2.5"
    />

    {/* Neural/Circuit Veins */}
    <path d="M50 95V40" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <circle cx="50" cy="40" r="3" fill={color} />

    <path d="M50 75L75 55" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <circle cx="75" cy="55" r="2.5" fill={color} />

    <path d="M50 65L25 45" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <circle cx="25" cy="45" r="2.5" fill={color} />
  </svg>
);