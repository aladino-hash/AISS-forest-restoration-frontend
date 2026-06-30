interface StepIdentityProps {
  name: string;
  setName: (value: string) => void;
  whatsapp: string;
  setWhatsapp: (value: string) => void;
}

export default function StepIdentity({
  name,
  setName,
  whatsapp,
  setWhatsapp,
}: StepIdentityProps) {
  return (
    <div className="mt-6">
      <label className="text-xl font-semibold text-gray-900">
        👋 What should we call you?
      </label>

      <input
        type="text"
        placeholder="Your first name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="mt-2 w-full rounded-lg border border-emerald-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
      />

      {name && (
        <div className="mt-4 rounded-xl bg-white border border-emerald-100 p-4">
          <p className="text-sm text-gray-700">
            Nice to meet you,{" "}
            <span className="font-semibold text-emerald-700">{name}</span>.
            FYNOS AI will use WhatsApp to keep this process simple and
            accessible.
          </p>
        </div>
      )}

      {name && (
        <div className="mt-6">
          <label className="text-sm font-medium text-gray-700">
            WhatsApp number
          </label>

          <p className="mt-1 text-sm text-gray-500">
            We'll use WhatsApp to send AI recommendations, restoration updates,
            and important notifications about your land.
          </p>

          <input
            type="tel"
            placeholder="+51 999 999 999"
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
            className="mt-3 w-full rounded-lg border border-emerald-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>
      )}

      {whatsapp && (
        <div className="mt-6 rounded-xl bg-white border border-emerald-100 p-4">
          <p className="text-sm text-gray-700">
            Great. We&apos;ll use{" "}
            <span className="font-semibold text-emerald-700">{whatsapp}</span>{" "}
            to send restoration updates, AI recommendations, and alerts about
            your land.
          </p>
        </div>
      )}
    </div>
  );
}