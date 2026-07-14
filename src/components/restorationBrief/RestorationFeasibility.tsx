interface RestorationFeasibilityProps {
  area: string;
  ecosystem: string;
  risk: string;
  restorationPotential: string;
}

export default function RestorationFeasibility({
  area,
  ecosystem,
  risk,
  restorationPotential,
}: RestorationFeasibilityProps) {

  return (
    <>
      <section className="rounded-3xl border border-emerald-100 bg-white p-8 shadow-sm">

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
                Your Land
              </p>

              <h2 className="mt-3 text-3xl font-bold text-gray-900">
                Restoration Feasibility
              </h2>

              <p className="mt-4 leading-8 text-gray-600">
                Before designing a restoration strategy, FYNOS AI evaluates whether
                the land has the ecological conditions needed for successful restoration.
                The indicators below summarize the site's current restoration feasibility.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">

                <div className="rounded-2xl bg-emerald-50 p-4">
                  <p className="text-xs uppercase tracking-wide text-gray-500">
                    Area
                  </p>
                  <p className="mt-2 text-lg font-semibold text-gray-900">
                    {area}
                  </p>
                </div>

                <div className="rounded-2xl bg-emerald-50 p-4">
                  <p className="text-xs uppercase tracking-wide text-gray-500">
                    Ecosystem
                  </p>
                  <p className="mt-2 text-lg font-semibold text-gray-900">
                    {ecosystem}
                  </p>
                </div>

                <div className="rounded-2xl bg-emerald-50 p-4">
                  <p className="text-xs uppercase tracking-wide text-gray-500">
                    Risk
                  </p>
                  <p className="mt-2 text-lg font-semibold text-gray-900">
                    {risk}
                  </p>
                </div>

                <div className="rounded-2xl bg-emerald-50 p-4">
                  <p className="text-xs uppercase tracking-wide text-gray-500">
                    Restoration Potential
                  </p>
                  <p className="mt-2 text-lg font-semibold text-gray-900">
                    {restorationPotential}
                  </p>
                </div>

              </div>

            </section>
    </>
  );
}