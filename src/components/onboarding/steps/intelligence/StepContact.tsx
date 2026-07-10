interface StepContactProps {
  geography: string;
}

export default function StepContact({
  geography,
}: StepContactProps) {
  if (!geography) return null;

  return (
    <>
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
        Activate Workspace
      </p>

      <h3 className="mt-3 text-2xl font-bold text-gray-900">
        🚀 Your workspace is ready.
      </h3>

      <p className="mt-3 text-gray-700 leading-7">
        Enter your email address and we'll create your personalized
        Restoration Intelligence Workspace and send you a secure
        activation link.
      </p>

      <input
        type="email"
        placeholder="Email address"
        className="mt-6 w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-emerald-500 focus:outline-none"
      />

      <button
        className="mt-6 w-full rounded-xl bg-emerald-600 py-3 font-semibold text-white transition hover:bg-emerald-700"
      >
        Create my Workspace →
      </button>
    </>
  );
}