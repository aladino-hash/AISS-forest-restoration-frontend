import SpeciesInfoRow from "../profile/SpeciesInfoRow";

interface AIInterpretationCardProps {
  species?: any;
}

export default function AIInterpretationCard({
  species,
}: AIInterpretationCardProps) {
  const knowledge = species?.knowledge;

  if (!knowledge) {
    return (
      <section className="rounded-2xl border border-gray-200 bg-white p-8">
        <h2 className="text-3xl font-bold text-gray-900">
          🤖 AI Interpretation
        </h2>

        <p className="mt-3 text-gray-600">
          AI explanation of why this species was recommended.
        </p>

        <div className="mt-8 rounded-xl border border-gray-100 bg-gray-50 p-6 text-center">
          <p className="text-gray-500">
            No AI interpretation available.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="rounded-2xl border border-gray-200 bg-white p-8">

      {/* =======================================================
          Header
      ======================================================= */}

      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900">
          🤖 AI Interpretation
        </h2>

        <p className="mt-3 text-gray-600">
          Why FYNOS Intelligence selected this species for restoration.
        </p>
      </div>

      {/* =======================================================
          Why Selected
      ======================================================= */}

      <SpeciesInfoRow
        label="Why Selected"
        value={knowledge?.why_selected}
      />

      {/* =======================================================
          Expected Benefits
      ======================================================= */}

      {knowledge?.expected_benefits?.length > 0 && (
        <div className="mt-8">

          <h3 className="mb-4 text-lg font-semibold text-gray-900">
            Expected Benefits
          </h3>

          <ul className="space-y-3 text-gray-700">

            {knowledge.expected_benefits.map(
              (benefit: string, index: number) => (
                <li
                  key={index}
                  className="flex items-start gap-3"
                >
                  <span className="mt-1 text-emerald-600">
                    ✓
                  </span>

                  <span>{benefit}</span>
                </li>
              )
            )}

          </ul>

        </div>
      )}

    </section>
  );
}