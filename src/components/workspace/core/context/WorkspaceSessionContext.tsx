import {
  createContext,
  ReactNode,
  useContext,
  useState,
} from "react";

import { WorkspaceSession } from "@/types/workspace/WorkspaceSession";

type ContextType = {
  session: WorkspaceSession | null;

  setSession: (
    session: WorkspaceSession
  ) => void;

  updateSession: (
    partial: Partial<WorkspaceSession>
  ) => void;
};

const WorkspaceSessionContext =
  createContext<ContextType | undefined>(
    undefined
  );

export function WorkspaceSessionProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [session, setSession] =
    useState<WorkspaceSession | null>(null);

  const updateSession = (
    partial: Partial<WorkspaceSession>
  ) => {
    setSession((current) => {
      if (!current) return current;

      return {
        ...current,
        ...partial,
      };
    });
  };

  return (
    <WorkspaceSessionContext.Provider
      value={{
        session,
        setSession,
        updateSession,
      }}
    >
      {children}
    </WorkspaceSessionContext.Provider>
  );
}

export function useWorkspaceSession() {
  const context = useContext(
    WorkspaceSessionContext
  );

  if (!context) {
    throw new Error(
      "useWorkspaceSession must be used inside WorkspaceSessionProvider"
    );
  }

  return context;
}