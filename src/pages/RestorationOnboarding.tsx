import IntelligencePartnerJourney from "@/components/onboarding/journeys/IntelligencePartnerJourney";
import RestorationPartnerJourney from "@/components/onboarding/journeys/RestorationPartnerJourney";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import { PageLayout } from "@/components/layout/PageLayout";
import RestoreLandJourney from "@/components/onboarding/journeys/RestoreLandJourney";
import ProviderJourney from "@/components/onboarding/journeys/ProviderJourney";
import MissionCard from "@/components/onboarding/MissionCard";
import { missions } from "@/components/onboarding/config/missions";

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
          <div className="mx-auto max-w-4xl text-center">

            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-600">
              Welcome to FYNOS AI
            </p>

            <h1 className="mt-4 text-5xl font-bold tracking-tight text-gray-900">
              Every restoration journey begins with a mission.
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
              FYNOS AI is an operating system for ecological restoration,
              connecting people, intelligence and action to regenerate landscapes,
              strengthen communities and restore humanity's relationship with nature.
            </p>

            <div className="mt-10 rounded-2xl border border-emerald-100 bg-emerald-50 px-8 py-6">

                <h2 className="text-xl font-semibold text-gray-900">
                    Every person can help restore the living world.
                </h2>

                <p className="mt-3 text-gray-600 leading-7">
                    Choose the mission that best represents your role.
                    We'll prepare a personalized Restoration Intelligence Workspace
                    designed specifically for your journey.
                </p>

            </div>

          </div>

          <div
            className={`mt-8 grid gap-6 ${
              selectedMission ? "grid-cols-1" : "grid-cols-1 md:grid-cols-3"
            }`}
          >
            {missions
              .filter(
                (mission) =>
                  !selectedMission || mission.id === selectedMission
              )
              .map((mission) => (
                <MissionCard
                  key={mission.id}
                  icon={mission.icon}
                  subtitle={mission.subtitle}
                  title={mission.title}
                  description={mission.description}
                  journeyItems={mission.journeyItems}
                  closingMessage={mission.closingMessage}
                  selected={selectedMission === mission.id}
                  onClick={() => setSelectedMission(mission.id)}
                />
              ))}
          </div>
          {selectedMission && (
            <div className="mt-6">
              <button
                onClick={() => {
                  setSelectedMission(null);
                  setRestoreStarted(false);
                }}
                className="flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-5 py-2 text-sm font-medium text-emerald-700 transition hover:bg-emerald-50"
              >
                ← Explore another journey
              </button>
            </div>
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