interface StepWorkspacePreviewProps {
  serviceType: string;
  capability: string;
  coverage: string;
}

export default function StepWorkspacePreview({
  serviceType,
  capability,
  coverage,
}: StepWorkspacePreviewProps) {
  if (!coverage) return null;

  return (
    <div className="mt-8 rounded-2xl border border-emerald-200 bg-gradient-to-br from-white to-emerald-50 p-6 shadow-sm">

      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
        YOUR FUTURE WORKSPACE
      </p>

      <h3 className="mt-3 text-2xl font-bold text-gray-900">
        🤝 Your Provider Workspace
      </h3>

      <p className="mt-3 text-gray-700 leading-7">
        Based on your expertise and service area, FYNOS AI will prepare
        a personalized Provider Workspace connecting you with restoration
        opportunities across the network.
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-3">

        <div className="rounded-xl border bg-white p-4">
          <p className="text-xs uppercase text-gray-500">Service</p>
          <p className="mt-2 font-semibold text-gray-900">
            {serviceType}
          </p>
        </div>

        <div className="rounded-xl border bg-white p-4">
          <p className="text-xs uppercase text-gray-500">Expertise</p>
          <p className="mt-2 font-semibold text-gray-900">
            {capability}
          </p>
        </div>

        <div className="rounded-xl border bg-white p-4">
          <p className="text-xs uppercase text-gray-500">Coverage</p>
          <p className="mt-2 font-semibold text-gray-900">
            {coverage}
          </p>
        </div>

      </div>

      <div className="mt-8 rounded-xl border border-emerald-100 bg-white p-5">

        <h4 className="font-semibold text-gray-900">
          FYNOS AI will prepare:
        </h4>

        <div className="mt-4 grid gap-3 md:grid-cols-2">

          <div>✅ AI-matched restoration projects</div>
          <div>✅ Nearby landowners needing your services</div>
          <div>✅ Project invitations</div>
          <div>✅ Organization partnerships</div>
          <div>✅ Verified provider profile</div>
          <div>✅ Performance dashboard</div>
          <div>✅ Impact statistics</div>
          <div>✅ Collaboration opportunities</div>

        </div>

      </div>

    </div>
  );
}