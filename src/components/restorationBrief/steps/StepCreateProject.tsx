interface StepCreateProjectProps {
  onCreateProject: () => void;
}

export default function StepCreateProject({
  onCreateProject,
}: StepCreateProjectProps) {
  return (
    <section>

      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-600">
        Step 7 of 7
      </p>

      <h2 className="mt-3 text-3xl font-bold text-gray-900">
        Your restoration project is ready
      </h2>

      <p className="mt-5 leading-8 text-gray-600">
        FYNOS AI has completed the assessment and prepared your personalized
        restoration strategy. The next step is to transform these
        recommendations into a living restoration project where you can
        plan, monitor and manage every stage of implementation.
      </p>

      <div className="mt-10 rounded-3xl bg-gradient-to-r from-emerald-700 to-green-600 p-8 text-white">

        <h3 className="text-2xl font-bold">
          🌱 Ready to begin?
        </h3>

        <p className="mt-4 leading-8 text-emerald-50">
          Create your Digital Restoration Workspace and start managing your
          restoration project.
        </p>

        <button
          onClick={onCreateProject}
          className="mt-8 w-full rounded-2xl bg-white px-8 py-4 text-lg font-semibold text-emerald-700 transition hover:scale-[1.02]"
        >
          Create Restoration Project →
        </button>

      </div>

    </section>
  );
}