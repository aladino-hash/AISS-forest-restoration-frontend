interface RestorationJourneyProps {
  children: React.ReactNode;
}

export default function RestorationJourney({
  children,
}: RestorationJourneyProps) {
  return (
    <section className="w-full">
      {/* ==========================================================
          Hero
      ========================================================== */}

      <div className="relative overflow-hidden rounded-t-3xl border border-b-0 border-emerald-100 bg-gradient-to-r from-emerald-50 to-emerald-100 px-8 py-10">
        {/* Decorative forest background */}

        <div className="pointer-events-none absolute inset-y-0 right-0 w-[72%] overflow-hidden">
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-emerald-50 via-emerald-50/20 via-45% to-transparent" />

          <img
            src="/images/forest_image.png"
            alt=""
            className="absolute inset-y-0 right-0 h-full w-full object-cover opacity-95"
          />
        </div>

        {/* Header */}

        <div className="relative z-20 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-600">
            Restoration Journey
          </p>

          <h2 className="mt-2 text-3xl font-bold text-gray-900">
            Let's understand your land
          </h2>

          <p className="mt-3 leading-7 text-gray-600">
            We'll guide you through the analysis one step at a time
            <br />
            before creating your restoration project.
          </p>
        </div>
      </div>

      {/* ==========================================================
          Step Content
      ========================================================== */}

      <div className="rounded-b-3xl border border-emerald-100 bg-white px-8 py-8">
        {children}
      </div>
    </section>
  );
}