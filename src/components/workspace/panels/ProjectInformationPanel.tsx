import AIAnalysisPanel from "./AIAnalysisPanel";
import AIRestorationCard from "./AIRestorationCard";
import AIStrategyPanel from "./AIStrategyPanel";
import VegetationPanel from "./VegetationPanel";
import { workspaceConfig } from "../navigation/workspaceConfig";

type MissionState =
  | "passport"
  | "analysis"
  | "strategy"
  | "visualization"
  | "execution"
  | "monitoring";

type Props = {
  project: any;
  activeTool: string;

  missionState: MissionState;
  setMissionState: React.Dispatch<
    React.SetStateAction<MissionState>
  >;

  visualizationMode: "current" | "future";
  setVisualizationMode: React.Dispatch<
    React.SetStateAction<"current" | "future">
  >;
};

export default function ProjectInformationPanel({
  project,
  activeTool,
  missionState,
  setMissionState,
  visualizationMode,
  setVisualizationMode,
}: Props) {

   console.log("Active Workspace:", activeTool);
   const workspace =
      workspaceConfig[
        activeTool as keyof typeof workspaceConfig
      ] ?? workspaceConfig["Project Boundary"];

  return (
    <div
      className="
        h-[calc(100vh-120px)]
        w-[320px]
        overflow-y-auto
        rounded-3xl
        border
        border-white/20
        bg-white/90
        p-5
        shadow-2xl
        backdrop-blur-xl
        scrollbar-thin
        scrollbar-track-transparent
        scrollbar-thumb-gray-300
        scrollbar-thumb-rounded-full
      "
    >

      <h2 className="text-2xl font-semibold text-gray-900">
        {activeTool}
      </h2>

      <p className="mt-1 text-sm text-gray-500">
        {workspace.description}
      </p>

      {/* Health */}

      <div className="mt-5 rounded-2xl bg-emerald-50 p-4">

        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-700">
          Project Health
        </p>

        <div className="mt-2 flex items-end justify-between">

          <span className="text-2xl font-bold text-emerald-700">
            {workspace.score}
          </span>

          <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
            {workspace.status}
          </span>

        </div>

      </div>

      {/* =====================================
          Main Mission Content
      ===================================== */}

      <div className="mt-5">

        {/* ================= Passport ================= */}

        {missionState === "passport" && (

          <>

            <AIRestorationCard
              onStart={() => setMissionState("analysis")}
            />

            <div className="mt-5">

              {activeTool === "Vegetation" ? (

                <VegetationPanel
                  project={project}
                />

              ) : (

                <div className="space-y-1">

                  <InfoRow
                    label="Project"
                    value={project.name ?? "Untitled Project"}
                  />

                  <InfoRow
                    label="Area"
                    value={`${project.area ?? "--"} ha`}
                  />

                  <StatusRow
                    label="Verification"
                    status={project.verification ?? "Satellite"}
                  />

                  <StatusRow
                    label="Stage"
                    status={project.stage ?? "Planning"}
                  />

                  <InfoRow
                    label="Ecosystem"
                    value={project.assessment.ecosystem}
                  />

                  <InfoRow
                    label="Restoration Potential"
                    value={project.assessment.restorationPotential}
                  />

                  <InfoRow
                    label="Risk"
                    value={project.assessment.risk}
                  />

                </div>

              )}

            </div>

          </>

        )}

        {/* ================= Analysis ================= */}

        {missionState === "analysis" && (

          <AIAnalysisPanel
            onComplete={() =>
              setMissionState("strategy")
            }
          />

        )}

        {/* ================= Strategy ================= */}

        {missionState === "strategy" && (

          <AIStrategyPanel
            onApprove={() => {
              setMissionState("visualization");
              setVisualizationMode("future");
            }}
          />

        )}

        {/* ================= Visualization ================= */}

        {missionState === "visualization" && (

          <div className="mt-5 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">

            <p className="text-sm font-semibold text-emerald-700">
              🌱 Applying Restoration Plan
            </p>

            <p className="mt-3 text-sm text-gray-600">
              The Digital Twin is now visualizing your future restored landscape.
            </p>

          </div>

        )}

      </div>

      {/* Footer */}

      <button className="mt-5 flex w-full items-center justify-center rounded-2xl bg-gray-100 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-200">
        View all details →
      </button>

    </div>
  );
}

type RowProps = {
  label: string;
  value: string;
};

function InfoRow({
  label,
  value,
}: RowProps) {
  return (
    <div className="flex items-center justify-between border-b border-gray-100 pb-1">

      <span className="text-sm text-gray-500">
        {label}
      </span>

      <span className="max-w-[150px] text-right text-sm font-semibold text-gray-900">
        {value}
      </span>

    </div>
  );
}

type StatusRowProps = {
  label: string;
  status: string;
};

function StatusRow({
  label,
  status,
}: StatusRowProps) {

  const color =
    status === "Drone Verified"
      ? "bg-green-100 text-green-700"
      : status === "Satellite"
      ? "bg-blue-100 text-blue-700"
      : status === "Planning"
      ? "bg-slate-100 text-slate-700"
      : status === "Planting"
      ? "bg-lime-100 text-lime-700"
      : status === "Monitoring"
      ? "bg-emerald-100 text-emerald-700"
      : status === "Completed"
      ? "bg-purple-100 text-purple-700"
      : "bg-amber-100 text-amber-700";

  return (
    <div className="flex items-center justify-between border-b border-gray-100 pb-2">

      <span className="text-sm text-gray-500">
        {label}
      </span>

      <span
        className={`rounded-full px-3 py-1 text-xs font-semibold ${color}`}
      >
        {status}
      </span>

    </div>
  );
}