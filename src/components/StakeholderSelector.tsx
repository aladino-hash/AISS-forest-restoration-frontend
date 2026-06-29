import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function StakeholderSelector() {
  const [selectedMission, setSelectedMission] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [country, setCountry] = useState("");
  const [restoreStarted, setRestoreStarted] = useState(false);
  const { t, i18n } = useTranslation();

  return (
    <section className="rounded-3xl border border-emerald-100 bg-white p-8 shadow-sm">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-600">
          {t("onboarding.label")}
        </p>

        <h2 className="mt-3 text-3xl font-bold text-gray-900">
          {t("onboarding.title")}
        </h2>

        <p className="mt-3 text-gray-600 leading-7">
          {t("onboarding.description")}
        </p>

        <div className="mt-4 flex gap-2">
          <button
            onClick={() => i18n.changeLanguage("en")}
            className="text-xs px-3 py-1 rounded-full border"
          >
            EN
          </button>

          <button
            onClick={() => i18n.changeLanguage("es")}
            className="text-xs px-3 py-1 rounded-full border"
          >
            ES
          </button>

          <button
            onClick={() => i18n.changeLanguage("pt")}
            className="text-xs px-3 py-1 rounded-full border"
          >
            PT
          </button>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          onClick={() => setSelectedMission("intelligence")}
          className={`rounded-2xl p-6 cursor-pointer transition-all ${
            selectedMission === "intelligence"
              ? "border-2 border-emerald-600 bg-emerald-50 shadow-lg"
              : "border border-emerald-100 hover:border-emerald-400 hover:shadow-md"
          }`}
          >
          <div className="text-3xl mb-4">🌍</div>
          <h3 className="text-xl font-bold text-gray-900">
            {t("onboarding.missions.intelligence.title")}
          </h3>
          <p className="mt-3 text-sm text-gray-600 leading-6">
            {t("onboarding.missions.intelligence.description")}
          </p>
        </div>

        <div
          onClick={() => setSelectedMission("restore_land")}
          className={`rounded-2xl p-6 cursor-pointer transition-all ${
            selectedMission === "restore_land"
              ? "border-2 border-emerald-600 bg-emerald-50 shadow-lg"
              : "border border-emerald-100 hover:border-emerald-400 hover:shadow-md"
          }`}
        >
          <div className="text-3xl mb-4">🌱</div>
          <h3 className="text-xl font-bold text-gray-900">
            Restore Land
          </h3>
          <p className="mt-3 text-sm text-gray-600 leading-6">
            Receive AI-assisted restoration plans, monitor your land, and connect
            with restoration experts through WhatsApp.
          </p>
        </div>

        <div
          onClick={() => setSelectedMission("provide_services")}
          className={`rounded-2xl p-6 cursor-pointer transition-all ${
            selectedMission === "provide_services"
              ? "border-2 border-emerald-600 bg-emerald-50 shadow-lg"
              : "border border-emerald-100 hover:border-emerald-400 hover:shadow-md"
          }`}
          >
          <div className="text-3xl mb-4">🤝</div>
          <h3 className="text-xl font-bold text-gray-900">
            Offer Services
          </h3>
          <p className="mt-3 text-sm text-gray-600 leading-6">
            Join restoration projects, offer your expertise, and help bring
            agroforestry and restoration plans to life.
          </p>
        </div>
      </div>

      {selectedMission === "restore_land" && (
        <div className="mt-8 rounded-2xl border border-emerald-100 bg-emerald-50 p-6">
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

            We'll guide you using artificial intelligence, satellite imagery, local knowledge, and WhatsApp to create a restoration plan tailored to your land.
          </p>

          {!restoreStarted && (
            <button
              onClick={() => setRestoreStarted(true)}
              className="mt-6 rounded-lg bg-emerald-600 px-6 py-3 font-semibold text-white hover:bg-emerald-700 transition-colors"
            >
              Start my restoration journey →
            </button>
          )}

          {restoreStarted && (

            <>
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
                      <span className="font-semibold text-emerald-700">
                        {name}
                      </span>
                      . FYNOS AI will use WhatsApp to keep this process simple and accessible.
                    </p>
                  </div>
                )}

                {name && (
                  <div className="mt-6">
                    <label className="text-sm font-medium text-gray-700">
                      WhatsApp number
                    </label>

                    <p className="mt-1 text-sm text-gray-500">
                      We'll use WhatsApp to send AI recommendations, restoration updates, and
                      important notifications about your land.
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
                      <span className="font-semibold text-emerald-700">
                        {whatsapp}
                      </span>{" "}
                      to send restoration updates, AI recommendations, and alerts about your land.
                    </p>
                  </div>
                )}

                {whatsapp && (
                  <div className="mt-6">
                    <label className="text-xl font-semibold text-gray-900">
                      🌎 Where is the land you'd like to restore?
                    </label>

                    <select
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      className="mt-3 w-full rounded-lg border border-emerald-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    >
                      <option value="">Select a country</option>
                      <option value="Peru">Peru</option>
                      <option value="Brazil">Brazil</option>
                      <option value="Colombia">Colombia</option>
                      <option value="Ecuador">Ecuador</option>
                      <option value="Bolivia">Bolivia</option>
                    </select>
                  </div>
                )}

                {country && (
                  <div className="mt-6 rounded-xl bg-white border border-emerald-100 p-4">
                    <p className="text-sm text-gray-700">
                      Great. We&apos;ll start with{" "}
                      <span className="font-semibold text-emerald-700">
                        {country}
                      </span>
                      . Next, we&apos;ll help you identify your land using satellite imagery.
                    </p>
                  </div>
                )}

                {country && (
                  <button
                    className="mt-6 rounded-lg bg-emerald-600 px-6 py-3 font-semibold text-white hover:bg-emerald-700 transition-colors"
                  >
                    🌍 Let's meet your land →
                  </button>
                )}
              </div>
            </>
          )}
        </div>
      )}
    </section>
  );
}