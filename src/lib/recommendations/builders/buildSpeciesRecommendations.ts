import { recommendNativeSpecies } from "../../intelligence/ecological/nativeSpecies";
import { SpeciesRecommendation } from "../../core/models/SpeciesRecommendation";

export function buildSpeciesRecommendations(
  ecosystem: string,
  restorationPotential: string,
  risk: string,
  elevation: number
): SpeciesRecommendation[] {

  return recommendNativeSpecies(
    ecosystem,
    restorationPotential,
    risk,
    elevation
  );

}