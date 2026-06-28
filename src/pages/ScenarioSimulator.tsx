import { useState } from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import ScenarioControlPanel from "@/components/ScenarioControlPanel";
import ScenarioResultsPanel from "@/components/ScenarioResultsPanel";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useCountries } from "@/hooks/useForestData";

export default function ScenarioSimulator() {
  const [selectedCountry, setSelectedCountry] = useState("Brazil");

  const [scenario, setScenario] = useState({
    agricultureReduction: 25,
    restorationInvestment: 50,
    protectedAreas: 20,
    enforcement: 40,
    indigenousProtection: 60,
  });

const [simulationResult, setSimulationResult] = useState<any>(null);

const [isRunning, setIsRunning] = useState(false);

const { data: countries } = useCountries();

const displayCountries = countries || [];

const runScenario = async () => {
  setSimulationResult(null);
  setIsRunning(true);

  try {
    const response = await fetch("http://localhost:5000/api/scenario/simulate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        country: selectedCountry,
        scenario,
      }),
    });

    const data = await response.json();

    setSimulationResult(data);

    console.log("Scenario Response:", data);

  } catch (error) {
    console.error("Scenario simulation failed:", error);
  } finally {
    setIsRunning(false);
  }
};

  return (
  <PageLayout>
    <div className="max-w-7xl mx-auto space-y-8">

      <div>
        <h1 className="text-3xl font-bold">
          Restoration Scenario Simulator
        </h1>

        <p className="text-muted-foreground mt-2">
          Explore how different restoration and policy interventions could influence forest outcomes.
        </p>

        <div className="mt-6 max-w-sm">
          <label className="text-sm font-medium text-muted-foreground mb-2 block">
            Select Country
          </label>

          <Select value={selectedCountry} onValueChange={setSelectedCountry}>
            <SelectTrigger>
              <SelectValue placeholder="Choose a country" />
            </SelectTrigger>

            <SelectContent>
              {displayCountries.map((country: any) => (
                <SelectItem key={country.name} value={country.name}>
                  {country.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <ScenarioControlPanel
        scenario={scenario}
        updateScenario={(key, value) =>
          setScenario({
            ...scenario,
            [key]: value,
          })
        }
      />

      <div className="flex justify-end">
        <button
          onClick={runScenario}
          disabled={isRunning}
          className="rounded-lg bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isRunning ? "Running Scenario..." : "Run Scenario"}
        </button>
      </div>

      <ScenarioResultsPanel
        simulationResult={simulationResult}
        selectedCountry={selectedCountry}
      />

    </div>
  </PageLayout>
);
}