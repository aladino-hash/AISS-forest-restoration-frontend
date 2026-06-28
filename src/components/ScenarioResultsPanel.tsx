import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts";

interface ScenarioResultsPanelProps {
  simulationResult: any;
  selectedCountry: string;
}

export default function ScenarioResultsPanel({
  simulationResult,
  selectedCountry,
}: ScenarioResultsPanelProps) {

  if (!simulationResult) return null;

  const chartData = simulationResult.simulation.yearly_predictions.map(
    (item: any) => ({
      year: item.year,
      Baseline: item.baseline_loss,
      Scenario: item.simulated_loss,
    })
  );

  const baselineLoss = simulationResult.baseline.projected_loss;
  const simulatedLoss = simulationResult.simulation.projected_loss;
  const avoidedLoss = baselineLoss - simulatedLoss;
  const effectiveness =
    simulationResult.simulation.intervention_effectiveness * 100;


  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-semibold mb-4">
        Scenario Results
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
        <div className="rounded-lg bg-green-50 p-4">
          <p className="text-sm text-gray-500">Baseline Loss</p>
          <p className="text-2xl font-bold">
            {(simulationResult.baseline.projected_loss / 1_000_000).toFixed(2)} Mha
          </p>
        </div>

        <div className="rounded-lg bg-blue-50 p-4">
          <p className="text-sm text-gray-500">Simulated Loss</p>
          <p className="text-2xl font-bold">
            {(simulationResult.simulation.projected_loss / 1_000_000).toFixed(2)} Mha
          </p>
        </div>

        <div className="rounded-lg bg-emerald-50 p-4">
          <p className="text-sm text-gray-500">Intervention Effectiveness</p>
          <p className="text-2xl font-bold">
            {(simulationResult.simulation.intervention_effectiveness * 100).toFixed(1)}%
          </p>
        </div>

        <div className="rounded-lg bg-amber-50 p-4">
          <p className="text-sm text-gray-500">Avoided Forest Loss</p>
          <p className="text-2xl font-bold">
            {(
              (simulationResult.baseline.projected_loss -
                simulationResult.simulation.projected_loss) /
              1_000_000
            ).toFixed(2)} Mha
          </p>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-4">
          Baseline vs Scenario Projection
        </h3>

        <div className="h-[320px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <XAxis dataKey="year" />
              <YAxis
                domain={[
                  (dataMin: number) => dataMin * 0.95,
                  (dataMax: number) => dataMax * 1.05,
                ]}
              />
              <Tooltip />
              <Legend />

              <Line
                type="monotone"
                dataKey="Baseline"
                strokeWidth={2}
              />

              <Line
                type="monotone"
                dataKey="Scenario"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="mt-8 rounded-lg border bg-slate-50 p-6">
        <h3 className="text-lg font-semibold mb-3">
          Simulation Summary
        </h3>

        <p className="text-muted-foreground leading-7">
          Based on the selected interventions, projected forest loss in{" "}
          <span className="font-semibold text-foreground">
            {selectedCountry}
          </span>{" "}
          decreases from{" "}
          <span className="font-semibold text-foreground">
            {(baselineLoss / 1_000_000).toFixed(2)} Mha
          </span>{" "}
          to{" "}
          <span className="font-semibold text-foreground">
            {(simulatedLoss / 1_000_000).toFixed(2)} Mha
          </span>
          , avoiding approximately{" "}
          <span className="font-semibold text-green-700">
            {(avoidedLoss / 1_000_000).toFixed(2)} Mha
          </span>{" "}
          of projected forest loss over the simulation period. The intervention package
          achieves an overall effectiveness of{" "}
          <span className="font-semibold text-blue-700">
            {effectiveness.toFixed(1)}%
          </span>.
        </p>
      </div>
    </div>
  );
}