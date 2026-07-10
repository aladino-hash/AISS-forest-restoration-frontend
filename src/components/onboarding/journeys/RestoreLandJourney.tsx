import StepIdentity from "../steps/shared/StepIdentity";
import StepLocation from "../steps/shared/StepLocation";
import RestoreIntro from "../steps/RestoreIntro";
import StepSatelliteDiscovery from "../steps/StepSatelliteDiscovery";

interface RestoreLandJourneyProps {
  restoreStarted: boolean;
  setRestoreStarted: (value: boolean) => void;

  name: string;
  setName: (value: string) => void;

  whatsapp: string;
  setWhatsapp: (value: string) => void;

  country: string;
  setCountry: (value: string) => void;

  region: string;
  setRegion: (value: string) => void;

  province: string;
  setProvince: (value: string) => void;

  community: string;
  setCommunity: (value: string) => void;
}

export default function RestoreLandJourney({
  restoreStarted,
  setRestoreStarted,
  name,
  setName,
  whatsapp,
  setWhatsapp,
  country,
  setCountry,
  region,
  setRegion,
  province,
  setProvince,
  community,
  setCommunity,
}: RestoreLandJourneyProps) {
  return (
    <div className="mt-8 rounded-2xl border border-emerald-100 bg-emerald-50 p-6">

      <RestoreIntro
        restoreStarted={restoreStarted}
        setRestoreStarted={setRestoreStarted}
        name={name}
        whatsapp={whatsapp}
        country={country}
      />

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
            <StepSatelliteDiscovery
              country={country}
              region={region}
              province={province}
              community={community}
            />
          )}
        </>
      )}

      {/* Paste the rest of the existing Restore Land JSX here */}

    </div>
  );
}