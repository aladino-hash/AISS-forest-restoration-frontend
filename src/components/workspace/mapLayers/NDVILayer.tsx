import { Popup, Rectangle } from "react-leaflet";

type Props = {
  visible: boolean;
};

export default function NDVILayer({ visible }: Props) {
  if (!visible) return null;

  return (
    <Rectangle
      bounds={[
        [-8.4525, -75.0525],
        [-8.4485, -75.0485],
      ]}
      pathOptions={{
        color: "#166534",
        fillColor: "#4ade80",
        fillOpacity: 0.22,
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
    </Rectangle>
  );
}