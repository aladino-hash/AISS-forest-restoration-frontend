import { Popup, Rectangle } from "react-leaflet";

type Props = {
  visible: boolean;
};

export default function DEMLayer({
  visible,
}: Props) {
  if (!visible) return null;

  return (
    <Rectangle
      bounds={[
        [-8.4525, -75.0525],
        [-8.4485, -75.0485],
      ]}
      pathOptions={{
        color: "#b45309",
        fillColor: "#fbbf24",
        fillOpacity: 0.18,
        weight: 2,
      }}
    >
      <Popup>
        <div className="space-y-1">
          <h3 className="font-bold">
            Digital Elevation Model
          </h3>

          <p>Mean elevation: 177 m</p>

          <p>Mean slope: 2.3°</p>

          <p>Terrain: Flat</p>

          <p>Flood risk: Low</p>
        </div>
      </Popup>
    </Rectangle>
  );
}