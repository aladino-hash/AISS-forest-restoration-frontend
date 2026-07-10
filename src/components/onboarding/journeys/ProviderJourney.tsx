import { useState } from "react";

import ProviderIntro from "../steps/provider/ProviderIntro";
import StepServiceType from "../steps/provider/StepServiceType";
import StepCapabilities from "../steps/provider/StepCapabilities";
import StepCoverage from "../steps/provider/StepCoverage";
import StepWorkspacePreview from "../steps/provider/StepWorkspacePreview";
import StepContact from "../steps/provider/StepContact";

export default function ProviderJourney() {
  const [serviceType, setServiceType] = useState("");
  const [capability, setCapability] = useState("");
  const [coverage, setCoverage] = useState("");

  return (
    <div className="mt-8 rounded-2xl border border-emerald-100 bg-emerald-50 p-6">

      <ProviderIntro
        serviceType={serviceType}
      />

      <StepServiceType
        serviceType={serviceType}
        setServiceType={setServiceType}
      />

      <StepCapabilities
        serviceType={serviceType}
        capability={capability}
        setCapability={setCapability}
      />

      <StepCoverage
        capability={capability}
        coverage={coverage}
        setCoverage={setCoverage}
      />

      <StepWorkspacePreview
        serviceType={serviceType}
        capability={capability}
        coverage={coverage}
      />

      <StepContact
        coverage={coverage}
      />

    </div>
  );
}