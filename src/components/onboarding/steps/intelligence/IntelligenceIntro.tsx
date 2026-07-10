interface IntelligenceIntroProps {
  organizationType: string;
}

export default function IntelligenceIntro({
  organizationType,
}: IntelligenceIntroProps) {
  return (
    <>
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
        Restoration Intelligence Partner
      </p>

      <h3 className="mt-3 text-2xl font-bold text-gray-900">
        🌍 Let's personalize your intelligence workspace.
      </h3>

      <p className="mt-3 text-gray-700 leading-7">
        Tell us a little about your organization so FYNOS AI can build a
        personalized restoration intelligence workspace tailored to your
        mission, geography and priorities.
      </p>

      <div className="mt-4 h-2 w-full rounded-full bg-emerald-100">
        <div
          className="h-2 rounded-full bg-emerald-600 transition-all duration-500"
          style={{
            width: !organizationType ? "20%" : "100%",
          }}
        />
      </div>
    </>
  );
}