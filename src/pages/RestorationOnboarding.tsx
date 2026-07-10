import IntelligencePartnerJourney from "@/components/onboarding/journeys/IntelligencePartnerJourney";
import RestorationPartnerJourney from "@/components/onboarding/journeys/RestorationPartnerJourney";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import { PageLayout } from "@/components/layout/PageLayout";
import RestoreLandJourney from "@/components/onboarding/journeys/RestoreLandJourney";
import ProviderJourney from "@/components/onboarding/journeys/ProviderJourney";

export default function RestorationOnboarding() {
  const [selectedMission, setSelectedMission] = useState<string | null>(null);

  // Restore Land journey state
  const [restoreStarted, setRestoreStarted] = useState(false);

  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");

  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");
  const [province, setProvince] = useState("");
  const [community, setCommunity] = useState("");

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

            <p className="mt-3 leading-7 text-gray-600">
              {t("onboarding.description")}
            </p>

            <div className="mt-4 flex gap-2">
              <button
                onClick={() => i18n.changeLanguage("en")}
                className="rounded-full border px-3 py-1 text-xs"
              >
                EN
              </button>

              <button
                onClick={() => i18n.changeLanguage("es")}
                className="rounded-full border px-3 py-1 text-xs"
              >
                ES
              </button>

              <button
                onClick={() => i18n.changeLanguage("pt")}
                className="rounded-full border px-3 py-1 text-xs"
              >
                PT
              </button>
            </div>
          </div>

          <div
            className={`mt-8 grid gap-6 ${
              selectedMission
                ? "grid-cols-1"
                : "grid-cols-1 md:grid-cols-3"
            }`}
          >
            {(!selectedMission || selectedMission === "intelligence") && (
              <div
                onClick={() => setSelectedMission("intelligence")}
                className={`cursor-pointer rounded-2xl p-6 transition-all ${
                  selectedMission === "intelligence"
                    ? "border-2 border-emerald-600 bg-emerald-50 shadow-lg"
                    : "border border-emerald-100 hover:border-emerald-400 hover:shadow-md"
                }`}
              >
                <h3 className="text-xl font-bold text-gray-900">
                  🌍 Become a Restoration Intelligence Partner
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  Configure your personalized restoration intelligence
                  workspace, explore environmental data, discover restoration
                  opportunities, and collaborate with stakeholders restoring
                  ecosystems worldwide.
                </p>
              </div>
            )}

            {(!selectedMission || selectedMission === "restore_land") && (
              <div
                onClick={() => setSelectedMission("restore_land")}
                className={`cursor-pointer rounded-2xl p-6 transition-all ${
                  selectedMission === "restore_land"
                    ? "border-2 border-emerald-600 bg-emerald-50 shadow-lg"
                    : "border border-emerald-100 hover:border-emerald-400 hover:shadow-md"
                }`}
              >
                <div className="mb-4 text-3xl">🌱</div>

                <h3 className="text-xl font-bold text-gray-900">
                  Restore Land
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  Receive AI-assisted restoration plans, monitor your land,
                  connect with restoration experts, and restore your ecosystem
                  with guidance from FYNOS AI.
                </p>
              </div>
            )}

            {(!selectedMission || selectedMission === "provide_services") && (
              <div
                onClick={() => setSelectedMission("provide_services")}
                className={`cursor-pointer rounded-2xl p-6 transition-all ${
                  selectedMission === "provide_services"
                    ? "border-2 border-emerald-600 bg-emerald-50 shadow-lg"
                    : "border border-emerald-100 hover:border-emerald-400 hover:shadow-md"
                }`}
              >
                <div className="mb-4 text-3xl">🤝</div>

                <h3 className="text-xl font-bold text-gray-900">
                  Offer Services
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  Join restoration projects, offer your expertise, and help
                  bring restoration plans to life.
                </p>
              </div>
            )}
          </div>

          {selectedMission && (
            <button
              onClick={() => {
                setSelectedMission(null);
                setRestoreStarted(false);
              }}
              className="mb-6 flex items-center gap-2 text-sm font-medium text-emerald-700 transition-colors hover:text-emerald-900"
            >
              ← Choose another mission
            </button>
          )}

          {selectedMission === "restore_land" && (
            <RestoreLandJourney
              restoreStarted={restoreStarted}
              setRestoreStarted={setRestoreStarted}
              name={name}
              setName={setName}
              whatsapp={whatsapp}
              setWhatsapp={setWhatsapp}
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

          {selectedMission === "provide_services" && (
            <ProviderJourney />
          )}

          {selectedMission === "intelligence" && (
            <IntelligencePartnerJourney />
          )}

          {selectedMission === "provide_services" && (
            <RestorationPartnerJourney />
          )}
        </section>
      </div>
    </PageLayout>
  );
}