import { Marker, Popup } from "react-leaflet";

type Props = {
  visible: boolean;
};

export default function DroneLayer({
  visible,
}: Props) {
  if (!visible) return null;

  return (
    <Marker position={[-8.4509, -75.0502]}>
      <Popup>
        <div className="space-y-1">
          <h3 className="font-bold">Drone Mission</h3>

          <p>Status: Verified</p>

          <p>Altitude: 120 m</p>

          <p>Images: 842</p>

          <p>Orthomosaic: Available</p>

          <p>3D Reconstruction: Ready</p>
        </div>
      </Popup>
    </Marker>
  );
}