import { useLocation } from "react-router-dom";

export default function RestorationBrief() {
  const location = useLocation();
  const restorationData = location.state ?? {};
  console.log(restorationData);
  console.log(restorationData.polygonAnalysis);
  console.log("Restoration Brief received:", restorationData);

  const area =
    restorationData.polygonAnalysis?.area_ha
      ? `${restorationData.polygonAnalysis.area_ha.toFixed(2)} ha`
      : "Pending analysis";
  const ecosystem = "Pending analysis";
  const risk = "Pending analysis";
  const restorationPotential = "Pending analysis";

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

        <div className="mt-12 grid gap-8 lg:grid-cols-3">

          <div className="lg:col-span-2 space-y-8">

            <section className="rounded-3xl border border-emerald-100 bg-white p-8 shadow-sm">

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
                Your Land
              </p>

              <h2 className="mt-3 text-2xl font-bold text-gray-900">
                Your land at a glance
              </h2>

              <p className="mt-4 leading-7 text-gray-600">
                This summary combines satellite observations and AI interpretation
                to provide an initial understanding of your property's ecological
                condition and restoration potential.
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
                    {area}
                  </p>
                </div>

                <div className="rounded-2xl bg-emerald-50 p-4">
                  <p className="text-xs uppercase tracking-wide text-gray-500">
                    Risk
                  </p>
                  <p className="mt-2 text-lg font-semibold text-gray-900">
                    {area}
                  </p>
                </div>

                <div className="rounded-2xl bg-emerald-50 p-4">
                  <p className="text-xs uppercase tracking-wide text-gray-500">
                    Restoration Potential
                  </p>
                  <p className="mt-2 text-lg font-semibold text-gray-900">
                    {area}
                  </p>
                </div>

              </div>

            </section>

            <section className="rounded-3xl border border-emerald-100 bg-white p-8 shadow-sm">

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
                What We Discovered Together
              </p>

              <h2 className="mt-3 text-2xl font-bold text-gray-900">
                What FYNOS AI discovered
              </h2>

              <p className="mt-5 leading-8 text-gray-600">
                This section will contain an AI-generated interpretation of the
                satellite observations, explaining the ecological condition of the
                land in natural language.
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

            </section>

            <section className="rounded-3xl border border-emerald-100 bg-white p-8 shadow-sm">

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
                Your Journey Continues
              </p>

              <h2 className="mt-3 text-2xl font-bold text-gray-900">
                Ready to begin restoration?
              </h2>

              <p className="mt-5 leading-8 text-gray-600">
                Once you're satisfied with this assessment, create a restoration project to begin planning, monitoring, collaborating with experts, and tracking progress over time.
              </p>

              <button
                className="mt-8 rounded-xl bg-emerald-600 px-8 py-4 font-semibold text-white shadow-md transition-all hover:bg-emerald-700 hover:shadow-lg"
              >
                🌱 Create Restoration Project
              </button>

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

      </div>
    </main>
  );
}