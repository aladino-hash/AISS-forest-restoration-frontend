interface StepStrategyProps {
  strategy?: {
    strategy?: {
      landscape?: {
        summary?: string;
      };
      implementation?: {
        summary?: string;
      };
      monitoring?: {
        summary?: string;
      };
      next_actions?: string[];
    };
  };
}

export default function StepStrategy({
  strategy,
}: StepStrategyProps) {

  const recommendation = strategy?.strategy;

  if (!recommendation) {
    return (
      <section>
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-600">
          Step 4 of 6
        </p>

        <h2 className="mt-3 text-3xl font-bold text-gray-900">
          Your restoration strategy
        </h2>

        <p className="mt-8 text-gray-600">
          No restoration strategy is available yet.
        </p>
      </section>
    );
  }

  return (
    <section>

      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-600">
        Step 4 of 6
      </p>

      <h2 className="mt-3 text-3xl font-bold text-gray-900">
        AI Restoration Strategy
      </h2>

      <p className="mt-4 text-gray-600 leading-8">
        FYNOS AI generated the following restoration roadmap for this landscape.
      </p>

      <div className="mt-8 space-y-5">

        <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-6">
          <h3 className="font-semibold text-emerald-700">
            🌿 Landscape Assessment
          </h3>

          <p className="mt-3 leading-8 text-gray-700">
            {recommendation.landscape?.summary}
          </p>
        </div>

        <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
          <h3 className="font-semibold text-blue-700">
            🛠 Implementation Plan
          </h3>

          <p className="mt-3 leading-8 text-gray-700">
            {recommendation.implementation?.summary}
          </p>
        </div>

        <div className="rounded-2xl border border-amber-100 bg-amber-50 p-6">
          <h3 className="font-semibold text-amber-700">
            📈 Monitoring Plan
          </h3>

          <p className="mt-3 leading-8 text-gray-700">
            {recommendation.monitoring?.summary}
          </p>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-6">
          <h3 className="font-semibold text-gray-900">
            ✅ Immediate Next Actions
          </h3>

          <ul className="mt-4 space-y-3">
            {(recommendation.next_actions ?? []).map((action, index) => (
              <li
                key={index}
                className="flex items-start gap-3"
              >
                <span className="mt-1 text-emerald-600">✔</span>
                <span className="text-gray-700">{action}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>

    </section>
  );
}