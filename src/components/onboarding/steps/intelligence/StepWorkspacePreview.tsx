interface StepWorkspacePreviewProps {
  organizationType: string;
  focusArea: string;
  geography: string;
}

export default function StepWorkspacePreview({
  organizationType,
  focusArea,
  geography,
}: StepWorkspacePreviewProps) {
  if (!geography) return null;

  return (
    <div className="mt-8 rounded-2xl border border-emerald-200 bg-gradient-to-br from-white to-emerald-50 p-6 shadow-sm">

      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
        YOUR FUTURE WORKSPACE
      </p>

      <h3 className="mt-3 text-2xl font-bold text-gray-900">
        🌍 Your Restoration Intelligence Workspace
      </h3>

      <p className="mt-3 text-gray-700 leading-7">
        Based on your organization, priorities and geographic focus,
        FYNOS AI will prepare a Restoration Intelligence Workspace
        designed specifically for your mission.
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-3">

        <div className="rounded-xl border bg-white p-4">
          <p className="text-xs uppercase text-gray-500">Organization</p>
          <p className="mt-2 font-semibold text-gray-900">
            {organizationType}
          </p>
        </div>

        <div className="rounded-xl border bg-white p-4">
          <p className="text-xs uppercase text-gray-500">Primary Focus</p>
          <p className="mt-2 font-semibold text-gray-900">
            {focusArea}
          </p>
        </div>

        <div className="rounded-xl border bg-white p-4">
          <p className="text-xs uppercase text-gray-500">Coverage</p>
          <p className="mt-2 font-semibold text-gray-900">
            {geography}
          </p>
        </div>

      </div>

      <div className="mt-8 rounded-xl border border-emerald-100 bg-white p-5">

        <h4 className="font-semibold text-gray-900">
          FYNOS AI will prepare:
        </h4>

        <div className="mt-4 grid gap-3 md:grid-cols-2">

          <div>✅ Personalized intelligence dashboard</div>
          <div>✅ Restoration opportunity maps</div>
          <div>✅ AI restoration recommendations</div>
          <div>✅ Environmental datasets</div>
          <div>✅ Organizations working in your region</div>
          <div>✅ Funding opportunities</div>
          <div>✅ Satellite monitoring tools</div>
          <div>✅ Downloadable reports</div>

        </div>

      </div>

    </div>
  );
}