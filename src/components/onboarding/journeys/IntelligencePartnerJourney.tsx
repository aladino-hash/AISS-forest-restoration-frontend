import { useState } from "react";
import StepFocusAreas from "../steps/intelligence/StepFocusAreas";
import StepGeography from "../steps/intelligence/StepGeography";

import IntelligenceIntro from "../steps/intelligence/IntelligenceIntro";
import StepOrganizationType from "../steps/intelligence/StepOrganizationType";
import StepContact from "../steps/intelligence/StepContact";
import StepWorkspacePreview from "../steps/intelligence/StepWorkspacePreview";

export default function IntelligencePartnerJourney() {
  const [organizationType, setOrganizationType] = useState("");
  const [focusArea, setFocusArea] = useState("");
  const [geography, setGeography] = useState("");

  return (
    <div className="mt-8 rounded-2xl border border-emerald-100 bg-emerald-50 p-6">

      <IntelligenceIntro
        organizationType={organizationType}
      />

      <StepOrganizationType
        organizationType={organizationType}
        setOrganizationType={setOrganizationType}
      />

      <StepFocusAreas
        organizationType={organizationType}
        focusArea={focusArea}
        setFocusArea={setFocusArea}
      />

      <StepGeography
        organizationType={organizationType}
        focusArea={focusArea}
        geography={geography}
        setGeography={setGeography}
      />

      <StepWorkspacePreview
        organizationType={organizationType}
        focusArea={focusArea}
        geography={geography}
      />

      <StepContact
        organizationType={organizationType}
        focusArea={focusArea}
        geography={geography}
      />


    </div>
  );
}