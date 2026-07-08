import { PageLayout } from "@/components/layout/PageLayout";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import StepIdentity from "@/components/onboarding/StepIdentity";
import StepLocation from "@/components/onboarding/StepLocation";
import { useNavigate } from "react-router-dom";

export default function RestorationOnboarding() {
  const [selectedMission, setSelectedMission] = useState<string | null>(null);

  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");

  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");
  const [province, setProvince] = useState("");
  const [community, setCommunity] = useState("");

  const [restoreStarted, setRestoreStarted] = useState(false);

  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  return (
    <PageLayout>
      <div className="mx-auto max-w-7xl py-10">

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
                Receive AI-assisted restoration plans, monitor your land,
                and connect with restoration experts through WhatsApp.
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
                Join restoration projects, offer your expertise,
                and help bring restoration plans to life.
              </p>
            </div>

          </div>

          {selectedMission === "restore_land" && (
            <div className="mt-8 rounded-2xl border border-emerald-100 bg-emerald-50 p-6">

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
                Restoration Partner Onboarding
              </p>

              <h3 className="mt-3 text-2xl font-bold text-gray-900">
                🌱 Let&apos;s restore your land together.
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

              {restoreStarted && (
                <>

                  <StepIdentity
                    name={name}
                    setName={setName}
                    whatsapp={whatsapp}
                    setWhatsapp={setWhatsapp}
                  />

                  {whatsapp && (
                    <StepLocation
                      country={country}
                      setCountry={setCountry}
                      region={region}
                      setRegion={setRegion}
                      province={province}
                      setProvince={setProvince}
                      community={community}
                      setCommunity={setCommunity}
                    />
                  )}

                  {country && (
                    <div className="mt-8 rounded-2xl border border-emerald-200 bg-gradient-to-br from-white to-emerald-50 p-6 shadow-sm">

                      <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-2xl">
                          🛰️
                        </div>

                        <div>
                          <h3 className="text-xl font-bold text-gray-900">
                            Next: Discover your land
                          </h3>

                          <p className="text-sm text-emerald-700">
                            You're only one step away from your AI restoration assessment.
                          </p>
                        </div>
                      </div>

                      <div className="mt-6 space-y-4 text-gray-700 leading-7">

                        <p>
                          Great! We now know that your restoration project is located in{" "}
                          <span className="font-semibold text-emerald-700">
                            {community || province || region || country}
                          </span>.
                        </p>

                        <p>
                          In the next step, FYNOS AI will guide you through recent
                          <span className="font-semibold"> Sentinel-2 satellite imagery </span>
                          so we can locate your property together.
                        </p>

                        <p>
                          Once you outline your land, we'll automatically analyse:
                        </p>

                        <ul className="ml-5 list-disc space-y-2 text-sm text-gray-600">
                          <li>🌿 Vegetation health</li>
                          <li>⛰️ Terrain and slope</li>
                          <li>💧 Water availability</li>
                          <li>🔥 Environmental risks</li>
                          <li>🌱 Restoration opportunities</li>
                        </ul>

                        <div className="rounded-xl border border-emerald-100 bg-emerald-50 p-4">
                          <p className="text-sm italic text-gray-600">
                            Don't worry if you've never used satellite maps before.
                            We'll guide you through every step of the process.
                          </p>
                        </div>

                      </div>

                      <button
                        onClick={() =>
                          navigate("/curimana", {
                            state: {
                              initialLocation: [
                                community,
                                province,
                                region,
                                country,
                              ]
                                .filter(Boolean)
                                .join(", "),
                            },
                          })
                        }
                        className="mt-8 rounded-xl bg-emerald-600 px-8 py-4 font-semibold text-white shadow-md transition-all hover:bg-emerald-700 hover:shadow-lg"
                      >
                        🛰️ Start Satellite Discovery
                      </button>

                    </div>
                  )}
                </>
              )}
            </div>
          )}
        </section>
      </div>
    </PageLayout>
  );
}