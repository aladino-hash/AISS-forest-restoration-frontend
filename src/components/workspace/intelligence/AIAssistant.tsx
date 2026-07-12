export default function AIAssistant() {
  return (
    <section className="rounded-3xl border border-emerald-100 bg-gradient-to-br from-emerald-50 to-white p-6 shadow-sm">

      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600">
        AI Copilot
      </p>

      <h2 className="mt-2 text-2xl font-bold text-gray-900">
        Restoration Advisor
      </h2>

      <p className="mt-4 text-sm leading-6 text-gray-600">
        Ask FYNOS AI to discover restoration opportunities, identify funding,
        recommend partners, analyze satellite imagery and prioritize landscapes.
      </p>

      <div className="mt-6 rounded-xl border border-emerald-100 bg-white p-4">

        <p className="text-sm font-medium text-gray-800">
          Suggested question
        </p>

        <p className="mt-2 text-sm text-gray-600 italic">
          Which degraded landscapes in Ucayali should we prioritize during the next 12 months?
        </p>

      </div>

      <button className="mt-6 w-full rounded-xl bg-emerald-600 py-3 font-semibold text-white hover:bg-emerald-700">
        Start AI Conversation
      </button>

    </section>
  );
}