interface RestoreIntroProps {
  restoreStarted: boolean;
  setRestoreStarted: (value: boolean) => void;

  name: string;
  whatsapp: string;
  country: string;
}

export default function RestoreIntro({
  restoreStarted,
  setRestoreStarted,
  name,
  whatsapp,
  country,
}: RestoreIntroProps) {
  return (
    <>
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
        Restoration Partner Onboarding
      </p>

      <h3 className="mt-3 text-2xl font-bold text-gray-900">
        🌱 Let's restore your land together.
      </h3>

      <div className="mt-4 h-2 w-full rounded-full bg-emerald-100">
        <div
          className="h-2 rounded-full bg-emerald-600 transition-all duration-500"
          style={{
            width: !restoreStarted
              ? "10%"
              : !name
              ? "30%"
              : !whatsapp
              ? "55%"
              : !country
              ? "80%"
              : "100%",
          }}
        />
      </div>

      <p className="mt-3 text-gray-700 leading-7">
        Every restored hectare begins with a single step.
        We'll guide you using artificial intelligence,
        satellite imagery, local knowledge and WhatsApp
        to create a restoration plan tailored to your land.
      </p>

      {!restoreStarted && (
        <button
          onClick={() => setRestoreStarted(true)}
          className="mt-6 rounded-lg bg-emerald-600 px-6 py-3 font-semibold text-white hover:bg-emerald-700 transition-colors"
        >
          Start my restoration journey →
        </button>
      )}
    </>
  );
}