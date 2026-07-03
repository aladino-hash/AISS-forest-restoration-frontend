import { TileLayer } from "react-leaflet";

export default function BaseImagery() {
  return (
    <TileLayer
      attribution="© Esri"
      url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
    />
  );
}