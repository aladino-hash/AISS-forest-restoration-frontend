import { WorkspaceBlueprint } from "@/types/workspace/WorkspaceBlueprint";

type Props = {
  blueprint: WorkspaceBlueprint;
};

export default function BlueprintPreview({ blueprint }: Props) {
  return (
    <section className="mt-10 rounded-3xl border border-blue-200 bg-blue-50 p-8">
      <div className="mb-6 flex items-center gap-3">
        <span className="text-3xl">🧠</span>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-600">
            Developer Mode
          </p>

          <h2 className="text-2xl font-bold text-gray-900">
            Workspace Blueprint
          </h2>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-2">

        <div>
          <h3 className="font-semibold text-gray-900">Mission</h3>
          <p>{blueprint.stakeholder.mission}</p>

          <h3 className="mt-6 font-semibold text-gray-900">Workspace</h3>
          <p>{blueprint.stakeholder.workspace}</p>
        </div>

        <div>
          <h3 className="font-semibold text-gray-900">Modules</h3>

          <ul className="mt-2 space-y-1">
            {blueprint.modules.map((module) => (
              <li key={module}>✅ {module}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-gray-900">AI Agents</h3>

          <ul className="mt-2 space-y-1">
            {blueprint.aiAgents.map((agent) => (
              <li key={agent}>🤖 {agent}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-gray-900">Datasets</h3>

          <ul className="mt-2 space-y-1">
            {blueprint.datasets.map((dataset) => (
              <li key={dataset}>🛰️ {dataset}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-gray-900">Permissions</h3>

          <ul className="mt-2 space-y-1">
            {blueprint.permissions.map((permission) => (
              <li key={permission}>🔐 {permission}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-gray-900">Recommendations</h3>

          <ul className="mt-2 space-y-1">
            {blueprint.recommendations.map((recommendation) => (
              <li key={recommendation}>💡 {recommendation}</li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}