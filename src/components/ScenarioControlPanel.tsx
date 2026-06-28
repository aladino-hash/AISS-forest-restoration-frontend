import { useState } from "react";
import InterventionSlider from "@/components/InterventionSlider";

interface Scenario {
  agricultureReduction: number;
  restorationInvestment: number;
  protectedAreas: number;
  enforcement: number;
  indigenousProtection: number;
}

interface ScenarioControlPanelProps {
  scenario: Scenario;
  updateScenario: (key: keyof Scenario, value: number) => void;
}

export default function ScenarioControlPanel({
  scenario,
  updateScenario,
}: ScenarioControlPanelProps) {

  //const [scenario, setScenario] = useState({
  //  agricultureReduction: 25,
  //  restorationInvestment: 50,
  //  protectedAreas: 20,
  //  enforcement: 40,
  //  indigenousProtection: 60,
  //});

  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-semibold">
        Intervention Controls
      </h2>

      <p className="text-muted-foreground mt-2">
        Configure restoration and policy interventions to simulate future forest outcomes.
      </p>

      <div className="mt-8">
        <h3 className="text-lg font-semibold">
          Intervention Variables
        </h3>

        <InterventionSlider
          label="Agricultural Expansion Reduction"
          value={[scenario.agricultureReduction]}
          onChange={(value) =>
            updateScenario("agricultureReduction", value[0])
          }
        />

        <InterventionSlider
          label="Restoration Investment"
          value={[scenario.restorationInvestment]}
          onChange={(value) =>
            updateScenario("restorationInvestment", value[0])
          }
        />

        <InterventionSlider
          label="Protected Area Expansion"
          value={[scenario.protectedAreas]}
          onChange={(value) =>
            updateScenario("protectedAreas", value[0])
          }
        />

        <InterventionSlider
          label="Enforcement Effectiveness"
          value={[scenario.enforcement]}
          onChange={(value) =>
            updateScenario("enforcement", value[0])
          }
        />

        <InterventionSlider
          label="Indigenous Land Protection"
          value={[scenario.indigenousProtection]}
          onChange={(value) =>
            updateScenario("indigenousProtection", value[0])
          }
        />
      </div>
    </div>
  );
}