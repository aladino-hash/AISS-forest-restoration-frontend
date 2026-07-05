import { useLocation } from "react-router-dom";
import ProjectMap from "../components/workspace/ProjectMap";

export default function RestorationWorkspace() {
  const location = useLocation();
  const project = location.state?.project;

  if (!project) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-50">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">
            No Restoration Project Found
          </h1>

          <p className="mt-4 text-gray-600">
            Start by analyzing a property in the Discovery Engine.
          </p>
        </div>
      </main>
    );
  }

  console.group("🌳 Restoration Project");
  console.log(project);
  console.groupEnd();

  return (
    <main className="relative h-screen w-screen overflow-hidden">
      {/* Digital Twin */}

      <ProjectMap project={project} />
    </main>
  );
}