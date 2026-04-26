import React from 'react';
import { ArrowRight, BarChart3, Map } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

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
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>

          {/* ✅ BIGGER LOGO */}
          <img
            src="/images/logo.png"
            alt="Fynos AI Logo"
            style={{
              height: "64px",   // 🔥 bigger
              width: "auto",
              display: "block"
            }}
          />

          {/* ✅ TEXT (KEPT + STYLED) */}
          <span style={{
            color: "white",
            fontWeight: 700,
            letterSpacing: "2px",
            fontSize: "1.4rem",
            fontFamily: "Inter, sans-serif",
            display: "flex",
            alignItems: "center",
            gap: "6px"
          }}>
            FYNOS <span style={{ color: "#10b981" }}>AI</span>
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

        {/* SUBTEXT */}
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

          {/* Restoration */}
          <button
            onClick={() => navigate('/restoration')}
            style={{
              backgroundColor: "transparent",
              color: "#10b981",
              border: "1px solid #10b981",
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
              e.currentTarget.style.backgroundColor = "#10b981";
              e.currentTarget.style.color = "white";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "#10b981";
            }}
          >
            Restoration Intelligence
            <BarChart3 size={18} />
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