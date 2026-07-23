import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import RestorationHero from "@/components/restorationBrief/RestorationHero";
import RestorationVerdict from "@/components/restorationBrief/RestorationVerdict";
import RestorationJourney from "@/components/restorationBrief/RestorationJourney";
import AssessmentProgress from "@/components/restorationBrief/AssessmentProgress";

import StepLandOverview from "@/components/restorationBrief/steps/StepLandOverview";
import StepDiagnosis from "@/components/restorationBrief/steps/StepDiagnosis";
import StepPriorities from "@/components/restorationBrief/steps/StepPriorities";
import StepStrategy from "@/components/restorationBrief/steps/StepStrategy";
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

  // 🧠 New AI output
  const brief = polygonAnalysis?.restoration_brief;

  console.log("RESTORATION BRIEF:", brief);
  console.log("RECOMMENDED SPECIES:", brief?.recommended_species);

  // 🔄 Temporary compatibility layer.
  // Steps 2–7 still use the old assessment builder.
  const assessment = buildRestorationAssessment(polygonAnalysis);

  const verdict = generateRestorationVerdict(
    assessment.restorationPotential
  );

  const [step, setStep] = useState(1);

  return (
    <main className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      <div className="mx-auto max-w-6xl px-6 py-12">

        <RestorationHero />

        <RestorationVerdict
          verdict={verdict}
        />

        <RestorationJourney>

          <AssessmentProgress
            currentStep={step}
            totalSteps={7}
          />

          {step === 1 && (
            <StepLandOverview
              overview={brief?.landscape_overview}
            />
          )}

          {step === 2 && (
            <StepDiagnosis
              diagnosis={brief?.landscape_diagnosis}
            />
          )}

          {step === 3 && (
            <StepPriorities
              priorities={brief?.restoration_priorities}
            />
          )}

          {step === 4 && (
            <StepStrategy
              strategy={brief?.restoration_strategy}
            />
          )}

          {step === 5 && (
            <StepSpecies
              species={brief?.recommended_species}
            />
          )}

          {step === 6 && (
            <StepImpact
              restorationPotential={assessment.restorationPotential}
            />
          )}

          {step === 7 && (
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
                    },
                  },
                });
              }}
            />
          )}

          <div className="mt-10 flex justify-end">
            <button
              onClick={() => {
                if (step < 7) {
                  setStep(step + 1);
                }
              }}
              className="rounded-2xl bg-emerald-600 px-8 py-3 font-semibold text-white transition hover:bg-emerald-700"
            >
              Continue →
            </button>
          </div>

        </RestorationJourney>

      </div>
    </main>
  );
}