import { useLocation } from "react-router-dom";
import ProjectMap from "../components/workspace/ProjectMap";
import ProjectInformationPanel from "../components/workspace/ProjectInformationPanel";
import RestorationPlanner from "../components/workspace/RestorationPlanner";

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
    <main className="min-h-screen bg-slate-50">

      {/* Header */}

      <div className="mx-auto max-w-7xl px-8 pt-8">

        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-600">
          Restoration Workspace
        </p>

        <h1 className="mt-3 text-4xl font-bold text-gray-900">
          {project.name}
        </h1>

        <p className="mt-4 max-w-3xl text-lg leading-8 text-gray-600">
          This workspace will guide the implementation, monitoring and
          long-term management of your restoration project.
        </p>

      </div>

      {/* Full Workspace */}

      <div className="mt-8 px-6 pb-6">

        <div className="relative h-[calc(100vh-180px)] overflow-hidden rounded-3xl">

          {/* Map */}

          <ProjectMap project={project} />

          {/* Project Passport */}

          <div className="absolute right-6 top-6 z-[1200] w-[360px]">

            <ProjectInformationPanel
              project={project}
            />

          </div>

        </div>

      </div>

    </main>
  );
}