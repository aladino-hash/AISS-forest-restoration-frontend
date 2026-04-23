import { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  useMapEvents,
  Popup,
  Marker,
} from "react-leaflet";

import "leaflet/dist/leaflet.css";
import L from "leaflet";

// ✅ Make Leaflet global BEFORE leaflet-draw
(window as any).L = L;

import "leaflet-draw/dist/leaflet.draw.css";
import "leaflet-draw";

/* =========================
   CLICK HANDLER
========================= */
const MapClickHandler = ({ setClickedPoint }: any) => {
  useMapEvents({
    click: async (e) => {
      const { lat, lng } = e.latlng;

      try {
        const res = await fetch("http://127.0.0.1:5001/api/ndvi-point", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ lat, lon: lng }),
        });

        const data = await res.json();
        setClickedPoint(data);
      } catch (err) {
        console.error("Error fetching NDVI:", err);
      }
    },
  });

  return null;
};

/* =========================
   MAP CONTROLLER
========================= */
const MapController = ({ userLocation }: any) => {
  const map = useMapEvents({});

  useEffect(() => {
    if (userLocation) {
      map.setView([userLocation.lat, userLocation.lon], 13);
    }
  }, [userLocation]);

  return null;
};

/* =========================
   DRAW CONTROL
========================= */
const DrawControl = ({ setPolygon }: any) => {
  const map = useMapEvents({});

  useEffect(() => {
    const drawnItems = new L.FeatureGroup();
    map.addLayer(drawnItems);

    const drawControl = new L.Control.Draw({
      draw: {
        polygon: true,
        rectangle: false,
        circle: false,
        marker: false,
        polyline: false,
        circlemarker: false,
      },
      edit: {
        featureGroup: drawnItems,
      },
    });

    map.addControl(drawControl);

    const handleCreate = (event: any) => {
      const layer = event.layer;

      drawnItems.clearLayers();
      drawnItems.addLayer(layer);

      const geojson = layer.toGeoJSON();
      setPolygon(geojson);

      console.log("Polygon drawn:", geojson);
    };

    map.on(L.Draw.Event.CREATED, handleCreate);

    return () => {
      map.off(L.Draw.Event.CREATED, handleCreate);
      map.removeControl(drawControl);
      map.removeLayer(drawnItems);
    };
  }, [map, setPolygon]);

  return null;
};

