import {
  MapContainer,
  TileLayer,
  Polygon,
  useMap,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useState, useRef } from "react";
import Drone3D from "../components/Drone3D";

/* =========================
   ZOOM HANDLER
========================= */
const ZoomHandler = ({ setZoom, setShow3D }: any) => {
  useMapEvents({
    zoomend: (e) => {
      const z = e.target.getZoom();
      setZoom(z);

      // ✅ exit 3D when zooming out
      if (z < 15) {
        setShow3D(false);
      }
    },
  });
  return null;
};

/* =========================
   FLY TO HANDLER (FIXED)
========================= */
const FlyToLocation = ({ target, clearTarget }: any) => {
  const map = useMap();
  const hasFlown = useRef(false);

  if (target && !hasFlown.current) {
    hasFlown.current = true;

    map.flyTo(target, 18, { duration: 2.5 });

    setTimeout(() => {
      clearTarget();
      hasFlown.current = false;
    }, 2600);
  }

  return null;
};

/* =========================
   MAIN
========================= */
const RestorationMap = () => {
  const [activeProject, setActiveProject] = useState<any>(null);
  const [zoom, setZoom] = useState(9);
  const [activeLayer, setActiveLayer] = useState("rgb");
  const [show3D, setShow3D] = useState(false);
  const [flyTarget, setFlyTarget] = useState<any>(null);

  // 🔥 IMPORTANT: force re-render of panel 3D
  const [panel3DKey, setPanel3DKey] = useState(0);

  const campoVerdePolygon = [
    [-8.4145, -74.8040],
    [-8.4145, -74.8020],
    [-8.4165, -74.8020],
    [-8.4165, -74.8040],
  ];

  const tileBounds = [
    [-8.417, -74.805],
    [-8.413, -74.801],
  ];

  /* =========================
     CLICK HANDLER
  ========================= */
  const handleClick = () => {
    setActiveProject({
      id: "campo",
      name: "Francisco Farm",
      type: "Individual",
      stage: "Drone",
      description:
        "Drone survey completed. Land shows degradation and is ready for agroforestry intervention.",
      image: "/images/Francisco.JPG",
      video: "/video/FranciscoVideo.mp4",
    });

    const center = [-8.4155, -74.803];

    // fly map
    setFlyTarget(center);

    // open 3D
    setTimeout(() => {
      setShow3D(true);
    }, 2600);
  };

  /* =========================
     CLOSE 3D (FIX)
  ========================= */
  const close3D = () => {
    setShow3D(false);

    // 🔥 force panel 3D to refresh
    setPanel3DKey((prev) => prev + 1);
  };

  return (
    <div className="h-screen w-full relative">

      {/* ================= LAYER SWITCH ================= */}
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

      {/* ================= MAP ================= */}
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

        {/* Base */}
        <TileLayer
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
          maxZoom={25}
        />

        {/* RGB */}
        {zoom >= 15 && activeLayer === "rgb" && (
          <TileLayer
            url="/tiles/tiles_rgb/{z}/{x}/{y}.png"
            bounds={tileBounds}
            maxZoom={25}
            maxNativeZoom={22}
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

        {/* Polygon */}
        {zoom < 15 && (
          <Polygon
            positions={campoVerdePolygon}
            pathOptions={{ color: "orange", weight: 3 }}
            eventHandlers={{ click: handleClick }}
          />
        )}
      </MapContainer>

      {/* ================= FULLSCREEN 3D ================= */}
      {show3D && (
        <div className="fixed inset-0 z-[2000] bg-black">
          <button
            onClick={close3D}
            className="absolute top-4 right-4 bg-white px-3 py-1 rounded z-[3000]"
          >
            Close
          </button>

          <Drone3D fullscreen />
        </div>
      )}

      {/* ================= SIDE PANEL ================= */}
      {activeProject && (
        <div className="absolute top-0 right-0 h-full w-[360px] bg-white shadow-xl z-[1000] p-5 overflow-y-auto">

          <h2 className="text-lg font-semibold">
            {activeProject.name}
          </h2>

          <div className="text-sm">
            <b>Type:</b> {activeProject.type}
          </div>

          <div className="text-sm">
            <b>Stage:</b> {activeProject.stage}
          </div>

          <p className="text-sm text-gray-600 mt-3">
            {activeProject.description}
          </p>

          {/* 🔥 FIXED 3D PANEL */}
          <Drone3D key={panel3DKey} />

          {activeProject.image && (
            <img src={activeProject.image} className="mt-4 rounded-lg" />
          )}

          {activeProject.video && (
            <video controls className="mt-4 rounded-lg w-full">
              <source src={activeProject.video} type="video/mp4" />
            </video>
          )}
        </div>
      )}
    </div>
  );
};

export default RestorationMap;