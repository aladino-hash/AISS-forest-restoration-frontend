import { useLocation } from "react-router-dom";

export default function RestorationHub() {
  const location = useLocation();
  const project = location.state?.project;

  return (
    <div className="p-6">

      <h1 className="text-2xl font-bold mb-4">
        🌱 Restoration Hub
      </h1>

      {!project && (
        <div className="text-gray-500">
          No project selected yet.
        </div>
      )}

      {project && (
        <div className="bg-white rounded-xl shadow-md p-5">

          <h2 className="text-lg font-semibold mb-2">
            {project.name}
          </h2>

          <div className="text-sm text-gray-600 space-y-1">
            <div><b>Status:</b> {project.status}</div>
            <div><b>Ecosystem:</b> {project.ecosystem}</div>
            <div><b>NDVI:</b> {project.ndvi?.toFixed(2)}</div>
          </div>

        </div>
      )}

    </div>
  );
}