interface StepContactProps {
  coverage: string;
}

export default function StepContact({
  coverage,
}: StepContactProps) {
  if (!coverage) return null;

  return (
    <div className="mt-8 rounded-2xl border border-emerald-100 bg-white p-6">

      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
        Activate Workspace
      </p>

      <h3 className="mt-3 text-2xl font-bold text-gray-900">
        🚀 Your Provider Workspace is ready.
      </h3>

      <p className="mt-3 text-gray-700 leading-7">
        Enter your email address and we'll create your personalized
        Provider Workspace, allowing FYNOS AI to connect you with
        restoration projects, organizations and landowners that
        match your expertise.
      </p>

      <input
        type="email"
        placeholder="Email address"
        className="mt-6 w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-emerald-500 focus:outline-none"
      />

      <button
        className="mt-6 w-full rounded-xl bg-emerald-600 py-3 font-semibold text-white transition hover:bg-emerald-700"
      >
        Create my Provider Workspace →
      </button>

    </div>
  );
}