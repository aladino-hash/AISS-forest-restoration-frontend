import {
  MapContainer,
  TileLayer,
  Polygon,
  useMap,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"; // 🔥 NEW
import Drone3D from "../components/Drone3D";

/* =========================
   ZOOM HANDLER
========================= */
const ZoomHandler = ({ setZoom, setShow3D }: any) => {
  useMapEvents({
    zoomend: (e) => {
      const z = e.target.getZoom();
      setZoom(z);

      if (z < 15) {
        setShow3D(false);
      }
    },
  });
  return null;
};

/* =========================
   FLY TO
========================= */
const FlyToLocation = ({ target, clearTarget }: any) => {
  const map = useMap();

  if (target) {
    map.flyTo(target, 17, { duration: 2 });

    setTimeout(() => {
      clearTarget();
    }, 2100);
  }

  return null;
};

/* =========================
   PIPELINE
========================= */
const Pipeline = ({ current }: { current: string }) => {
  const steps = ["Analysis", "Drone", "Implementation", "Monitoring"];

  return (
    <div className="mt-6">
      <div className="text-xs text-gray-500 mb-2">
        Restoration Pipeline
      </div>

      <div className="flex flex-col gap-2">
        {steps.map((step) => (
          <div
            key={step}
            className={`px-3 py-2 rounded-md text-sm ${
              step === current
                ? "bg-green-600 text-white"
                : "bg-gray-100 text-gray-500"
            }`}
          >
            {step}
          </div>
        ))}
      </div>
    </div>
  );
};

/* =========================
   LEGEND
========================= */
const Legend = ({ activeLayer }: any) => {
  return (
    <div className="absolute bottom-6 left-6 z-[1000] bg-white p-3 rounded shadow text-xs">
      {activeLayer === "rgb" && <b>Drone Imagery</b>}

      {activeLayer === "ndvi" && (
        <>
          <b>NDVI</b>
          <div className="flex gap-2 items-center">
            <div className="w-4 h-4 bg-red-600"></div> Low
          </div>
          <div className="flex gap-2 items-center">
            <div className="w-4 h-4 bg-yellow-400"></div> Medium
          </div>
          <div className="flex gap-2 items-center">
            <div className="w-4 h-4 bg-green-600"></div> High
          </div>
        </>
      )}

      {activeLayer === "dsm" && (
        <>
          <b>Elevation</b>
          <div>Blue → Low</div>
          <div>Yellow → Mid</div>
          <div>Red → High</div>
        </>
      )}
    </div>
  );
};

/* =========================
   MAIN
========================= */
const RestorationMap = () => {
  const location = useLocation(); // 🔥 receives data from cards
  const [activeProject, setActiveProject] = useState<any>(null);
  const [analysis, setAnalysis] = useState<any>(null);
  const [zoom, setZoom] = useState(9);
  const [activeLayer, setActiveLayer] = useState("rgb");
  const [show3D, setShow3D] = useState(false);
  const [flyTarget, setFlyTarget] = useState<any>(null);
  // 🔥 NEW: 3D model switch (DO NOT REMOVE)
  const [modelType, setModelType] = useState<"basic" | "advanced">("basic");

  const campoVerdePolygon = [
    [-8.4145, -74.8040],
    [-8.4145, -74.8020],
    [-8.4165, -74.8020],
    [-8.4165, -74.8040],
  ];
  // =========================
  // MULTIPLE FARMS (NEW)
  // =========================
  const farms = [
    {
      id: "campo",
      name: "Francisco Farm",
      type: "Individual",
      stage: "Drone",
      polygon: campoVerdePolygon,
      region: "lowland",
      video: "/video/FranciscoVideo.mp4",
      description:
        "Drone survey completed. Land shows degradation and is ready for agroforestry intervention.",
    },
    {
      id: "yamino",
      name: "Yamino Territory",
      type: "Indigenous",
      stage: "Analysis",
      region: "central",
      polygon: [
        [-8.55, -75.25],
        [-8.55, -75.20],
        [-8.60, -75.20],
        [-8.60, -75.25],
      ],
    },
    {
      id: "curimana",
      name: "Curimaná Association",
      type: "Community",
      stage: "Monitoring",
      region: "central",
      polygon: [
        [-8.43, -75.15],
        [-8.43, -75.12],
        [-8.46, -75.12],
        [-8.46, -75.15],
      ],
    },
    {
      id: "forest",
      name: "Reference Forest",
      type: "Conservation",
      stage: "Monitoring",
      region: "lowland",
      polygon: [
        [-12.830, -69.290],
        [-12.830, -69.280],
        [-12.840, -69.280],
        [-12.840, -69.290],
      ],
      description:
        "High-density primary forest used as ecological baseline reference.",
    },
  ];

  const tileBounds = [
    [-8.417, -74.805],
    [-8.413, -74.801],
  ];

  /* =========================
     CLICK HANDLER
  ========================= */
  const handleClick = (farm:any) => {
    // ✅ USE FARM DATA INSTEAD OF HARDCODED FRANCISCO
    setActiveProject({
      ...farm,
      description:
        farm.description ||
        "AI analysis ready. Select intervention strategy based on ecosystem condition.",
    });

    fetch("http://127.0.0.1:5001/api/ndvi-area", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        geometry: {
          type: "Polygon",
          coordinates: [farm.polygon.map((p: any) => [p[1], p[0]])],
        },
        region: farm.region, // 🔥 NEW — send region to backend
      }),
    })
        .then((res) => res.json())
        .then((data) => setAnalysis(data))
        .catch((err) => console.error(err));

      const center = farm.polygon[0];
      setFlyTarget(center);

      // 🔥 FIXED CINEMATIC 3D TRIGGER (DO NOT TOUCH BELOW THIS COMMENT)
      // ✅ Only farms with video trigger 3D (scalable logic)
      setTimeout(() => {
        if (farm.video) {
          setShow3D(true);
        }
      }, 2100);
  }; // ✅ CLOSE handleClick FUNCTION

  /* =========================
     AUTO-OPEN FROM CARD CLICK (NEW)
  ========================= */
  useEffect(() => {
    // 🔥 if user came from GlobalOverview
    if (location.state?.farm) {
      const selectedFarm = farms.find(
        (f) => f.id === location.state.farm
      );

      if (selectedFarm) {
        // 🔥 simulate click
        handleClick(selectedFarm);
      }
    }
  }, [location.state]);

  return (
    <div
      className="h-screen w-full relative"
      style={{
        background: zoom >= 15 ? "#e6f4ea" : "transparent",
      }}
    >
      {/* LAYER SWITCH */}
      <div className="absolute top-4 left-16 z-[1000] bg-white shadow-md rounded-lg p-2 flex gap-2">
        {["rgb", "ndvi", "dsm"].map((layer) => (
          <button
            key={layer}
            onClick={() => setActiveLayer(layer)}
            className={`px-3 py-1 text-sm rounded ${
              activeLayer === layer
                ? "bg-green-600 text-white"
                : "bg-gray-100"
            }`}
          >
            {layer.toUpperCase()}
          </button>
        ))}
      </div>

      <MapContainer
        center={[-8.45, -75.05]}
        zoom={9}
        maxZoom={25}
        style={{ height: "100%", width: "100%" }}
      >
        <ZoomHandler setZoom={setZoom} setShow3D={setShow3D} />

        <FlyToLocation
          target={flyTarget}
          clearTarget={() => setFlyTarget(null)}
        />

        {/* BASE MAP */}
        <TileLayer
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
          maxZoom={25}
        />

        {/* RGB */}
        {zoom >= 14 && activeLayer === "rgb" && (
          <TileLayer
            url="/tiles/tiles_rgb/{z}/{x}/{y}.png"
            bounds={tileBounds}
            maxZoom={25}
            maxNativeZoom={22}
            opacity={zoom >= 15 ? 1 : 0.6}
          />
        )}

        {/* NDVI */}
        {zoom >= 15 && activeLayer === "ndvi" && (
          <TileLayer
            url="/tiles/tile_clean/{z}/{x}/{y}.png"
            bounds={tileBounds}
            opacity={0.85}
            maxZoom={25}
            maxNativeZoom={22}
          />
        )}

        {/* DSM */}
        {zoom >= 15 && activeLayer === "dsm" && (
          <TileLayer
            url="/tiles/tiles_dsm/{z}/{x}/{y}.png"
            bounds={tileBounds}
            opacity={0.85}
            maxZoom={25}
            maxNativeZoom={22}
          />
        )}

        {/* Polygons (MULTI FARM) */}
        {zoom < 15 &&
          farms.map((farm) => (
            <Polygon
              key={farm.id}
              positions={farm.polygon}
              pathOptions={{
                color: farm.id === "campo" ? "orange" : "blue",
                weight: 3,
              }}
              eventHandlers={{
                click: () => handleClick(farm),
              }}
            />
          ))}
      </MapContainer>

      {/* LEGEND */}
      <Legend activeLayer={activeLayer} />

      {/* FULLSCREEN 3D */}
      {show3D && (
        <div className="fixed inset-0 z-[2000] bg-black">

          {/* CLOSE BUTTON */}
          <button
            onClick={() => setShow3D(false)}
            className="absolute top-4 right-4 bg-white px-3 py-1 rounded z-[3000]"
          >
            Close
          </button>

          {/* 🔥 NEW: MODEL SWITCH UI */}
          <div className="absolute top-4 left-4 z-[3000] flex gap-2">
            <button
              onClick={() => setModelType("basic")}
              className={`px-3 py-1 rounded ${
                modelType === "basic"
                  ? "bg-green-600 text-white"
                  : "bg-gray-200"
              }`}
            >
              Drone (Raw)
            </button>

            <button
              onClick={() => setModelType("advanced")}
              className={`px-3 py-1 rounded ${
                modelType === "advanced"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200"
              }`}
            >
              Advanced 3D
            </button>
          </div>

          {/* 🔥 PASS MODEL TYPE */}
          <Drone3D fullscreen model={modelType} />
        </div>
      )}

      {/* SIDE PANEL */}
      {activeProject && (
        <div className="absolute top-0 right-0 h-full w-[360px] bg-white shadow-xl z-[1000] p-5 overflow-y-auto">

          {/* CLOSE */}
          <button
            onClick={() => setActiveProject(null)}
            className="absolute top-4 right-4 text-gray-500 hover:text-black"
          >
            ✕
          </button>

          <h2 className="text-lg font-semibold">
            {activeProject.name}
          </h2>
          {/* 🌍 ECOSYSTEM BADGE */}
          {analysis?.ecosystem_type && (
            <div className="mt-2 inline-block px-3 py-1 rounded-full text-xs bg-green-100 text-green-700">
              {analysis.ecosystem_type === "purma" && "🌱 Purma (Secondary Forest)"}
              {analysis.ecosystem_type === "pastizales" && "🌾 Pastizales (Degraded Pasture)"}
              {analysis.ecosystem_type === "bajiales" && "💧 Bajiales (Wetland)"}
              {analysis.ecosystem_type === "bosque_alto" && "🌳 Bosque Alto (High Forest)"}
            </div>
          )}

          {/* 🔥 ADD THIS NEW BLOCK RIGHT HERE — DO NOT MOVE OTHER CODE */}
          {analysis?.ecosystem_type && (
            <div className="mt-3 bg-green-50 p-3 rounded-lg">
              <div className="text-xs text-green-600 mb-1">
                Recommended Strategy
              </div>

              <div className="text-sm font-semibold">
                {analysis.ecosystem_type === "purma" &&
                  "🌱 Enrichment Agroforestry Strategy"}
                {analysis.ecosystem_type === "pastizales" &&
                  "🌾 Soil Recovery & Silvopasture Strategy"}
                {analysis.ecosystem_type === "bajiales" &&
                  "💧 Wetland Adaptive Restoration Strategy"}
                {analysis.ecosystem_type === "bosque_alto" &&
                  "🌳 Biodiversity Conservation Strategy"}
              </div>
            </div>
          )}
          {/* 🔥 END NEW BLOCK */}

          <div className="text-sm">
            <b>Type:</b> {activeProject.type}
          </div>

          <div className="text-sm">
            <b>Stage:</b> {activeProject.stage}
          </div>

          <p className="text-sm text-gray-600 mt-3">
            {activeProject.description}
          </p>

          {/* 3D */}
          <Drone3D
            key={activeProject.id + "-panel"}
            model={modelType}
          />

          {/* ================= AI DATA ================= */}
          {analysis && (
            <div className="mt-4 text-sm space-y-3">

              {/* 📊 BASIC METRICS */}
              <div>
                <b>NDVI:</b> {analysis.ndvi?.toFixed(2)}
              </div>

              <div>
                <b>Status:</b> {analysis.status}
              </div>
              {/* 🤖 AI CONFIDENCE */}
              <div className="mt-2 text-sm">
                🤖 <b>AI Confidence:</b>{" "}
                {analysis.ndvi > 0.6 && (
                  <span className="text-green-600 font-medium">High</span>
                )}
                {analysis.ndvi <= 0.6 && analysis.ndvi > 0.4 && (
                  <span className="text-yellow-600 font-medium">Medium</span>
                )}
                {analysis.ndvi <= 0.4 && (
                  <span className="text-red-600 font-medium">Low</span>
                )}
              </div>

              {/* 🌍 ECOSYSTEM TYPE (IMPROVED LABEL) */}
              <div className="mt-2">
                🌍 <b>Ecosystem Type:</b>{" "}
                <span className="capitalize">
                  {analysis.ecosystem_type || "Unknown"}
                </span>
              </div>

              {/* 🏔️ TERRAIN INFO (NEW) */}
              {analysis?.slope !== undefined && (
                <div className="mt-2">
                  🏔️ <b>Slope:</b>{" "}
                  {analysis.slope.toFixed(2)}°{" "}
                  {analysis.slope_class && (
                    <span className="text-gray-500">
                      ({analysis.slope_class})
                    </span>
                  )}
                </div>
              )}

              <hr className="my-2" />

              {/* 🌱 LAND INFO */}
              <div>🌱 <b>Vegetation:</b> {analysis.vegetation}</div>
              <div>🌍 <b>Soil:</b> {analysis.soil}</div>
              <div>💧 <b>Moisture:</b> {analysis.moisture}</div>
              <div>⚠️ <b>Risk:</b> {analysis.risk}</div>

              <hr className="my-2" />

              {/* 🔵 AI QUICK GUIDANCE */}
              <div className="bg-blue-50 p-3 rounded-lg">
                <div className="text-xs text-blue-500 mb-1">
                  AI Quick Guidance
                </div>

                <ul className="list-disc ml-5 text-sm">
                  {analysis.recommendation?.map((rec: string, i: number) => (
                    <li key={i}>{rec}</li>
                  ))}
                </ul>
              </div>

              {/* 🏔️ TERRAIN GUIDANCE (NEW) */}
              {analysis?.restoration_plan?.recommendation_note && (
                <div className="bg-orange-50 p-3 rounded-lg mt-3">
                  <div className="text-xs text-orange-500 mb-1">
                    Terrain Advisory
                  </div>

                  <div className="text-sm">
                    {analysis.restoration_plan.recommendation_note}
                  </div>
                </div>
              )}

              {/* 📊 PERFORMANCE METRICS */}
              <div className="mt-2">
                ⏱ <b>Recovery timeline:</b> {analysis.timeline_months} months
              </div>

              {/* ================= CARBON ================= */}
              <div className="mt-3">
                <div className="flex justify-between text-xs mb-1">
                  <span>🌍 Carbon</span>
                  <span>{analysis.carbon_estimate_tons_per_ha} t/ha</span>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-green-600 h-2 rounded-full"
                    style={{
                      width: `${Math.min(
                        (analysis.carbon_estimate_tons_per_ha / 15) * 100,
                        100
                      )}%`,
                    }}
                  />
                </div>
              </div>

              {/* ================= BIODIVERSITY ================= */}
              <div className="mt-3">
                <div className="flex justify-between text-xs mb-1">
                  <span>🧬 Biodiversity</span>
                  <span>{analysis.biodiversity_score} / 100</span>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{
                      width: `${analysis.biodiversity_score}%`,
                    }}
                  />
                </div>
              </div>

              {/* ================= RESTORATION PLAN ================= */}
              {analysis.restoration_plan && (
                <div className="mt-6">
                  <div className="font-semibold mb-2">
                    {analysis.ecosystem_type === "purma" && "🌱 Secondary Forest Recovery Plan"}
                    {analysis.ecosystem_type === "pastizales" && "🌾 Degraded Pasture Recovery Plan"}
                    {analysis.ecosystem_type === "bajiales" && "💧 Wetland Restoration Plan"}
                    {analysis.ecosystem_type === "bosque_alto" && "🌳 High Forest Restoration Plan"}
                  </div>

                  {/* Phase 1 */}
                  <div className="mb-4 border-l-4 border-green-500 pl-3">
                    <div className="text-xs text-green-600 mb-1">
                      Phase 1
                    </div>

                    <div className="font-medium">
                      {analysis.restoration_plan.phase_1.name}
                    </div>

                    <ul className="list-disc ml-5 text-sm mt-1">
                      {analysis.restoration_plan.phase_1.species.map((s: string, i: number) => (
                        <li key={i}>{s}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Phase 2 */}
                  <div className="mb-4 border-l-4 border-yellow-500 pl-3">
                    <div className="text-xs text-yellow-600 mb-1">
                      Phase 2
                    </div>

                    <div className="font-medium">
                      {analysis.restoration_plan.phase_2.name}
                    </div>

                    <ul className="list-disc ml-5 text-sm mt-1">
                      {analysis.restoration_plan.phase_2.species.map((s: string, i: number) => (
                        <li key={i}>{s}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Phase 3 */}
                  <div className="mb-4 border-l-4 border-blue-500 pl-3">
                    <div className="text-xs text-blue-600 mb-1">
                      Phase 3
                    </div>

                    <div className="font-medium">
                      {analysis.restoration_plan.phase_3.name}
                    </div>

                    <ul className="list-disc ml-5 text-sm mt-1">
                      {analysis.restoration_plan.phase_3.species.map((s: string, i: number) => (
                        <li key={i}>{s}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Animals */}
                  {analysis.restoration_plan.animals && (
                    <div className="mt-2">
                      🐾 <b>Integration:</b>{" "}
                      {analysis.restoration_plan.animals.join(", ")}
                    </div>
                  )}

                  {/* 🏔️ TERRAIN DETAILS (NEW) */}
                  {analysis.restoration_plan?.terrain && (
                    <div className="mt-4 text-xs text-gray-600">
                      🌍 Terrain:{" "}
                      {analysis.restoration_plan.terrain.slope_degrees?.toFixed(2)}° (
                      {analysis.restoration_plan.terrain.slope_class})
                    </div>
                  )}
                </div>
              )}

            </div>
          )}

          {/* VIDEO */}
          {activeProject.video && (
            <video controls className="mt-4 rounded-lg w-full">
              <source src={activeProject.video} type="video/mp4" />
            </video>
          )}

          {/* PIPELINE */}
          <Pipeline current={activeProject.stage} />

        </div>
      )}
    </div>
  );
};

export default RestorationMap;