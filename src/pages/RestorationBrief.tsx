import { useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import RestorationHero from "@/components/restorationBrief/RestorationHero";
import RestorationVerdict from "@/components/restorationBrief/RestorationVerdict";
import RestorationJourney from "@/components/restorationBrief/RestorationJourney";
import AssessmentProgress from "@/components/restorationBrief/AssessmentProgress";

import StepLandOverview from "@/components/restorationBrief/steps/StepLandOverview";
import StepDiagnosis from "@/components/restorationBrief/steps/StepDiagnosis";
import StepPriorities from "@/components/restorationBrief/steps/StepPriorities";
import StepStrategy from "@/components/restorationBrief/steps/StepStrategy";
import StepProductiveSpecies from "@/components/restorationBrief/steps/StepProductiveSpecies";
import StepSpecies from "@/components/restorationBrief/steps/StepSpecies";
import StepImpact from "@/components/restorationBrief/steps/StepImpact";
import StepCreateProject from "@/components/restorationBrief/steps/StepCreateProject";

import { buildRestorationAssessment } from "@/lib/recommendations/builders/buildRestorationAssessment";
import { generateRestorationVerdict } from "@/lib/intelligence/ecological/restorationVerdict";

export default function RestorationBrief() {
  const location = useLocation();
  const navigate = useNavigate();

  const restorationData = location.state ?? {};
  const polygonAnalysis = restorationData.polygonAnalysis;

  // 🧠 AI restoration brief
  const brief = polygonAnalysis?.restoration_brief;
  const impactSummary = polygonAnalysis?.impact_summary ?? "";
  const executiveSummary = polygonAnalysis?.executive_summary ?? "";
  const farmerGuidance = polygonAnalysis?.farmer_guidance ?? "";

  console.log("RESTORATION PRIORITIES:", brief?.restoration_priorities);
  console.log("STEP 3:", brief?.restoration_priorities);
  console.log("RECOMMENDED SPECIES:", brief?.recommended_species);

  // Temporary compatibility layer
  const assessment = buildRestorationAssessment(polygonAnalysis);

  const verdict = generateRestorationVerdict(
    assessment.restorationPotential
  );

  const [step, setStep] = useState(1);

  const journeyRef = useRef<HTMLDivElement>(null);

  const productiveSpecies = brief?.productive_species;

  const [selectedProductiveSpecies, setSelectedProductiveSpecies] = useState<
    string[]
  >([]);

  const handleToggleProductiveSpecies = (id: string) => {
    setSelectedProductiveSpecies((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  };

  const [selectedRestorationSpecies, setSelectedRestorationSpecies] = useState<string[]>([]);

  const handleToggleRestorationSpecies = (id: string) => {
    setSelectedRestorationSpecies((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      <div className="mx-auto w-full max-w-[1800px] px-8 py-6">
        {/* <RestorationHero /> */}

        {/* <RestorationVerdict verdict={verdict} /> */}

        <div ref={journeyRef}>
          <RestorationJourney>
            <AssessmentProgress
              currentStep={step}
              totalSteps={8}
            />

            {/* STEP 1 */}

            {step === 1 && (
              <StepLandOverview
                overview={brief?.landscape_overview}
              />
            )}

            {/* STEP 2 */}

            {step === 2 && (
              <StepDiagnosis
                diagnosis={brief?.landscape_diagnosis}
              />
            )}

            {/* STEP 3 */}

            {step === 3 && (
              <StepPriorities
                priorities={brief?.restoration_priorities}
              />
            )}

            {/* STEP 4 */}

            {step === 4 && (
              <StepStrategy
                strategy={brief?.restoration_strategy}
              />
            )}

            {/* STEP 5 */}

            {step === 5 && (
              <StepProductiveSpecies
                species={productiveSpecies}
                selectedSpecies={selectedProductiveSpecies}
                onToggleSpecies={handleToggleProductiveSpecies}
              />
            )}

            {/* STEP 6 */}

            {step === 6 && (
              <StepSpecies
                species={brief?.recommended_species}
                selectedSpecies={selectedRestorationSpecies}
                onToggleSpecies={handleToggleRestorationSpecies}
              />
            )}

            {/* STEP 7 */}

            {step === 7 && (
              <StepImpact
                restorationPotential={polygonAnalysis.restoration_potential}
                productiveSpecies={selectedProductiveSpecies}
                restorationSpecies={selectedRestorationSpecies}
                impactSummary={impactSummary}
              />
            )}

            {/* STEP 8 */}

            {step === 8 && (
              <StepCreateProject
                onCreateProject={() => {
                  navigate("/restoration", {
                    state: {
                      project: {
                        id: crypto.randomUUID(),
                        name: "Curimaná Restoration Project",

                        area:
                          polygonAnalysis?.area_hectares ??
                          polygonAnalysis?.areaHectares ??
                          "--",

                        verification: "Satellite",
                        createdAt: new Date().toISOString(),

                        polygon: restorationData.polygon,
                        polygonAnalysis,

                        assessment,

                        // 🌾 Farmer selections
                        productiveSpecies: selectedProductiveSpecies,
                        restorationSpecies: selectedRestorationSpecies,
                      },
                    },
                  });
                }}
              />
            )}

            <div className="mt-10 flex justify-end">
              <button
                onClick={() => {
                  if (step < 8) {
                    setStep(step + 1);

                    requestAnimationFrame(() => {
                      journeyRef.current?.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    });
                  }
                }}
                className="rounded-2xl bg-emerald-600 px-8 py-3 font-semibold text-white transition hover:bg-emerald-700"
              >
                Continue →
              </button>
            </div>
          </RestorationJourney>
        </div>
      </div>
    </main>
  );
}