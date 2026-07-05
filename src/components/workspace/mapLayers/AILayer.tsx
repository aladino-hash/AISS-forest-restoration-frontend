import { Marker, Popup } from "react-leaflet";

type Props = {
  visible: boolean;
};

export default function AILayer({ visible }: Props) {
  if (!visible) return null;

  return (
    <Marker position={[-8.4501, -75.0499]}>
      <Popup>
        <div className="space-y-1">
          <h3 className="font-bold">AI Recommendation</h3>

          <p>Increase cacao density in the northern sector.</p>

          <p>Add nitrogen-fixing species.</p>

          <p>Low erosion risk.</p>
        </div>
      </Popup>
    </Marker>
  );
}