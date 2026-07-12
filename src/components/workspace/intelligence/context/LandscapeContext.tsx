import { Landscape } from "@/data/mock/landscapes";
import { getLandscapes } from "@/services/intelligence/landscapeService";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

type LandscapeContextType = {
  selectedLandscape: Landscape;
  setSelectedLandscape: (landscape: Landscape) => void;
};

const LandscapeContext = createContext<LandscapeContextType | undefined>(
  undefined
);

export function LandscapeProvider({
  children,
}: {
  children: ReactNode;
}) {

  const [selectedLandscape, setSelectedLandscape] =
    useState<Landscape | null>(null);

  useEffect(() => {
    async function loadLandscape() {
      const data = await getLandscapes();
      setSelectedLandscape(data[0]);
    }

    loadLandscape();
  }, []);

  if (!selectedLandscape) {
    return null;
  }

  return (
    <LandscapeContext.Provider
      value={{
        selectedLandscape,
        setSelectedLandscape,
      }}
    >
      {children}
    </LandscapeContext.Provider>
  );
}

export function useLandscapeContext() {
  const context = useContext(LandscapeContext);

  if (!context) {
    throw new Error(
      "useLandscapeContext must be used inside LandscapeProvider"
    );
  }

  return context;
}