import React from 'react';
import { ArrowRight, BarChart3, Map } from 'lucide-react';

// Custom Eye-Leaf Logo
const BrandLogo = ({ color }: { color: string }) => (
  <svg width="32" height="32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 10C50 10 85 30 85 55C85 80 50 90 50 90C50 90 15 80 15 55C15 30 50 10 50 10Z" stroke={color} strokeWidth="4" />
    <path d="M30 55C30 55 40 40 50 40C60 40 70 55 70 55C70 55 60 70 50 70C40 70 30 55 30 55Z" stroke={color} strokeWidth="3" />
    <circle cx="50" cy="55" r="6" fill={color} />
  </svg>
);

export default function IntroHero() {
  const handleGoToDashboard = () => {
    window.location.href = "https://aiss-forest-restoration-frontend.vercel.app/";
  };

  const accentColor = "#10b981"; // Emerald Green

  return (
    <div style={{ position: "relative", width: "100%", height: "100vh", overflow: "hidden", backgroundColor: "#020c02" }}>

      {/* Upper Header */}
      <nav style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        padding: "45px 60px",
        display: "flex",
        alignItems: "center",
        zIndex: 100,
        background: "linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, transparent 100%)"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <BrandLogo color={accentColor} />
          <span style={{
            color: "white",
            fontWeight: 800,
            letterSpacing: "2.5px",
            fontSize: "1.2rem",
            fontFamily: "monospace",
            textTransform: "uppercase",
          }}>
            ForestWatch <span style={{ color: accentColor }}>AI</span>
          </span>
        </div>
      </nav>

      {/* Optimized Video Background Layer */}
      {/* Lowered the opacity of the radial gradient to let more light in */}
      <div style={{
        position: "absolute",
        inset: 0,
        zIndex: 1,
        background: "radial-gradient(circle, transparent 40%, rgba(2, 12, 2, 0.6) 100%)"
      }} />

      <video
        src="/video/SylvaAI.mp4"
        autoPlay muted loop playsInline
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: 0.75, // Increased from 0.45 for much better visibility
          filter: "brightness(0.9) contrast(1.1)" // Subtle boost to make the forest pop
        }}
      />

      {/* Center Hero Section */}
      <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        textAlign: "center",
        width: "100%",
        zIndex: 10
      }}>
        <h1 style={{
          color: "white",
          fontSize: "3.8rem",
          fontWeight: 200,
          letterSpacing: "-0.03em",
          marginBottom: "2.5rem",
          lineHeight: 1.1,
          textShadow: "0px 4px 20px rgba(0,0,0,0.6)" // Added shadow to keep text sharp on lighter background
        }}>
          See beyond the <span style={{ fontWeight: 600 }}>trees.</span>
        </h1>

        <button
          onClick={handleGoToDashboard}
          style={{
            backgroundColor: "white",
            color: "black",
            border: "none",
            padding: "20px 50px",
            fontSize: "0.9rem",
            fontWeight: 800,
            cursor: "pointer",
            borderRadius: "1px",
            display: "inline-flex",
            alignItems: "center",
            gap: "15px",
            transition: "all 0.3s ease",
            textTransform: "uppercase",
            letterSpacing: "3px",
            boxShadow: "0 10px 40px rgba(0,0,0,0.4)"
          }}
          onMouseOver={(e) => { e.currentTarget.style.backgroundColor = accentColor; e.currentTarget.style.color = "white"; }}
          onMouseOut={(e) => { e.currentTarget.style.backgroundColor = "white"; e.currentTarget.style.color = "black"; }}
        >
          Explore Dashboard
          <ArrowRight size={20} />
        </button>
      </div>

      {/* Lower Left Corner: Data Legends */}
      <div style={{
        position: "absolute",
        bottom: "50px",
        left: "60px",
        zIndex: 10,
        display: "flex",
        flexDirection: "column",
        gap: "12px"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "rgba(255,255,255,0.9)" }}>
          <BarChart3 size={16} color={accentColor} />
          <span style={{ fontFamily: "monospace", fontSize: "0.75rem", letterSpacing: "1px", textShadow: "1px 1px 4px rgba(0,0,0,0.8)" }}>
            GFW TIMESERIES <span style={{ opacity: 0.6 }}>[2001—2024]</span>
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "rgba(255,255,255,0.9)" }}>
          <Map size={16} color={accentColor} />
          <span style={{ fontFamily: "monospace", fontSize: "0.75rem", letterSpacing: "1px", textShadow: "1px 1px 4px rgba(0,0,0,0.8)" }}>
            LANDMARK <span style={{ opacity: 0.6 }}>INDIGENOUS TERRITORIES</span>
          </span>
        </div>
      </div>
    </div>
  );
}