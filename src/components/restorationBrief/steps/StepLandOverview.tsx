interface StepLandOverviewProps {
  area: string;
  ecosystem: string;
  risk: string;
  restorationPotential: string;
}

export default function StepLandOverview({
  area,
  ecosystem,
  risk,
  restorationPotential,
}: StepLandOverviewProps) {
  return (
    <section>

      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-600">
        Step 1 of 6
      </p>

      <h2 className="mt-3 text-3xl font-bold text-gray-900">
        Understanding your land
      </h2>

      <p className="mt-4 text-gray-600">
        Here's what FYNOS AI detected from satellite imagery.
      </p>

      <div className="mt-8 grid grid-cols-2 gap-4">

        <div className="rounded-2xl bg-emerald-50 p-5">
          <p className="text-xs uppercase text-gray-500">
            Area
          </p>

          <p className="mt-2 text-xl font-bold">
            {area}
          </p>
        </div>

        <div className="rounded-2xl bg-emerald-50 p-5">
          <p className="text-xs uppercase text-gray-500">
            Ecosystem
          </p>

          <p className="mt-2 text-xl font-bold">
            {ecosystem}
          </p>
        </div>

        <div className="rounded-2xl bg-emerald-50 p-5">
          <p className="text-xs uppercase text-gray-500">
            Risk
          </p>

          <p className="mt-2 text-xl font-bold">
            {risk}
          </p>
        </div>

        <div className="rounded-2xl bg-emerald-50 p-5">
          <p className="text-xs uppercase text-gray-500">
            Potential
          </p>

          <p className="mt-2 text-xl font-bold text-emerald-700">
            {restorationPotential}
          </p>
        </div>

      </div>

    </section>
  );
}