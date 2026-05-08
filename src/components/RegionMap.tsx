import { API_BASE_URL } from "../lib/api";
import { useEffect, useState } from "react";
import { MapContainer, TileLayer, GeoJSON, useMap } from "react-leaflet";

/**
 * ✅ MAP CONTROLLER (FIXED)
 * Only recenters when country changes
 */
function MapController({ center, zoom, selectedCountry }: any) {
  const map = useMap();

  useEffect(() => {
    map.setView(center, zoom);
  }, [selectedCountry]); // ✅ ONLY when country changes

  return null;
}
// 🗺️ LEGEND ITEM COMPONENT
// Reusable color row for map legends
function LegendItem({
  color,
  label,
}: {
  color: string;
  label: string;
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        marginBottom: "6px",
      }}
    >
      {/* COLOR BOX */}
      <div
        style={{
          width: "16px",
          height: "16px",
          background: color,
          marginRight: "8px",
          borderRadius: "3px",
        }}
      />

      {/* LABEL */}
      <span>{label}</span>
    </div>
  );
}

export default function RegionMap({
  selectedCountry,
}: {
  selectedCountry: string;
}) {
  const countryConfig: Record<
    string,
    { center: [number, number]; zoom: number }
  > = {
    Portugal: {
      center: [39.5, -8.0], // Portugal center
      zoom: 6,
    },
    Peru: {
      center: [-9.19, -75.015],
      zoom: 5,
    },
  };

  const currentConfig =
    selectedCountry && countryConfig[selectedCountry]
      ? countryConfig[selectedCountry]
      : { center: [38.0, -7.9], zoom: 9 };

  const [geoData, setGeoData] = useState<any>(null);
  const [forestData, setForestData] = useState<any>(null);
  // 🧩 FARO PARISHES
  const [faroParishes, setFaroParishes] = useState<any>(null);

  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [regionData, setRegionData] = useState<any>(null);

  const [activeLayer, setActiveLayer] = useState<
    "gee" | "vegetation" | "slope" | "restoration"
  >("restoration");

  const regionNameMap: Record<string, string> = {
    "Área Metropolitana do Porto": "Porto",
    "Área Metropolitana de Lisboa": "Lisboa",
    "Região de Coimbra": "Coimbra",
    "Viseu Dão Lafões": "Viseu",
  };

  /**
   * 👉 Load regions
   */
  useEffect(() => {
    let file = "";

    setGeoData(null);
    setSelectedRegion(null);
    setRegionData(null);

    if (selectedCountry === "Portugal") {
      file = "/regions_portugal.geojson";
    } else if (selectedCountry === "Peru") {
      file = "/peru_regions.geojson";
    }

    if (file) {
      fetch(file)
        .then((res) => res.json())
        .then(setGeoData)
        .catch((err) => console.error("GeoJSON load error:", err));
    }
  }, [selectedCountry]);

  /**
   * 👉 Load forest
   */
  useEffect(() => {
    fetch("/Simplify_geometry_forest.geojson")
      .then((res) => res.json())
      .then(setForestData)
      .catch((err) => console.error("Forest load error:", err));
  }, []);
  // 🧩 LOAD FARO PARISHES (only once)
  useEffect(() => {
    fetch("/faro_parishes.geojson")
      .then((res) => res.json())
      .then(setFaroParishes)
      .catch((err) => console.error("Parishes load error:", err));
  }, []);

  return (
    <div style={{ position: "relative" }}>
      {/* 🔘 LAYER TOGGLE */}
      {selectedRegion && (
      <div

        style={{
          position: "absolute",
          top: "12px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 1000,
          display: "flex",
          gap: "6px",
          background: "rgba(255,255,255,0.9)",
          padding: "6px",
          borderRadius: "10px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
        }}
      >
        {["gee","vegetation", "slope", "restoration"].map((layer) => (
          <button
            key={layer}
            onClick={() => setActiveLayer(layer as any)}
            style={{
              padding: "6px 10px",
              borderRadius: "6px",
              border: "none",
              cursor: "pointer",
              fontWeight: 500,
              background:
                activeLayer === layer ? "#2563eb" : "transparent",
              color: activeLayer === layer ? "white" : "#333",
            }}
          >
            {layer === "vegetation" && "Vegetation"}
            {layer === "slope" && "Slope"}
            {layer === "restoration" && "Restoration"}
            {layer === "gee" && "Satellite"}
          </button>
        ))}
      </div>
      )}

      {/* 🗺️ DYNAMIC LEGEND */}
      {selectedRegion && (
      <div
        style={{
          position: "absolute",
          bottom: "20px",
          left: "20px",
          zIndex: 1000,
          background: "rgba(17,24,39,0.9)",
          color: "white",
          padding: "12px",
          borderRadius: "10px",
          minWidth: "180px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
          fontSize: "14px",
          backdropFilter: "blur(6px)",
        }}
      >
        <h4
          style={{
            marginTop: 0,
            marginBottom: "10px",
          }}
        >
          Legend
        </h4>

        {/* 🌿 VEGETATION LEGEND */}
        {activeLayer === "vegetation" && (
          <>
            <LegendItem color="#166534" label="Forest" />
            <LegendItem color="#65a30d" label="Shrub" />
            <LegendItem color="#bbf7d0" label="Grass" />
            <LegendItem color="#facc15" label="Agriculture" />
          </>
        )}

        {/* ⛰️ SLOPE LEGEND */}
        {activeLayer === "slope" && (
          <>
            <LegendItem color="#166534" label="Flat" />
            <LegendItem color="#22c55e" label="Low" />
            <LegendItem color="#fde047" label="Medium" />
            <LegendItem color="#f97316" label="High" />
            <LegendItem color="#dc2626" label="Steep" />
          </>
        )}

        {/* 🌱 RESTORATION LEGEND */}
        {activeLayer === "restoration" && (
          <>
            <LegendItem color="#2e7d32" label="Low Priority" />
            <LegendItem color="#facc15" label="Moderate Priority" />
            <LegendItem color="#dc2626" label="High Priority" />
          </>
        )}
      </div>
      )}

      <MapContainer
        center={[0, 0]}   // 👈 dummy initial center
        zoom={2}          // 👈 dummy initial zoom
        style={{ height: "400px", width: "100%" }}
        scrollWheelZoom={true}

        // ✅ STOP WORLD WRAPPING
        worldCopyJump={false}
       >
         <MapController
           center={currentConfig.center}
           zoom={currentConfig.zoom}
           selectedCountry={selectedCountry}
         />

       {/* 🌍 Base map (RESTORE THIS!) */}
       <TileLayer
         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
       />

       {/* 🛰️ LIVE SENTINEL-2 FROM GEE */}
       {activeLayer === "gee" &&
        selectedCountry === "Portugal" &&
        selectedRegion === "Faro" && (
         <TileLayer
           url="https://earthengine.googleapis.com/v1/projects/skilled-loader-493918-k7/maps/dbb38da5b694bfd0b1b44ec0089feca5-d2486377e0dc0c90f95f785595d04814/tiles/{z}/{x}/{y}"

           attribution="Google Earth Engine"

           tms={false}
           noWrap={true}

           keepBuffer={1}

           opacity={1}

           maxZoom={16}

           bounds={[
             [36.9, -9.1],
             [37.6, -7.3],
           ]}
         />
       )}

       {/* 🌿 VEGETATION */}
       {activeLayer === "vegetation" &&
        selectedCountry === "Portugal" &&
        selectedRegion === "Faro" && (
         <TileLayer
           url="/tiles/tiles_faro_vegetation/{z}/{x}/{y}.png"

           // ✅ XYZ orientation
           tms={false}

           noWrap={true}
           keepBuffer={2}

           bounds={[
             [36.9, -9.1],
             [37.6, -7.3],
           ]}

           opacity={0.9}
           maxNativeZoom={16}
           maxZoom={18}
         />
       )}

       {/* ⛰️ SLOPE */}
       {activeLayer === "slope" &&
        selectedCountry === "Portugal" &&
        selectedRegion === "Faro" && (
         <TileLayer
           url="/tiles/tiles_faro_slope/{z}/{x}/{y}.png"

           tms={false}

           noWrap={true}
           keepBuffer={2}

           bounds={[
             [36.9, -9.1],
             [37.6, -7.3],
           ]}

           opacity={0.9}
           maxNativeZoom={16}
           maxZoom={18}
         />
       )}

       {/* 🌱 RESTORATION */}
       {activeLayer === "restoration" &&
        selectedCountry === "Portugal" &&
        selectedRegion === "Faro" && (
         <TileLayer
           url="/tiles/tiles_faro_restoration/{z}/{x}/{y}.png"

           // ✅ IMPORTANT
           tms={false}

           // ✅ Prevent weird wrapping
           noWrap={true}

           // ✅ smoother zooming
           keepBuffer={2}

           // ✅ constrain loading area
           bounds={[
             [36.9, -9.1],
             [37.6, -7.3],
           ]}

           // ✅ visual quality
           opacity={0.95}
           maxNativeZoom={16}
           maxZoom={18}

           // ✅ smoother rendering
           updateWhenZooming={false}
           updateWhenIdle={true}
         />
       )}

       {/* 🧩 FARO PARISHES (ON TOP OF EVERYTHING) */}
       {selectedCountry === "Portugal" && selectedRegion === "Faro" && faroParishes && (
         <GeoJSON
           data={faroParishes}
           style={() => ({
             color: "#333333",
             weight: 1,
             fillOpacity: 0,
           })}
         />
       )}

        {/* 🗺️ Regions */}
        {geoData && (
          <GeoJSON
            key={selectedCountry}
            data={geoData}
            style={(feature: any) => {
              const region =
                selectedCountry === "Peru"
                  ? feature.properties.NAME_1
                  : feature.properties.region;

              const isSelected = region === selectedRegion;

              return {
                color: isSelected ? "#2563eb" : "#000",
                weight: isSelected ? 3 : 1,
                fillOpacity: isSelected ? 0.2 : 0,
              };
            }}
            onEachFeature={(feature: any, layer: any) => {
              layer.on({
                click: async () => {
                  const region =
                    selectedCountry === "Peru"
                      ? feature.properties.NAME_1
                      : feature.properties.region;

                  // ✅ ZOOM TO REGION
                  const bounds = layer.getBounds();
                  layer._map.fitBounds(bounds);

                  const normalizedRegion = region
                    .normalize("NFD")
                    .replace(/[\u0300-\u036f]/g, "")
                    .toLowerCase()
                    .trim();

                  const mappedRegion =
                    selectedCountry === "Portugal"
                      ? regionNameMap[region] || region
                      : normalizedRegion;

                  try {
                    const response = await fetch(
                      `${API_BASE_URL}/api/subnational/${selectedCountry}/${mappedRegion}`
                    );

                    const data = await response.json();

                    setSelectedRegion(region);
                    setRegionData(data);
                  } catch (error) {
                    console.error("API error:", error);
                  }
                },
              });
            }}
          />
        )}
      </MapContainer>

      {/* 📊 REGION CARD */}
      {selectedRegion &&
        regionData &&
        regionData.length > 0 &&
        (() => {
          const sorted = [...regionData].sort(
            (a, b) => Number(a.year) - Number(b.year)
          );

          const latest = sorted[sorted.length - 1];
          const previous = sorted[sorted.length - 2];

          const lossKm2 = latest.tree_loss_ha / 100;

          const formatKm2 = (value: number) =>
            (value / 100).toLocaleString() + " km²";

          const formatMillions = (value: number) =>
            (value / 1_000_000).toFixed(1) + "M";

          let trend = "Stable";
          if (previous) {
            if (latest.carbon_emissions > previous.carbon_emissions) {
              trend = "Increasing";
            } else if (latest.carbon_emissions < previous.carbon_emissions) {
              trend = "Decreasing";
            }
          }

          return (
            <div
              style={{
                position: "absolute",
                top: "20px",
                right: "20px",
                zIndex: 1000,
                padding: "16px",
                borderRadius: "12px",
                background: "rgba(17, 24, 39, 0.9)",
                backdropFilter: "blur(6px)",
                color: "white",
                width: "300px",
                boxShadow: "0 6px 20px rgba(0,0,0,0.3)",
              }}
            >
              <h2>📍 {selectedRegion}</h2>

              <p>📐 Area: {formatKm2(latest.area_ha)}</p>
              <p>📅 Year: {latest.year}</p>

              <p>
                🌍 Land Loss:{" "}
                {(
                  (latest.tree_loss_ha / latest.area_ha) *
                  100
                ).toFixed(2)}
                % ({lossKm2.toLocaleString()} km²)
              </p>

              <p>
                🔥 Emissions: {formatMillions(latest.carbon_emissions)} tCO₂e
              </p>

              <p>📈 Trend: {trend}</p>
            </div>
          );
        })()}
    </div>
  );
}