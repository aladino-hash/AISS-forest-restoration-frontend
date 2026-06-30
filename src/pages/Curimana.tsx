import { useLocation } from "react-router-dom";
import CurimanaMap from "../components/CurimanaMap";

export default function Curimana() {
  const location = useLocation();

  const initialLocation =
    location.state?.initialLocation ?? undefined;

  return (
    <div className="h-screen w-full">
      <CurimanaMap initialLocation={initialLocation} />
    </div>
  );
}