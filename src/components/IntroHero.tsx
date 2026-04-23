import React from 'react';
import { ArrowRight, BarChart3, Map } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Custom Eye-Leaf Logo
const BrandLogo = ({ color }: { color: string }) => (
  <svg width="32" height="32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 10C50 10 85 30 85 55C85 80 50 90 50 90C50 90 15 80 15 55C15 30 50 10 50 10Z" stroke={color} strokeWidth="4" />
    <path d="M30 55C30 55 40 40 50 40C60 40 70 55 70 55C70 55 60 70 50 70C40 70 30 55 30 55Z" stroke={color} strokeWidth="3" />
    <circle cx="50" cy="55" r="6" fill={color} />
  </svg>
);

export default function IntroHero() {
  const navigate = useNavigate();

  const handleGoToDashboard = () => {
    navigate('/overview');
  };

  const accentColor = "#10b981";

  return (
    <div style={{ position: "relative", width: "100%", height: "100vh", overflow: "hidden", backgroundColor: "#020c02" }}>

      {/* Header */}
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
            textTransform: "uppercase"
          }}>
            ForestWatch <span style={{ color: accentColor }}>AI</span>
          </span>
        </div>
      </nav>

      {/* Overlay */}
      <div style={{
        position: "absolute",
        inset: 0,
        zIndex: 1,
        background: "radial-gradient(circle, transparent 40%, rgba(2, 12, 2, 0.6) 100%)"
      }} />

      {/* Background video */}
      <video
        src="/video/SylvaAI.mp4"
        autoPlay
        muted
        loop
        playsInline
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: 0.75,
          filter: "brightness(0.9) contrast(1.1)"
        }}
      />

      {/* HERO CONTENT */}
      <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        textAlign: "center",
        width: "100%",
        padding: "0 20px",
        zIndex: 10
      }}>

        {/* TITLE */}
        <h1 style={{
          color: "white",
          fontSize: "clamp(2.2rem, 6vw, 3.8rem)",
          fontWeight: 200,
          letterSpacing: "-0.03em",
          marginBottom: "1.5rem",
          lineHeight: 1.1,
          textShadow: "0px 4px 20px rgba(0,0,0,0.6)"
        }}>
          See beyond the <span style={{ fontWeight: 600 }}>trees.</span>
        </h1>

        {/* 🔥 NEW HINT TEXT (THIS IS WHAT YOU WANTED) */}
        <p style={{
          color: "rgba(255,255,255,0.8)",
          fontSize: "0.95rem",
          marginBottom: "2rem",
          letterSpacing: "0.5px",
          maxWidth: "500px",
          marginLeft: "auto",
          marginRight: "auto",
          lineHeight: 1.5
        }}>
          Explore forest data or view live satellite imagery.
        </p>

        {/* BUTTONS */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "15px"
        }}>

          {/* Dashboard */}
          <button
            onClick={handleGoToDashboard}
            style={{
              backgroundColor: "white",
              color: "black",
              border: "none",
              padding: "14px 28px",
              fontSize: "0.85rem",
              fontWeight: 800,
              cursor: "pointer",
              letterSpacing: "2px",
              textTransform: "uppercase",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.4)"
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = accentColor;
              e.currentTarget.style.color = "white";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = "white";
              e.currentTarget.style.color = "black";
            }}
          >
            Explore Dashboard
            <ArrowRight size={18} />
          </button>

          {/* Satellite */}
          <button
            onClick={() => navigate('/curimana')}
            style={{
              backgroundColor: "transparent",
              color: "white",
              border: "1px solid rgba(255,255,255,0.6)",
              padding: "14px 28px",
              fontSize: "0.85rem",
              fontWeight: 700,
              cursor: "pointer",
              letterSpacing: "2px",
              textTransform: "uppercase",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              backdropFilter: "blur(6px)"
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.1)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
            }}
          >
            Live Satellite
            <Map size={18} />
          </button>

        </div>
      </div>

      {/* LEGEND */}
      <div style={{
        position: "absolute",
        bottom: "20px",
        left: "20px",
        right: "20px",
        zIndex: 10,
        display: "flex",
        flexDirection: "column",
        gap: "10px"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "rgba(255,255,255,0.9)" }}>
          <BarChart3 size={16} color={accentColor} />
          <span style={{ fontFamily: "monospace", fontSize: "0.7rem" }}>
            Global Forest Watch (2001–2024)
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "rgba(255,255,255,0.9)" }}>
          <Map size={16} color={accentColor} />
          <span style={{ fontFamily: "monospace", fontSize: "0.7rem" }}>
            Sentinel-2 NDVI Monitoring
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "rgba(255,255,255,0.9)" }}>
          <Map size={16} color={accentColor} />
          <span style={{ fontFamily: "monospace", fontSize: "0.7rem" }}>
            LANDMARK Indigenous Territories
          </span>
        </div>
      </div>

    </div>
  );
}