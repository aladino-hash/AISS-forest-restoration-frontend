import { API_BASE_URL } from "../lib/api";
import { useEffect, useState } from "react";
import { MapContainer, TileLayer, GeoJSON, useMap } from "react-leaflet";

/**
 * ✅ MAP CONTROLLER
 * Only recenters when country changes
 */
function MapController({
  center,
  zoom,
  selectedCountry,
}: any) {
  const map = useMap();

  useEffect(() => {
    map.flyTo(center, zoom, {
      duration: 1.5,
    });
  }, [selectedCountry]);

  return null;
}

export default function RegionMap({
  selectedCountry,
}: {
  selectedCountry: string;
}) {
  const SUPPORTED_COUNTRIES = [
    "Portugal",
    "Peru",
  ];
  const isSupported =
    SUPPORTED_COUNTRIES.includes(selectedCountry);
  /**
   * 🌍 COUNTRY CONFIG
   */
  const countryConfig: Record<
    string,
    { center: [number, number]; zoom: number }
  > = {
    Portugal: {
      center: [39.5, -8.0],
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
      : {
          center: [38.0, -7.9],
          zoom: 5,
        };

  /**
   * 🧩 STATE
   */
  const [geoData, setGeoData] = useState<any>(null);

  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  const [regionData, setRegionData] = useState<any>(null);

  /**
   * 🗺️ REGION NAME MAPPING
   */
  const regionNameMap: Record<string, string> = {
    "Área Metropolitana do Porto": "Porto",
    "Área Metropolitana de Lisboa": "Lisboa",
    "Região de Coimbra": "Coimbra",
    "Viseu Dão Lafões": "Viseu",
  };

  /**
   * 🌍 LOAD COUNTRY REGIONS
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

  return (
    <div style={{ position: "relative" }}>
      <MapContainer
        center={[0, 0]}
        zoom={2}
        style={{
          height: "400px",
          width: "100%",
          borderRadius: "12px",
        }}
        scrollWheelZoom={true}
        worldCopyJump={false}
      >
        {/* 🧭 MAP CONTROLLER */}
        <MapController
          center={currentConfig.center}
          zoom={currentConfig.zoom}
          selectedCountry={selectedCountry}
        />

        {/* 🌍 BASE MAP */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />

        {/* 🗺️ REGIONS */}
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
                color: isSelected ? "#2563eb" : "#111827",
                weight: isSelected ? 3 : 1,
                fillColor: isSelected ? "#3b82f6" : "transparent",
                fillOpacity: isSelected ? 0.15 : 0,
              };
            }}
            onEachFeature={(feature: any, layer: any) => {
              layer.on({
                mouseover: () => {
                  layer.setStyle({
                    weight: 2,
                    fillOpacity: 0.1,
                  });
                },

                mouseout: () => {
                  const region =
                    selectedCountry === "Peru"
                      ? feature.properties.NAME_1
                      : feature.properties.region;

                  const isSelected = region === selectedRegion;

                  layer.setStyle({
                    color: isSelected ? "#2563eb" : "#111827",
                    weight: isSelected ? 3 : 1,
                    fillOpacity: isSelected ? 0.15 : 0,
                  });
                },

                click: async () => {
                  const region =
                    selectedCountry === "Peru"
                      ? feature.properties.NAME_1
                      : feature.properties.region;

                  /**
                   * ✅ ZOOM TO REGION
                   */
                  const bounds = layer.getBounds();
                  layer._map.fitBounds(bounds);

                  /**
                   * ✅ NORMALIZE REGION NAME
                   */
                  const normalizedRegion = region
                    .normalize("NFD")
                    .replace(/[\u0300-\u036f]/g, "")
                    .toLowerCase()
                    .trim();

                  const mappedRegion =
                    selectedCountry === "Portugal"
                      ? regionNameMap[region] || region
                      : region;

                  try {
                    const response = await fetch(
                      `${API_BASE_URL}/subnational/${selectedCountry}/${mappedRegion}`
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
      {!isSupported && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 2000,
            background: "rgba(17,24,39,0.92)",
            color: "white",
            padding: "24px",
            borderRadius: "16px",
            textAlign: "center",
            width: "340px",
            backdropFilter: "blur(8px)",
            boxShadow: "0 8px 30px rgba(0,0,0,0.35)",
          }}
        >
          <h2
            style={{
              marginTop: 0,
              marginBottom: "12px",
            }}
          >
            🌍 Regional Intelligence In Development
          </h2>

          <p
            style={{
              lineHeight: 1.6,
              marginBottom: 0,
              opacity: 0.9,
            }}
          >
            Advanced territorial intelligence layers are currently
            available for Peru and Portugal.
            <br />
            <br />
            Support for additional countries is being progressively
            developed through the FYNOS AI restoration framework.
          </p>
        </div>
      )}

      {/* 📊 REGION INFORMATION CARD */}
      {selectedRegion &&
        regionData &&
        regionData.length > 0 &&
        (() => {
          const sorted = [...regionData].sort(
            (a, b) => Number(a.year) - Number(b.year)
          );

          const latest = sorted[sorted.length - 1];
          const previous = sorted[sorted.length - 2];

          /**
           * 📐 FORMATTERS
           */
          const formatKm2 = (value: number) =>
            (value / 100).toLocaleString() + " km²";

          const formatMillions = (value: number) =>
            (value / 1_000_000).toFixed(1) + "M";

          /**
           * 📈 TREND
           */
          let trend = "Stable";

          if (previous) {
            if (latest.carbon_emissions > previous.carbon_emissions) {
              trend = "Increasing";
            } else if (
              latest.carbon_emissions < previous.carbon_emissions
            ) {
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
                width: "320px",
                padding: "18px",
                borderRadius: "14px",
                background: "rgba(17, 24, 39, 0.92)",
                color: "white",
                backdropFilter: "blur(8px)",
                boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
              }}
            >
              <h2
                style={{
                  marginTop: 0,
                  marginBottom: "14px",
                  fontSize: "22px",
                }}
              >
                📍 {selectedRegion}
              </h2>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  fontSize: "15px",
                }}
              >
                <div>
                  <strong>📅 Year:</strong> {latest.year}
                </div>

                <div>
                  <strong>📐 Area:</strong>{" "}
                  {formatKm2(latest.area_ha)}
                </div>

                <div>
                  <strong>🌍 Land Loss:</strong>{" "}
                  {(
                    (latest.tree_loss_ha / latest.area_ha) *
                    100
                  ).toFixed(2)}
                  %
                </div>

                <div>
                  <strong>🔥 Emissions:</strong>{" "}
                  {formatMillions(latest.carbon_emissions)} tCO₂e
                </div>

                <div>
                  <strong>📈 Trend:</strong> {trend}
                </div>
              </div>
            </div>
          );
        })()}
    </div>
  );
}