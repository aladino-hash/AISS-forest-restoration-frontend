import { RestorationAssessment } from "../../core/models/RestorationAssessment";
import { recommendNativeSpecies } from "../../intelligence/ecological/nativeSpecies";
import { recommendRestorationObjectives } from "../../intelligence/ecological/restorationObjectives";

function calculateRestorationPotential(
  ndvi: number,
  risk: string
): string {

  if (ndvi >= 0.7 && risk.toLowerCase().includes("low")) {
    return "Excellent";
  }

  if (ndvi >= 0.5) {
    return "High";
  }

  if (ndvi >= 0.3) {
    return "Moderate";
  }

  return "Priority Restoration";
}

function generateEcologicalSummary(
  ecosystem: string,
  risk: string,
  restorationPotential: string
): string {

  return `This property is classified as ${ecosystem}. Current environmental risk is ${risk}. Based on the available satellite observations, the restoration potential is considered ${restorationPotential.toLowerCase()}.`;

}

export function buildRestorationAssessment(
  polygonAnalysis: any
): RestorationAssessment {

  console.log("Translator received:", polygonAnalysis);
  console.log("Translator ecosystem:", polygonAnalysis?.ecosystem_type);

  const ecosystem =
    polygonAnalysis?.ecosystem_type ?? "Pending analysis";

  const risk =
    polygonAnalysis?.risk ?? "Pending analysis";

  const restorationPotential =
    calculateRestorationPotential(
      polygonAnalysis?.ndvi ?? 0,
      risk
    );

  return {
    area: "Pending analysis",

    ecosystem,

    risk,

    restorationPotential,

    ecologicalSummary: generateEcologicalSummary(
      ecosystem,
      risk,
      restorationPotential
    ),

    recommendedSpecies: recommendNativeSpecies(
      ecosystem,
      restorationPotential,
      risk,
      polygonAnalysis?.elevation ?? 0
    ),

    restorationObjectives: recommendRestorationObjectives(
      ecosystem,
      risk
    ),
  };
}