export default function UnderConstruction() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#020c02",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        padding: "20px"
      }}
    >
      <h1
        style={{
          fontSize: "3rem",
          marginBottom: "1rem",
          fontWeight: 600
        }}
      >
        Research Preview
      </h1>

      <p
        style={{
          maxWidth: "600px",
          color: "rgba(255,255,255,0.75)",
          lineHeight: 1.6,
          fontSize: "1rem"
        }}
      >
        This module is currently under active development
        as part of the FYNOS AI territorial intelligence
        research platform.
      </p>

      <p
        style={{
          marginTop: "20px",
          color: "#10b981",
          letterSpacing: "1px",
          fontSize: "0.9rem"
        }}
      >
        Coming soon
      </p>
    </div>
  );
}