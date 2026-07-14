import {
  createContext,
  ReactNode,
  useContext,
  useState,
} from "react";

import { WorkspaceBlueprint } from "@/types/workspace/WorkspaceBlueprint";

type ContextType = {
  blueprint: WorkspaceBlueprint | null;
  setBlueprint: (
    blueprint: WorkspaceBlueprint
  ) => void;
};

const BlueprintContext =
  createContext<ContextType | undefined>(undefined);

export function BlueprintProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [blueprint, setBlueprint] =
    useState<WorkspaceBlueprint | null>(null);

  return (
    <BlueprintContext.Provider
      value={{
        blueprint,
        setBlueprint,
      }}
    >
      {children}
    </BlueprintContext.Provider>
  );
}

export function useBlueprint() {
  const context = useContext(BlueprintContext);

  if (!context) {
    throw new Error(
      "useBlueprint must be used inside BlueprintProvider"
    );
  }

  return context;
}