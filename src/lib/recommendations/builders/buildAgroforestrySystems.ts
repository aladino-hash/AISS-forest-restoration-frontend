import { recommendAgroforestrySystems } from "../../intelligence/ecological/agroforestrySystems";
import { AgroforestrySystem } from "../../core/models/AgroforestrySystem";

export function buildAgroforestrySystems(
  ecosystem: string,
  restorationPotential: string,
  risk: string
): AgroforestrySystem[] {

  return recommendAgroforestrySystems(
    ecosystem,
    restorationPotential,
    risk
  );

}