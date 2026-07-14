interface RestorationVerdictProps {
  verdict: {
    title: string;
    description: string;
  };
}

export default function RestorationVerdict({
  verdict,
}: RestorationVerdictProps) {
  return (
    <section className="mt-10 rounded-3xl border border-emerald-200 bg-gradient-to-r from-emerald-700 to-green-600 p-8 text-white shadow-lg">

      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-100">
        FYNOS AI Verdict
      </p>

      <h2 className="mt-3 text-3xl font-bold">
        {verdict.title}
      </h2>

      <p className="mt-5 max-w-4xl leading-8 text-emerald-50">
        {verdict.description}
      </p>

    </section>
  );
}