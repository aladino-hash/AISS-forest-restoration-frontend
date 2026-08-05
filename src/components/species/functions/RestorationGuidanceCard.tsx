import SpeciesInfoRow from "../profile/SpeciesInfoRow";

interface RestorationGuidanceCardProps {
  species?: any;
}

export default function RestorationGuidanceCard({
  species,
}: RestorationGuidanceCardProps) {
  const knowledge = species?.knowledge;

  if (!knowledge) return null;

  return (
    <section className="rounded-2xl border border-gray-200 bg-white p-8">
      <h2 className="text-3xl font-bold text-gray-900">
        🌱 Restoration Guidance
      </h2>

      <p className="mt-3 text-gray-600">
        FYNOS restoration recommendations explaining how this species should be
        used during ecosystem restoration.
      </p>

      <div className="mt-8">

        <SpeciesInfoRow
          label="Planting Role"
          value={knowledge?.planting_role}
        />

        <SpeciesInfoRow
          label="Ecosystem Role"
          value={knowledge?.ecosystem_role}
        />

        <SpeciesInfoRow
          label="Why Selected"
          value={knowledge?.why_selected}
        />

      </div>

      {knowledge?.expected_benefits?.length > 0 && (
        <div className="mt-10">
          <h3 className="text-lg font-semibold text-gray-900">
            Expected Benefits
          </h3>

          <ul className="mt-4 space-y-3">
            {knowledge.expected_benefits.map(
              (benefit: string, index: number) => (
                <li
                  key={index}
                  className="flex gap-3 rounded-xl border border-emerald-100 bg-emerald-50 p-4"
                >
                  <span className="text-emerald-600">✓</span>

                  <span className="text-gray-700">
                    {benefit}
                  </span>
                </li>
              )
            )}
          </ul>
        </div>
      )}

      {knowledge?.recommended_actions?.length > 0 && (
        <div className="mt-10">
          <h3 className="text-lg font-semibold text-gray-900">
            Recommended Actions
          </h3>

          <ul className="mt-4 space-y-3">
            {knowledge.recommended_actions.map(
              (action: string, index: number) => (
                <li
                  key={index}
                  className="flex gap-3 rounded-xl border border-blue-100 bg-blue-50 p-4"
                >
                  <span className="text-blue-600">→</span>

                  <span className="text-gray-700">
                    {action}
                  </span>
                </li>
              )
            )}
          </ul>
        </div>
      )}
    </section>
  );
}