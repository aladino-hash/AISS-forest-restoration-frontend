import { MapContainer, TileLayer, Polygon } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useState } from "react";

/* =========================
   PIPELINE COMPONENT
========================= */
const Pipeline = ({ current }: { current: string }) => {
  const steps = ["Analysis", "Drone", "Implementation", "Monitoring"];

  return (
    <div className="mt-6">
      <div className="text-xs text-gray-500 mb-2">Restoration Pipeline</div>

      <div className="flex flex-col gap-2">
        {steps.map((step, index) => {
          const isActive = step === current;

          return (
            <div
              key={index}
              className={`px-3 py-2 rounded-md text-sm ${
                isActive
                  ? "bg-green-600 text-white"
                  : "bg-gray-100 text-gray-500"
              }`}
            >
              {step}
            </div>
          );
        })}
      </div>
    </div>
  );
};

/* =========================
   MAIN COMPONENT
========================= */
const RestorationMap = () => {
  const [activeProject, setActiveProject] = useState<any>(null);
  const [analysis, setAnalysis] = useState<any>(null);

  // 🟢 Curimaná
  const curimanaPolygon = [
    [-8.43, -75.15],
    [-8.43, -75.12],
    [-8.46, -75.12],
    [-8.46, -75.15],
  ];

  // 🟡 Campo Verde
  const campoVerdePolygon = [
    [-8.38, -74.78],
    [-8.38, -74.75],
    [-8.41, -74.75],
    [-8.41, -74.78],
  ];

  // 🔵 Yamino
  const yaminoPolygon = [
    [-8.55, -75.25],
    [-8.55, -75.20],
    [-8.60, -75.20],
    [-8.60, -75.25],
  ];

  /* =========================
     NDVI ANALYSIS FUNCTION
  ========================= */
  const analyzePolygon = async (polygon: any) => {
    try {
      setAnalysis(null); // reset before new call

      const res = await fetch("http://127.0.0.1:5001/api/ndvi-area", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          geometry: {
            type: "Polygon",
            coordinates: [
              polygon.map((p: any) => [p[1], p[0]]), // ⚠️ lng, lat
            ],
          },
        }),
      });

      const data = await res.json();
      console.log("NDVI response:", data);

      setAnalysis(data);
    } catch (err) {
      console.error("NDVI analysis error:", err);
    }
  };

  const getStyle = (id: string, color: string) => ({
    color,
    weight: activeProject?.id === id ? 4 : 2,
    fillOpacity: activeProject?.id === id ? 0.5 : 0.3,
  });

  return (
    <div className="h-screen w-full relative">

      {/* MAP */}
      <MapContainer
        center={[-8.45, -75.05]}
        zoom={9}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}" />

        {/* 🟢 Curimaná */}
        <Polygon
          positions={curimanaPolygon}
          pathOptions={getStyle("curimana", "green")}
          eventHandlers={{
            click: () => {
              setActiveProject({
                id: "curimana",
                name: "Curimaná Association",
                type: "Community",
                stage: "Monitoring",
                description:
                  "Community-led agroforestry restoration with monitoring.",
              });

              analyzePolygon(curimanaPolygon);
            },
          }}
        />

        {/* 🟡 Campo Verde */}
        <Polygon
          positions={campoVerdePolygon}
          pathOptions={getStyle("campo", "orange")}
          eventHandlers={{
            click: () => {
              setActiveProject({
                id: "campo",
                name: "Francisco Farm",
                type: "Individual",
                stage: "Drone",
                description:
                  "Farmer-led restoration supported by drone validation.",
              });

              analyzePolygon(campoVerdePolygon);
            },
          }}
        />

        {/* 🔵 Yamino */}
        <Polygon
          positions={yaminoPolygon}
          pathOptions={getStyle("yamino", "blue")}
          eventHandlers={{
            click: () => {
              setActiveProject({
                id: "yamino",
                name: "Yamino Territory",
                type: "Indigenous",
                stage: "Analysis",
                description:
                  "Indigenous land stewardship integrating traditional ecological knowledge.",
              });

              analyzePolygon(yaminoPolygon);
            },
          }}
        />
      </MapContainer>

      {/* SIDE PANEL */}
      {activeProject && (
        <div className="absolute top-0 right-0 h-full w-[320px] bg-white shadow-xl z-[1000] p-5 flex flex-col">

          {/* Close */}
          <button
            onClick={() => {
              setActiveProject(null);
              setAnalysis(null);
            }}
            className="self-end text-gray-500 hover:text-black"
          >
            ✕
          </button>

          {/* Content */}
          <div className="mt-2">
            <div className="text-lg font-semibold mb-2">
              {activeProject.name}
            </div>

            <div className="text-sm mb-2">
              <strong>Type:</strong> {activeProject.type}
            </div>

            <div className="text-sm mb-2">
              <strong>Stage:</strong> {activeProject.stage}
            </div>

            <div className="text-sm text-gray-600 mt-3">
              {activeProject.description}
            </div>

            {/* PIPELINE */}
            <Pipeline current={activeProject.stage} />

            {/* NDVI ANALYSIS */}
            <div className="mt-6">
              {!analysis && (
                <div className="text-xs text-gray-400">
                  Analyzing land...
                </div>
              )}

              {analysis && !analysis.error && (
                <div className="p-3 bg-gray-50 rounded-lg text-sm">

                  <div className="font-semibold mb-2">📊 Land Analysis</div>

                  <div>
                    <strong>NDVI:</strong> {analysis.ndvi?.toFixed(2)}
                  </div>

                  <div>
                    <strong>Status:</strong> {analysis.status}
                  </div>

                  <div className="text-gray-600 text-xs mt-2">
                    {analysis.ndvi < 0.4 &&
                      "⚠️ Degraded land. High restoration priority."}

                    {analysis.ndvi >= 0.4 && analysis.ndvi < 0.6 &&
                      "🌱 Moderate vegetation. Suitable for agroforestry."}

                    {analysis.ndvi >= 0.6 &&
                      "🌳 Healthy vegetation. Focus on conservation."}
                  </div>

                </div>
              )}

              {analysis?.error && (
                <div className="text-xs text-red-500">
                  Error loading analysis
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RestorationMap;