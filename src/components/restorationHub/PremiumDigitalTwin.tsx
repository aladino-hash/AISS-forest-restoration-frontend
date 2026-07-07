import {
  Crown,
  Check,
  ArrowRight,
} from "lucide-react";

export default function PremiumDigitalTwin() {
  return (
    <section className="rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-white p-8">

      <div className="flex items-center gap-3">

        <div className="rounded-2xl bg-emerald-100 p-3">
          <Crown
            size={28}
            className="text-emerald-700"
          />
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
            Premium
          </p>

          <h2 className="text-3xl font-bold text-slate-900">
            Digital Twin
          </h2>
        </div>

      </div>

      <p className="mt-5 text-slate-600 leading-7">
        Unlock photogrammetry, drone surveys,
        AI monitoring and immersive Digital Twins
        for precision restoration.
      </p>

      <div className="mt-8 space-y-4">

        {[
          "Drone Mapping",
          "3D Digital Twin",
          "AI Monitoring",
          "Historical Change Detection",
          "Priority Restoration Zones",
        ].map((feature) => (

          <div
            key={feature}
            className="flex items-center gap-3"
          >
            <Check
              size={18}
              className="text-emerald-600"
            />

            <span className="text-slate-700">
              {feature}
            </span>

          </div>

        ))}

      </div>

      <button
        className="
          mt-8
          flex
          items-center
          gap-2
          rounded-2xl
          bg-emerald-600
          px-6
          py-4
          font-semibold
          text-white
          transition
          hover:bg-emerald-700
        "
      >
        Upgrade to Premium

        <ArrowRight size={18} />

      </button>

    </section>
  );
}