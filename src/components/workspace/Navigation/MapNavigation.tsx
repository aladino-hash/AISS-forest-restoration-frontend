import { useMap } from "react-leaflet";
import { useEffect, useState } from "react";

export default function MapNavigation() {

  const map = useMap();

  const [homeView, setHomeView] = useState<{
    center: [number, number];
    zoom: number;
  } | null>(null);

  useEffect(() => {
    setHomeView({
      center: map.getCenter()
        ? [map.getCenter().lat, map.getCenter().lng]
        : [-8.45, -75.05],
      zoom: map.getZoom(),
    });
  }, [map]);

  return (
    <div className="absolute right-6 top-6 z-[1000] flex flex-col gap-3">

      <div className="overflow-hidden rounded-2xl border border-white/40 bg-white/90 shadow-xl backdrop-blur-xl">

        <button
          onClick={() => map.zoomIn()}
          title="Zoom In"
          className="flex h-11 w-11 items-center justify-center border-b border-gray-200 text-xl transition hover:bg-emerald-50"
        >
          +
        </button>

        <button
          onClick={() => map.zoomOut()}
          title="Zoom Out"
          className="flex h-11 w-11 items-center justify-center text-xl transition hover:bg-emerald-50"
        >
          −
        </button>

      </div>

      <div className="overflow-hidden rounded-2xl border border-white/40 bg-white/90 shadow-xl backdrop-blur-xl">

        <button
          title="Center Project"
          onClick={() => {
            if (!homeView) return;

            map.flyTo(
              homeView.center,
              homeView.zoom,
              {
                animate: true,
                duration: 1.2,
              }
            );
          }}
          className="flex h-11 w-11 items-center justify-center text-lg transition hover:bg-emerald-50"
        >
          🎯
        </button>

      </div>

    </div>
  );
}