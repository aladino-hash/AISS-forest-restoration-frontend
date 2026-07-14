import {
  createContext,
  ReactNode,
  useContext,
  useState,
} from "react";

import { IntelligenceProfile } from "@/types/workspace/IntelligenceProfile";

type ContextType = {
  profile: IntelligenceProfile;

  setProfile: (
    profile: IntelligenceProfile
  ) => void;
};

const IntelligenceProfileContext =
  createContext<ContextType | undefined>(
    undefined
  );

export function IntelligenceProfileProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [profile, setProfile] =
    useState<IntelligenceProfile>({
      organizationType: "NGO",

      focusAreas: [
        "Forest Restoration",
      ],

      geography: "Ucayali",

      workspaceName:
        "Restoration Intelligence Workspace",
    });

  return (
    <IntelligenceProfileContext.Provider
      value={{
        profile,
        setProfile,
      }}
    >
      {children}
    </IntelligenceProfileContext.Provider>
  );
}

export function useIntelligenceProfile() {
  const context = useContext(
    IntelligenceProfileContext
  );

  if (!context) {
    throw new Error(
      "useIntelligenceProfile must be used inside IntelligenceProfileProvider"
    );
  }

  return context;
}