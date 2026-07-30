import {
  CheckCircle2,
  Sparkles,
  Leaf,
  Map,
  Sprout,
  Target,
  Trees,
} from "lucide-react";

interface StepStrategyProps {
  strategy?: {
    title?: string;
    summary?: string;
    sections?: {
      title?: string;
      description?: string;
      status?: string;
    }[];
  };
}

const statusColors: Record<string, string> = {
  completed:
    "border-emerald-100 bg-emerald-50 text-emerald-700",

  ready:
    "border-blue-100 bg-blue-50 text-blue-700",

  planned:
    "border-amber-100 bg-amber-50 text-amber-700",

  recommended:
    "border-violet-100 bg-violet-50 text-violet-700",
};

const statusLabels: Record<string, string> = {
  completed: "Analysis Complete",
  ready: "Strategy Selected",
  planned: "Restoration Goal",
  recommended: "AI Recommendation",
};

const stagePresentation = {
  "Landscape Assessment": {
    number: "1",
    title: "Understanding Your Landscape",
    icon: Map,
  },

  "Restoration Strategy": {
    number: "2",
    title: "Choosing the Best Restoration Path",
    icon: Sprout,
  },

  "Restoration Objective": {
    number: "3",
    title: "Defining the Restoration Goal",
    icon: Target,
  },

  "Recommended Approach": {
    number: "4",
    title: "Planning the Restoration Journey",
    icon: Trees,
  },
};

export default function StepStrategy({
  strategy,
}: StepStrategyProps) {
  if (!strategy) {
    return (
      <section>
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-600">
          Step 4 of 8
        </p>

        <h2 className="mt-3 text-3xl font-bold text-gray-900">
          AI Restoration Strategy
        </h2>

        <p className="mt-8 text-gray-600">
          No restoration strategy is available yet.
        </p>
      </section>
    );
  }

  return (
    <section>
      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-600">
        Step 4 of 8
      </p>

      <h2 className="mt-3 text-3xl font-bold text-gray-900">
        {strategy.title}
      </h2>

      <p className="mt-4 text-lg leading-8 text-gray-700">
        {strategy.summary}
      </p>

      <div className="mt-8 rounded-3xl border border-emerald-100 bg-emerald-50 p-6">
        <div className="flex items-center gap-3">
          <Sparkles className="h-6 w-6 text-emerald-600" />

          <h3 className="text-lg font-semibold text-emerald-800">
            AI Restoration Roadmap
          </h3>
        </div>

        <p className="mt-3 leading-7 text-gray-700">
          Your restoration journey is organized into four milestones. Each stage builds upon the previous one, guiding you from understanding the landscape to defining the most suitable restoration approach for long-term ecological recovery.
        </p>
      </div>

      <div className="relative mt-10 space-y-8">
        {(strategy.sections ?? []).map((section, index) => {
          const stage =
            stagePresentation[
              section.title as keyof typeof stagePresentation
            ];

          const Icon = stage?.icon ?? Leaf;

          return (
            <div
              key={index}
              className="relative flex items-start gap-6"
            >
              {/* Timeline */}

              <div className="flex flex-col items-center">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-full text-lg font-bold shadow-sm ${
                    statusColors[
                      section.status ?? "completed"
                    ]
                  }`}
                >
                  {stage?.number ?? index + 1}
                </div>

                {index !== (strategy.sections?.length ?? 0) - 1 && (
                  <div className="h-20 w-px bg-emerald-200" />
                )}
              </div>

              {/* Card */}

              <div
                className={`flex-1 rounded-3xl border p-6 shadow-sm transition-all hover:shadow-md ${
                  statusColors[
                    section.status ?? "completed"
                  ]
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="rounded-2xl bg-white/70 p-3">
                      <Icon className="h-7 w-7" />
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold">
                        {stage?.title ?? section.title}
                      </h3>

                      <p className="mt-3 leading-8 text-gray-700">
                        {section.description}
                      </p>
                    </div>
                  </div>

                  <div className="rounded-full bg-white px-4 py-2 text-sm font-semibold shadow-sm">
                    {statusLabels[
                      section.status ?? "completed"
                    ]}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-8 rounded-2xl border border-emerald-100 bg-white p-6">
        <div className="flex items-center gap-3">
          <Leaf className="h-5 w-5 text-emerald-600" />

          <h3 className="font-semibold text-gray-900">
            Restoration Philosophy
          </h3>
        </div>

        <p className="mt-3 leading-8 text-gray-700">
          Successful restoration is not achieved through a single action, but through a sequence of informed decisions. This roadmap serves as your guide, helping transform ecological intelligence into practical actions that restore biodiversity, strengthen ecosystems, and generate lasting environmental and social impact.
        </p>
      </div>
    </section>
  );
}