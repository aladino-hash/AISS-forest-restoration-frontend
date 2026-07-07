import {
  Sparkles,
  Trees,
  CloudRain,
  Calculator,
  Mountain,
  Leaf,
} from "lucide-react";

const tools = [
  { title: "Species Selector", icon: Trees },
  { title: "Carbon Calculator", icon: Calculator },
  { title: "Rainfall Explorer", icon: CloudRain },
  { title: "Soil Suitability", icon: Mountain },
  { title: "NDVI Explorer", icon: Leaf },
  { title: "AI Assistant", icon: Sparkles },
];

export default function AITools() {
  return (
    <section>

      <h2 className="text-3xl font-bold text-slate-900">
        AI Restoration Tools
      </h2>

      <p className="mt-2 text-slate-600">
        Explore intelligent tools to support restoration planning.
      </p>

      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

        {tools.map((tool) => {
          const Icon = tool.icon;

          return (
            <button
              key={tool.title}
              className="flex items-center gap-4 rounded-3xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="rounded-2xl bg-emerald-100 p-4">
                <Icon
                  size={26}
                  className="text-emerald-700"
                />
              </div>

              <span className="font-semibold text-slate-800">
                {tool.title}
              </span>
            </button>
          );
        })}

      </div>

    </section>
  );
}