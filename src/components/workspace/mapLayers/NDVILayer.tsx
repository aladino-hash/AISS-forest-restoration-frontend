import { Popup, Polygon } from "react-leaflet";

type Props = {
  visible: boolean;
  polygon?: [number, number][];
};

export default function NDVILayer({
  visible,
  polygon,
}: Props) {
  if (!visible) return null;

  if (!polygon || polygon.length === 0) return null;

  return (
    <Polygon
      positions={polygon}
      pathOptions={{
        color: "#16a34a",
        fillColor: "#22c55e",
        fillOpacity: 0.35,
        weight: 2,
      }}
    >
      <Popup>
        <div>
          <h3 className="font-bold">NDVI</h3>

          <p>Average NDVI: 0.71</p>

          <p>Vegetation Health: Excellent</p>
        </div>
      </Popup>
    </Polygon>
  );
}