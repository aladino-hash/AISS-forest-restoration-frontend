import { Popup, Rectangle } from "react-leaflet";

type Props = {
  visible: boolean;
};

export default function VegetationLayer({ visible }: Props) {
  if (!visible) return null;

  return (
    <Rectangle
      bounds={[
        [-8.4525, -75.0525],
        [-8.4485, -75.0485],
      ]}
      pathOptions={{
        color: "#15803d",
        fillColor: "#22c55e",
        fillOpacity: 0.12,
        weight: 2,
      }}
    >
      <Popup>
        <div>
          <h3 className="font-bold">Vegetation Analysis</h3>
          <p>Primary cover: Secondary Forest</p>
          <p>Vegetation Density: 73%</p>
          <p>Canopy Cover: Moderate</p>
        </div>
      </Popup>
    </Rectangle>
  );
}