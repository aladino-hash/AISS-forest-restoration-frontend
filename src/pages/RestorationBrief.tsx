import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import RestorationHero from "@/components/restorationBrief/RestorationHero";
import RestorationVerdict from "@/components/restorationBrief/RestorationVerdict";
import RestorationJourney from "@/components/restorationBrief/RestorationJourney";
import StepLandOverview from "@/components/restorationBrief/steps/StepLandOverview";
import AssessmentProgress from "@/components/restorationBrief/AssessmentProgress";

import { buildRestorationAssessment } from "@/lib/recommendations/builders/buildRestorationAssessment";
import { generateRestorationVerdict } from "@/lib/intelligence/ecological/restorationVerdict";
import StepDiagnosis from "@/components/restorationBrief/steps/StepDiagnosis";
import StepPriorities from "@/components/restorationBrief/steps/StepPriorities";
import StepStrategy from "@/components/restorationBrief/steps/StepStrategy";
import StepSpecies from "@/components/restorationBrief/steps/StepSpecies";
import StepImpact from "@/components/restorationBrief/steps/StepImpact";
import StepCreateProject from "@/components/restorationBrief/steps/StepCreateProject";

export default function RestorationBrief() {
  const location = useLocation();
  const navigate = useNavigate();

  const restorationData = location.state ?? {};

  const assessment = buildRestorationAssessment(
    restorationData.polygonAnalysis
  );

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
              area={assessment.area}
              ecosystem={assessment.ecosystem}
              risk={assessment.risk}
              restorationPotential={assessment.restorationPotential}
            />
          )}

          {step === 2 && (
            <StepDiagnosis
              ecologicalSummary={assessment.ecologicalSummary}
            />
          )}

          {step === 3 && (
            <StepPriorities
              restorationObjectives={assessment.restorationObjectives}
            />
          )}

          {step === 4 && (
            <StepStrategy
              recommendedAgroforestrySystems={
                assessment.recommendedAgroforestrySystems
              }
            />
          )}

          {step === 5 && (
            <StepSpecies
              recommendedSpecies={assessment.recommendedSpecies}
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
                        restorationData.polygonAnalysis?.area_hectares ??
                        restorationData.polygonAnalysis?.areaHectares ??
                        "--",

                      verification: "Satellite",

                      createdAt: new Date().toISOString(),

                      polygon: restorationData.polygon,

                      polygonAnalysis: restorationData.polygonAnalysis,

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