import { API_BASE_URL } from "../lib/api"; // ✅ ADD THIS
import { useEffect, useState } from "react";
import { MapContainer, TileLayer, GeoJSON, useMap } from "react-leaflet";

/**
 * 🧭 Map Controller
 */
function MapController({
  center,
  zoom,
}: {
  center: [number, number];
  zoom: number;
}) {
  const map = useMap();

  useEffect(() => {
    map.setView(center, zoom, {
      animate: true,
    });
  }, [center, zoom, map]);

  return null;
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
      center: [39.5, -8],
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
      : { center: [39.5, -8], zoom: 6 };

  const [geoData, setGeoData] = useState<any>(null);
  const [forestData, setForestData] = useState<any>(null);
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [regionData, setRegionData] = useState<any>(null);

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
        .then((data) => setGeoData(data));
    }
  }, [selectedCountry]);

  /**
   * 👉 Load forest layer
   */
  useEffect(() => {
    fetch("/Simplify_geometry_forest.geojson")
      .then((res) => res.json())
      .then((data) => setForestData(data));
  }, []);

  return (
    <div style={{ position: "relative" }}>
      <MapContainer
        center={currentConfig.center}
        zoom={currentConfig.zoom}
        style={{ height: "400px", width: "100%" }}
      >
        <MapController center={currentConfig.center} zoom={currentConfig.zoom} />

        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {/* 🌲 Forest Layer */}
        {forestData && (
          <GeoJSON
            data={forestData}
            style={() => ({
              color: "#228B22",
              weight: 0.5,
              fillOpacity: 0.4,
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
                    console.log("Clicked region:", mappedRegion);

                    // ✅ FIXED LINE
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
      {selectedRegion && regionData && regionData.length > 0 && (() => {
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
              🌍 Land Loss: {((latest.tree_loss_ha / latest.area_ha) * 100).toFixed(2)}%
              ({lossKm2.toLocaleString()} km²)
            </p>

            <p>🔥 Emissions: {formatMillions(latest.carbon_emissions)} tCO₂e</p>

            <p>📈 Trend: {trend}</p>
          </div>
        );
      })()}
    </div>
  );
}