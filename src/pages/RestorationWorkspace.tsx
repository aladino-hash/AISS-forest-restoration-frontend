import { useLocation } from "react-router-dom";
import ProjectMap from "../components/workspace/ProjectMap";

export default function RestorationWorkspace() {
  const location = useLocation();
  const project = location.state?.project;

  if (!project) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-slate-50">
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

  console.log("Workspace project:", project);

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-7xl px-8 py-10">

        {/* Header */}

        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-600">
          Restoration Workspace
        </p>

        <h1 className="mt-3 text-4xl font-bold text-gray-900">
          {project.assessment.ecosystem} Restoration Project
        </h1>

        <p className="mt-4 max-w-3xl text-lg leading-8 text-gray-600">
          This workspace will guide the implementation, monitoring and
          long-term management of your restoration project.
        </p>

        {/* Workspace */}

        <div className="mt-10 grid gap-8 lg:grid-cols-4">

          {/* Main Map */}

          <section className="lg:col-span-3 rounded-3xl bg-white p-8 shadow-sm">

            <h2 className="text-2xl font-bold text-gray-900">
              Project Map
            </h2>

            <p className="mt-3 text-gray-600">
              Explore your restoration project. This map will become the
              operational center for planning, monitoring, field observations,
              and AI-assisted restoration.
            </p>

            <div className="mt-6 h-[700px] overflow-hidden rounded-2xl border border-gray-200">
              <ProjectMap project={project} />
            </div>

          </section>

          {/* Right Sidebar */}

          <aside className="space-y-8">

            <section className="rounded-3xl bg-white p-6 shadow-sm">

              <h2 className="text-xl font-bold">
                AI Project Summary
              </h2>

              <p className="mt-4 text-gray-600">
                {project.assessment.ecologicalSummary}
              </p>

            </section>

            <section className="rounded-3xl bg-white p-6 shadow-sm">

              <h2 className="text-xl font-bold">
                Project Status
              </h2>

              <div className="mt-5 space-y-4">

                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Stage</span>
                  <span className="font-semibold text-emerald-700">
                    Planning
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Progress</span>
                  <span className="font-semibold">
                    0%
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Created</span>
                  <span className="font-semibold">
                    Today
                  </span>
                </div>

              </div>

            </section>

          </aside>

        </div>

      </div>
    </main>
  );
}