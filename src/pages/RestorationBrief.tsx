import { useLocation, useNavigate } from "react-router-dom";
import { buildRestorationAssessment } from "../lib/recommendations/builders/buildRestorationAssessment";
import { generateRestorationVerdict } from "../lib/intelligence/ecological/restorationVerdict";

export default function RestorationBrief() {
  const location = useLocation();
  console.log("Location state:", location.state);
  const navigate = useNavigate();
  const restorationData = location.state ?? {};

  const assessment = buildRestorationAssessment(
    restorationData.polygonAnalysis
  );
  console.log(restorationData);
  console.log(restorationData.polygonAnalysis);
  console.log("Restoration Brief received:", restorationData);
  console.log("Project being sent:", {
    polygon: restorationData.polygon,
    polygonAnalysis: restorationData.polygonAnalysis,
    assessment,
  });

  const area = assessment.area;
  const ecosystem = assessment.ecosystem;
  const risk = assessment.risk;
  const restorationPotential = assessment.restorationPotential;
  const verdict =
    generateRestorationVerdict(
      restorationPotential
    );
  const ecologicalSummary = assessment.ecologicalSummary;
  const recommendedSpecies = assessment.recommendedSpecies;
  const recommendedAgroforestrySystems =
    assessment.recommendedAgroforestrySystems;
  const restorationObjectives = assessment.restorationObjectives;

  return (
    <main className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      <div className="mx-auto max-w-6xl px-6 py-12">

        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-600">
          Discovery Engine
        </p>

        <h1 className="mt-3 text-4xl font-bold text-gray-900">
          Your Restoration Brief
        </h1>

        <p className="mt-4 max-w-3xl text-lg leading-8 text-gray-600">
          Your land has shared its first story.

          Using satellite imagery, environmental data and AI reasoning, FYNOS AI has prepared an initial ecological assessment of your property.

          Before we begin designing a restoration project, let's explore what we've discovered together.
        </p>

        <section className="mt-10 rounded-3xl border border-emerald-200 bg-gradient-to-r from-emerald-700 to-green-600 p-8 text-white shadow-lg">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-100">
            FYNOS AI Verdict
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            {verdict.title}
          </h2>

          <p className="mt-5 max-w-4xl leading-8 text-emerald-50">
            {verdict.description}
          </p>

        </section>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">

          <div className="lg:col-span-2 space-y-8">

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

            <section className="rounded-3xl border border-emerald-100 bg-white p-8 shadow-sm">

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
                Step 1 · Environmental Diagnosis
              </p>

              <h2 className="mt-3 text-2xl font-bold text-gray-900">
                Environmental Diagnosis
              </h2>

              <p className="mt-5 leading-8 text-gray-700 whitespace-pre-line">
                {ecologicalSummary}
              </p>

            </section>

            <section className="rounded-3xl border border-emerald-100 bg-white p-8 shadow-sm">

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
                Where Restoration Can Begin
              </p>

              <h2 className="mt-3 text-2xl font-bold text-gray-900">
                Recommended priorities
              </h2>

              <p className="mt-5 leading-8 text-gray-600">
                Based on ecological conditions, FYNOS AI will recommend the most
                impactful restoration objectives for this property before suggesting
                species, activities, and implementation strategies.
              </p>

              <div className="mt-8 space-y-4">

                {restorationObjectives.map((objective) => (

                  <div
                    key={objective.title}
                    className="rounded-2xl border border-emerald-100 bg-emerald-50 p-5"
                  >

                    <div className="flex items-center justify-between">

                      <h3 className="text-lg font-semibold text-gray-900">
                        {objective.title}
                      </h3>

                      <span className="rounded-full bg-emerald-600 px-3 py-1 text-sm font-semibold text-white">
                        {objective.priority}
                      </span>

                    </div>

                    <p className="mt-3 text-gray-600">
                      {objective.reason}
                    </p>

                  </div>

                ))}

              </div>

              <div className="mt-8">
                <section className="rounded-3xl border border-emerald-100 bg-white p-8 shadow-sm mt-8">

                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
                    Recommended Restoration Strategy
                  </p>

                  <h2 className="mt-3 text-3xl font-bold text-gray-900">
                    🌱 AI Recommended Restoration Strategy
                  </h2>

                  <p className="mt-5 leading-8 text-gray-600">
                    Rather than recommending individual species, FYNOS AI designs complete
                    restoration systems that combine ecological recovery, productive
                    agroforestry, biodiversity conservation, and long-term economic resilience.
                    This strategy is tailored to your land's environmental conditions.
                  </p>

                  <div className="mt-8 space-y-6">

                    {recommendedAgroforestrySystems.map((system) => (

                      <div
                        key={system.id}
                        className="rounded-2xl border border-emerald-100 bg-emerald-50 p-6"
                      >

                        <div className="flex items-center justify-between">

                          <div>

                            <h3 className="text-xl font-bold text-gray-900">
                              {system.name}
                            </h3>

                            <p className="mt-2 text-gray-600">
                              {system.description}
                            </p>

                            <div className="mt-6 rounded-2xl bg-blue-50 border border-blue-100 p-5">

                              <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
                                Mission
                              </p>

                              <p className="mt-3 leading-7 text-gray-700">
                                Restore this landscape through productive agroforestry by combining
                                ecological regeneration, biodiversity recovery, long-term carbon storage
                                and sustainable income generation adapted to the environmental conditions
                                detected by FYNOS AI.
                              </p>

                            </div>

                            <div className="mt-8 space-y-4">

                              {system.phases.map((phase) => (

                                <div
                                  key={phase.phase}
                                  className="rounded-xl bg-white p-5 border border-emerald-100"
                                >

                                  <div className="flex items-center justify-between">

                                    <h4 className="text-lg font-semibold text-gray-900">
                                      Phase {phase.phase}
                                    </h4>

                                    <span className="rounded-full bg-emerald-600 px-3 py-1 text-sm font-semibold text-white">
                                      Step {phase.phase}
                                    </span>

                                  </div>

                                  <p className="mt-3 text-gray-700">
                                    {phase.objective}
                                  </p>

                                  <div className="mt-4 flex flex-wrap gap-2">

                                    {phase.species.map((species) => (

                                      <span
                                        key={species}
                                        className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-800"
                                      >
                                        {species}
                                      </span>

                                    ))}

                                  </div>

                                </div>

                              ))}

                            </div>

                            <div className="mt-8 rounded-2xl bg-emerald-900 p-6 text-white">

                              <h4 className="text-lg font-bold">
                                Expected Benefits
                              </h4>

                              <div className="mt-6 grid gap-4 md:grid-cols-3">

                                <div>
                                  <p className="text-sm uppercase tracking-wide text-emerald-200">
                                    Biodiversity
                                  </p>

                                  <p className="mt-2 font-medium">
                                    {system.expectedBenefits.biodiversity}
                                  </p>
                                </div>

                                <div>
                                  <p className="text-sm uppercase tracking-wide text-emerald-200">
                                    Carbon
                                  </p>

                                  <p className="mt-2 font-medium">
                                    {system.expectedBenefits.carbon}
                                  </p>
                                </div>

                                <div>
                                  <p className="text-sm uppercase tracking-wide text-emerald-200">
                                    Economic Impact
                                  </p>

                                  <p className="mt-2 font-medium">
                                    {system.expectedBenefits.economic}
                                  </p>
                                </div>

                              </div>

                            </div>

                          </div>

                        </div>

                      </div>

                    ))}

                  </div>

                </section>
                <h3 className="text-lg font-semibold text-gray-900">
                  🌳 Recommended Native Species
                </h3>

                <div className="mt-6 space-y-4">

                  {recommendedSpecies.map((species) => (

                    <div
                      key={species.scientificName}
                      className="rounded-2xl border border-emerald-100 bg-emerald-50 p-5"
                    >

                      <div className="flex items-center justify-between">

                        <div>

                          <h4 className="text-lg font-bold text-gray-900">
                            {species.commonName}
                          </h4>

                          <p className="italic text-sm text-gray-500">
                            {species.scientificName}
                          </p>

                        </div>

                        <div className="flex gap-2">

                          <span className="rounded-full bg-green-600 px-3 py-1 text-sm font-semibold text-white">
                            {species.suitability}
                          </span>

                          <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-800">
                            Score {species.score}
                          </span>

                        </div>

                      </div>

                      <p className="mt-4 text-gray-700">
                        {species.reason}
                      </p>

                      <div className="mt-3 rounded-xl bg-blue-50 p-3 text-sm text-blue-900">
                        <strong>Why FYNOS AI recommends this species</strong><br />
                        {species.explanation}
                        {species.matchedConditions.length > 0 && (
                          <div className="mt-4">

                            <p className="text-sm font-semibold text-gray-800">
                              Matched Conditions
                            </p>

                            <div className="mt-2 flex flex-wrap gap-2">

                              {species.matchedConditions.map((condition) => (
                                <span
                                  key={condition}
                                  className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-800"
                                >
                                  {condition}
                                </span>
                              ))}

                            </div>

                          </div>
                        )}
                      </div>

                      <div className="mt-4 grid gap-3 md:grid-cols-2">

                        <div className="rounded-xl bg-white p-3">
                          <strong>Ecological role</strong>
                          <p className="mt-1 text-sm text-gray-600">
                            {species.ecologicalRole}
                          </p>
                        </div>

                        <div className="rounded-xl bg-white p-3">
                          <strong>Carbon benefit</strong>
                          <p className="mt-1 text-sm text-gray-600">
                            {species.carbonBenefit}
                          </p>

                          <div className="mt-3 rounded-xl bg-white p-3">

                            <div className="flex items-center justify-between">

                              <strong>Recommendation confidence</strong>

                              <span className="font-semibold text-emerald-700">
                                {species.confidence}%
                              </span>

                            </div>

                            <div className="mt-3 h-2 w-full rounded-full bg-gray-200">

                              <div
                                className="h-2 rounded-full bg-emerald-600 transition-all"
                                style={{ width: `${species.confidence}%` }}
                              />

                            </div>

                          </div>

                          <div className="mt-3 text-xs text-gray-500">

                            <div>
                              Ecosystem: {species.scoreBreakdown.ecosystem}
                            </div>

                            <div>
                              Restoration Potential: {species.scoreBreakdown.restorationPotential}
                            </div>

                            <div>
                              Risk: {species.scoreBreakdown.risk}
                            </div>

                            <div>
                              Ecological Role: {species.scoreBreakdown.ecologicalRole}
                            </div>

                          </div>
                        </div>

                      </div>

                    </div>

                  ))}

                </div>

              </div>

            </section>

          </div>

          <aside className="space-y-6">

            <section className="rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm">

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
                Assessment Status
              </p>

              <div className="mt-6 flex items-center gap-3">

                <div className="h-4 w-4 rounded-full bg-green-500" />

                <div>
                  <p className="font-semibold text-gray-900">
                    Assessment Complete
                  </p>

                  <p className="text-sm text-gray-600">
                    Your land is ready for restoration planning.
                  </p>
                </div>

              </div>

            </section>

          </aside>

        </div>

        <section className="rounded-3xl bg-gradient-to-r from-emerald-700 to-green-600 p-10 text-white shadow-xl">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-100">
            Ready to Begin?
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Your restoration strategy is ready.
          </h2>

          <p className="mt-5 max-w-3xl leading-8 text-emerald-50">
            FYNOS AI has completed the ecological assessment and designed a restoration
            strategy tailored to your land. The next step is to transform this
            recommendation into a living restoration project where you will plan,
            execute and monitor every stage of implementation.
          </p>

          <button
            onClick={() =>
              navigate("/restoration", {
                state: {
                  project: {
                    polygon: restorationData.polygon,
                    polygonAnalysis: restorationData.polygonAnalysis,
                    assessment,
                  },
                },
              })
            }
            className="mt-8 rounded-2xl bg-white px-8 py-4 text-lg font-semibold text-emerald-700 shadow-lg transition hover:scale-105"
          >
            🌱 Create Restoration Project
          </button>

        </section>

      </div>
    </main>
  );
}