interface ProviderIntroProps {
  serviceType: string;
}

export default function ProviderIntro({
  serviceType,
}: ProviderIntroProps) {
  return (
    <>
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
        Restoration Service Network
      </p>

      <h3 className="mt-3 text-2xl font-bold text-gray-900">
        🤝 Become a Restoration Service Provider
      </h3>

      <p className="mt-3 text-gray-700 leading-7">
        Join the FYNOS AI Restoration Network and connect your expertise
        with restoration projects, organizations and landowners looking
        for trusted restoration partners.
      </p>

      <div className="mt-4 h-2 w-full rounded-full bg-emerald-100">
        <div
          className="h-2 rounded-full bg-emerald-600 transition-all duration-500"
          style={{
            width: !serviceType ? "20%" : "100%",
          }}
        />
      </div>
    </>
  );
}