import { amazonSystems } from "../../knowledge/agroforestry/amazonSystems";
import { AgroforestrySystem } from "../../core/models/AgroforestrySystem";

export function recommendAgroforestrySystems(
  ecosystem: string,
  restorationPotential: string,
  risk: string
): AgroforestrySystem[] {

  console.log({
    ecosystem,
    restorationPotential,
    risk,
  });
  return amazonSystems.filter(system =>

    (
      console.log(
        system.name,
        system.suitableEcosystems,
        ecosystem.toLowerCase()
      ),
      system.suitableEcosystems.includes(
        ecosystem.toLowerCase()
      )
    ) &&

    system.suitableRestorationPotential.includes(
      restorationPotential
    ) &&

    system.suitableRiskLevels.includes(
      risk
    )

  );

}