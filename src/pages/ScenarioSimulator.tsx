import StakeholderSelector from "@/components/StakeholderSelector";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

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
      const response = await fetch(
        "http://localhost:5000/api/scenario/simulate",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            country: selectedCountry,
            scenario,
          }),
        }
      );

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
      <div className="mx-auto max-w-7xl space-y-8">

        <div>

          <h1 className="text-3xl font-bold">
            Restoration Scenario Simulator
          </h1>

          <p className="mt-2 text-muted-foreground">
            Explore how different restoration and policy interventions
            could influence forest outcomes before analyzing your land.
          </p>

          <div className="mt-6 max-w-sm">

            <label className="mb-2 block text-sm font-medium text-muted-foreground">
              Select Country
            </label>

            <Select
              value={selectedCountry}
              onValueChange={setSelectedCountry}
            >

              <SelectTrigger>
                <SelectValue placeholder="Choose a country" />
              </SelectTrigger>

              <SelectContent>

                {displayCountries.map((country: any) => (

                  <SelectItem
                    key={country.name}
                    value={country.name}
                  >
                    {country.name}
                  </SelectItem>

                ))}

              </SelectContent>

            </Select>

          </div>

        </div>

        <StakeholderSelector />

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
            className="
              rounded-xl
              bg-green-600
              px-6
              py-3
              font-semibold
              text-white
              transition
              hover:bg-green-700
              disabled:cursor-not-allowed
              disabled:opacity-60
            "
          >
            {isRunning
              ? "Running Scenario..."
              : "Run AI Scenario"}
          </button>

        </div>

        <ScenarioResultsPanel
          simulationResult={simulationResult}
          selectedCountry={selectedCountry}
        />

        {/* Continue */}

        {simulationResult && (

          <div className="flex justify-end">

            <button
              onClick={() => navigate("/curimana")}
              className="
                rounded-xl
                bg-emerald-700
                px-8
                py-4
                text-lg
                font-semibold
                text-white
                transition
                hover:bg-emerald-800
              "
            >
              Continue to Land Analysis →
            </button>

          </div>

        )}

      </div>
    </PageLayout>
  );
}