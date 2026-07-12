import { useLandscapeContext } from "./context/LandscapeContext";

export default function OrganizationsPanel() {
  const { selectedLandscape } = useLandscapeContext();

  const partners = selectedLandscape.organizations;

  return (
    <section className="rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm">

      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600">
        Collaboration Network
      </p>

      <h2 className="mt-2 text-2xl font-bold text-gray-900">
        {selectedLandscape.name}
      </h2>

      <div className="mt-6 space-y-4">
        {partners.map((partner) => (
          <div
            key={partner.name}
            className="rounded-2xl border border-emerald-100 p-4"
          >
            <h3 className="font-semibold">
              {partner.name}
            </h3>

            <p className="mt-2 text-sm text-gray-600">
              {partner.role}
            </p>
          </div>
        ))}
      </div>

      <button className="mt-6 w-full rounded-xl border border-emerald-200 py-3 font-semibold text-emerald-700 hover:bg-emerald-50">
        View Collaboration Network
      </button>

    </section>
  );
}