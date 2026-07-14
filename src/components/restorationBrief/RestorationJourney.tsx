interface RestorationJourneyProps {
  children: React.ReactNode;
}

export default function RestorationJourney({
  children,
}: RestorationJourneyProps) {
  return (
    <section className="mx-auto mt-10 max-w-4xl">
      <div className="rounded-3xl border border-emerald-100 bg-white shadow-sm overflow-hidden">

        <div className="border-b border-emerald-100 bg-emerald-50 px-6 py-5">

          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-600">
            Restoration Journey
          </p>

          <h2 className="mt-2 text-2xl font-bold text-gray-900">
            Let's understand your land
          </h2>

          <p className="mt-3 text-gray-600 leading-7">
            We'll guide you through the analysis one step at a time before creating your restoration project.
          </p>

        </div>

        <div className="p-6 md:p-8">
          {children}
        </div>

      </div>
    </section>
  );
}