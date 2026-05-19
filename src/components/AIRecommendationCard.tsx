import { Card, CardContent } from "@/components/ui/card";

interface RecommendationCardProps {
  recommendation: any;
  index: number;
}

export default function AIRecommendationCard({
  recommendation,
  index,
}: RecommendationCardProps) {

  const data =
    recommendation.text ||
    recommendation.description ||
    recommendation.content ||
    recommendation ||
    {};

  return (
    <Card className="border border-green-100 shadow-sm rounded-2xl overflow-hidden">
      <CardContent className="p-8 space-y-8">

        {/* Header */}
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <h3 className="text-2xl font-bold text-gray-900">
              Recommendation {index + 1}
            </h3>

            <p className="text-sm text-muted-foreground mt-1">
              AI-generated restoration intelligence
            </p>
          </div>

          <div className="flex gap-2 flex-wrap">
            <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium">
              High Impact
            </span>

            <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-sm font-medium">
              Policy Strategy
            </span>

            <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
              {data["Implementation Timeframe"] || "Long-term"}
            </span>
          </div>
        </div>

        {/* Objective */}
        <section className="space-y-2">
          <h4 className="text-lg font-semibold text-green-700">
            🎯 Strategic Objective
          </h4>

          <p className="text-gray-700 leading-relaxed">
            {data.Objective}
          </p>
        </section>

        {/* Actions */}
        <section className="space-y-3">
          <h4 className="text-lg font-semibold text-green-700">
            🛠 Key Actions
          </h4>

          <ul className="space-y-3">
            {(data["Specific Actions"] || []).map(
              (action: string, i: number) => (
                <li
                  key={i}
                  className="flex items-start gap-3 bg-gray-50 rounded-xl p-4"
                >
                  <div className="w-6 h-6 rounded-full bg-green-600 text-white flex items-center justify-center text-sm font-bold mt-0.5">
                    {i + 1}
                  </div>

                  <p className="text-gray-700 leading-relaxed">
                    {action}
                  </p>
                </li>
              )
            )}
          </ul>
        </section>

        {/* Impact */}
        <section className="bg-green-50 border border-green-100 rounded-2xl p-6">
          <h4 className="text-lg font-semibold text-green-700 mb-3">
            📈 Expected Measurable Impact
          </h4>

          <p className="text-gray-800 leading-relaxed">
            {data["Expected Measurable Impact"]}
          </p>
        </section>

        {/* Resources */}
        <section className="space-y-3">
          <h4 className="text-lg font-semibold text-green-700">
            💰 Required Resources
          </h4>

          <p className="text-gray-700 leading-relaxed">
            {data["Required Resources"]}
          </p>
        </section>

        {/* Evidence */}
        <section className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
          <h4 className="text-lg font-semibold text-green-700 mb-3">
            📊 Supporting Evidence
          </h4>

          <p className="text-gray-700 leading-relaxed">
            {data["Supporting Evidence from Data"]}
          </p>
        </section>

      </CardContent>
    </Card>
  );
}