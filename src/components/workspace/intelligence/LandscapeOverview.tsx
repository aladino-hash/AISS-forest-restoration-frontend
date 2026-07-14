import { useLandscapeContext } from "./context/LandscapeContext";
import { useWorkspaceSession } from "@/components/workspace/core/context/WorkspaceSessionContext";

export default function LandscapeOverview() {
  const { selectedLandscape } = useLandscapeContext();
  const { session } = useWorkspaceSession();

  if (!session) return null;

  const { profile } = session;

  return (
    <section className="rounded-3xl border border-emerald-100 bg-white p-8 shadow-sm">

      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">
        {profile.workspaceName}
      </p>

      <h1 className="mt-3 text-4xl font-bold text-gray-900">
        {selectedLandscape.name}
      </h1>

      <div className="mt-4 flex flex-wrap gap-3">

        <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-700">
          {profile.organizationType}
        </span>

        {profile.focusAreas.map((focus) => (
          <span
            key={focus}
            className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700"
          >
            {focus}
          </span>
        ))}

      </div>

      <div className="mt-4 flex items-center gap-3">

        <span className="text-sm text-gray-500">
          Restoration Priority
        </span>

        <span
          className={`rounded-full px-4 py-1 text-sm font-semibold ${
            selectedLandscape.priority === "Very High"
              ? "bg-red-100 text-red-700"
              : selectedLandscape.priority === "High"
              ? "bg-amber-100 text-amber-700"
              : "bg-blue-100 text-blue-700"
          }`}
        >
          {selectedLandscape.priority}
        </span>

      </div>

      <p className="mt-6 max-w-3xl leading-7 text-gray-600">
        Monitor restoration opportunities, analyze ecosystem dynamics,
        coordinate organizations, discover funding opportunities and
        generate AI-powered restoration intelligence.
      </p>

    </section>
  );
}