/* =========================
   MAIN COMPONENT
========================= */
const CurimanaMap = () => {
  const [tileUrl, setTileUrl] = useState<string | null>(null);
  const [clickedPoint, setClickedPoint] = useState<any>(null);
  const [userLocation, setUserLocation] = useState<any>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [polygon, setPolygon] = useState<any>(null);
  const [polygonAnalysis, setPolygonAnalysis] = useState<any>(null);

  /* 🌍 Load NDVI layer */
  useEffect(() => {
    fetch("http://127.0.0.1:5001/api/satellite/curimana")
      .then((res) => res.json())
      .then((data) => setTileUrl(data?.data?.tile_url ?? null))
      .catch((err) => console.error("Error fetching tile:", err));
  }, []);

  /* 🧠 POLYGON ANALYSIS */
  useEffect(() => {
    if (!polygon) return;

    const analyzePolygon = async () => {
      try {
        const res = await fetch("http://127.0.0.1:5001/api/ndvi-area", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            geometry: polygon.geometry,
          }),
        });

        const data = await res.json();
        console.log("Polygon analysis:", data);
        setPolygonAnalysis(data);
      } catch (err) {
        console.error("Polygon analysis error:", err);
      }
    };

    analyzePolygon();
  }, [polygon]);

  /* 📍 GPS */
  const handleUseLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setUserLocation({
          lat: pos.coords.latitude,
          lon: pos.coords.longitude,
        });
      },
      (err) => console.error("Location error:", err)
    );
  };

  /* 🔍 SEARCH */
  const handleSearch = async () => {
    if (!searchQuery) return;

    try {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${searchQuery}`
      );
      const data = await res.json();

      if (data.length > 0) {
        setUserLocation({
          lat: parseFloat(data[0].lat),
          lon: parseFloat(data[0].lon),
        });
      }
    } catch (err) {
      console.error("Search error:", err);
    }
  };

  /* 🎨 Marker style */
  const getMarkerIcon = (status: string) => {
    let color = "blue";

    if (status === "Low vegetation / degraded") color = "red";
    else if (status === "Moderate vegetation") color = "orange";
    else if (status === "Healthy vegetation") color = "green";

    return new L.Icon({
      iconUrl: `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-${color}.png`,
      shadowUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
      iconSize: [25, 41],
      iconAnchor: [12, 41],
    });
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">

      {/* SEARCH */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-[1000] w-[90%] max-w-[360px]">
        <div className="flex bg-white/80 backdrop-blur-md rounded-full shadow-md overflow-hidden">
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search location..."
            className="flex-1 px-4 py-2 text-sm outline-none bg-transparent"
          />
          <button
            onClick={handleSearch}
            className="bg-green-600 text-white px-4 text-sm hover:bg-green-700"
          >
            Search
          </button>
        </div>
      </div>

      {/* GPS */}
      <div className="absolute top-20 left-3 z-[1000]">
        <button
          onClick={handleUseLocation}
          className="bg-white shadow-md rounded-full w-10 h-10 flex items-center justify-center"
        >
          📍
        </button>
      </div>

      <MapContainer
        center={[-8.434167, -75.148083]}
        zoom={12}
        style={{ height: "100%", width: "100%" }}
        attributionControl={false}
      >
        <MapController userLocation={userLocation} />

        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {tileUrl && <TileLayer url={tileUrl} opacity={0.45} />}

        <MapClickHandler setClickedPoint={setClickedPoint} />

        <DrawControl setPolygon={setPolygon} />

        {clickedPoint && (
          <Marker
            position={[clickedPoint.lat, clickedPoint.lon]}
            icon={getMarkerIcon(clickedPoint.status)}
          >
            <Popup>
              <strong>NDVI:</strong> {clickedPoint.ndvi?.toFixed(2)} <br />
              <strong>Status:</strong> {clickedPoint.status}
            </Popup>
          </Marker>
        )}
      </MapContainer>

      {/* INSTRUCTION */}
      {!clickedPoint && !polygon && (
        <div className="absolute top-[70px] left-1/2 -translate-x-1/2 z-[1000] bg-white/70 px-4 py-2 rounded-full text-sm shadow-md">
          👉 Click or draw a polygon
        </div>
      )}

      {/* POLYGON STATUS */}
      {polygon && !polygonAnalysis && (
        <div className="absolute top-[70px] left-1/2 -translate-x-1/2 z-[1000] bg-green-600 text-white px-4 py-2 rounded-full text-sm shadow-md">
          ✅ Area selected — analyzing...
        </div>
      )}

      {/* ANALYSIS PANEL */}
      {polygonAnalysis && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-[1000]
          bg-white/90 px-5 py-4 rounded-xl shadow-lg text-sm w-[260px]">

          <div className="font-semibold mb-2">📊 Land Analysis</div>

          <div><strong>NDVI:</strong> {polygonAnalysis.ndvi?.toFixed(2)}</div>
          <div><strong>Status:</strong> {polygonAnalysis.status}</div>

        </div>
      )}

      {/* LEGEND */}
      <div className="absolute bottom-4 right-4 z-[1000] bg-white/80 p-3 rounded-lg shadow text-xs">
        <div className="font-semibold mb-2">NDVI</div>
        <div className="flex gap-2"><div className="w-4 h-4 bg-red-500" />Low</div>
        <div className="flex gap-2"><div className="w-4 h-4 bg-yellow-400" />Moderate</div>
        <div className="flex gap-2"><div className="w-4 h-4 bg-green-600" />Healthy</div>
      </div>

    </div>
  );
};

export default CurimanaMap;