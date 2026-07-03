import { Polygon } from "react-leaflet";

type Props = {
  polygon: [number, number][];
  visible: boolean;
};

export default function ProjectBoundary({
  polygon,
  visible,
}: Props) {
  if (!visible) return null;

  return (
    <Polygon
      positions={polygon}
      pathOptions={{
        color: "#16a34a",
        weight: 4,
        fillColor: "#22c55e",
        fillOpacity: 0.15,
      }}
    />
  );
}