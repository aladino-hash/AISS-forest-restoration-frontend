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

// ✅ Click handler
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

// ✅ Map controller
const MapController = ({ userLocation }: any) => {
  const map = useMapEvents({});

  useEffect(() => {
    if (userLocation) {
      map.setView([userLocation.lat, userLocation.lon], 13);
    }
  }, [userLocation]);

  return null;
};

const CurimanaMap = () => {
  const [tileUrl, setTileUrl] = useState<string | null>(null);
  const [clickedPoint, setClickedPoint] = useState<any>(null);
  const [userLocation, setUserLocation] = useState<any>(null);
  const [searchQuery, setSearchQuery] = useState("");

  // 🌍 Load NDVI layer
  useEffect(() => {
    fetch("http://127.0.0.1:5001/api/satellite/curimana")
      .then((res) => res.json())
      .then((data) => setTileUrl(data?.data?.tile_url ?? null))
      .catch((err) => console.error("Error fetching tile:", err));
  }, []);

  // 📍 GPS
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

  // 🔍 Search
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

  // 🎨 Marker style
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

      {/* 🔍 SEARCH BAR */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-[1000] w-[90%] max-w-[360px]">
        <div className="flex bg-white/80 backdrop-blur-md rounded-full shadow-md overflow-hidden">

          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search city, region, or coordinates..."
            className="flex-1 px-4 py-2 text-sm outline-none bg-transparent"
          />

          <button
            onClick={handleSearch}
            className="bg-green-600 text-white px-4 text-sm hover:bg-green-700 transition"
          >
            Search
          </button>

        </div>
      </div>

      {/* 📍 GPS BUTTON (LEFT SIDE MAP CONTROL) */}
      <div className="absolute top-20 left-3 z-[1000]">
        <button
          onClick={handleUseLocation}
          className="bg-white shadow-md rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-100 transition"
          title="Go to my location"
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

        {clickedPoint && (
          <Marker
            position={[clickedPoint.lat, clickedPoint.lon]}
            icon={getMarkerIcon(clickedPoint.status)}
          >
            <Popup offset={[0, -20]}>
              <div className="text-sm max-w-[220px]">
                <div className="font-semibold mb-1">
                  NDVI: {clickedPoint.ndvi?.toFixed(2)}
                </div>

                <div className="mb-2">
                  <strong>Status:</strong> {clickedPoint.status}
                </div>

                <div className="text-gray-600 text-xs">
                  {clickedPoint.ndvi < 0.4 &&
                    "⚠️ Area likely degraded. Good candidate for restoration."}

                  {clickedPoint.ndvi >= 0.4 &&
                    clickedPoint.ndvi < 0.6 &&
                    "🌱 Moderate vegetation. Potential for agroforestry improvement."}

                  {clickedPoint.ndvi >= 0.6 &&
                    "🌳 Healthy vegetation. Strong conservation status."}
                </div>
              </div>
            </Popup>
          </Marker>
        )}
      </MapContainer>

      {/* 🧠 Instruction */}
      {!clickedPoint && (
        <div className="absolute top-[70px] left-1/2 -translate-x-1/2 z-[1000] bg-white/70 backdrop-blur-md px-4 py-2 rounded-full text-sm shadow-md text-gray-700">
          👉 Click anywhere to analyze vegetation
        </div>
      )}

      {/* 🟩 Legend */}
      <div className="pointer-events-none absolute bottom-4 right-4 z-[1000] bg-white/80 backdrop-blur-sm p-3 rounded-lg shadow text-xs">
        <div className="font-semibold mb-2">NDVI</div>

        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-red-500"></div>
          <span>Low vegetation</span>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-yellow-400"></div>
          <span>Moderate</span>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-green-600"></div>
          <span>Healthy</span>
        </div>
      </div>

      {/* Attribution */}
      <div className="pointer-events-none absolute bottom-1 left-2 text-[10px] text-gray-400 opacity-90 z-[1000]">
        © OpenStreetMap contributors
      </div>
    </div>
  );
};

export default CurimanaMap;