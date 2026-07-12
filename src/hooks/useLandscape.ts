import { useState } from "react";

export function useLandscape() {
  const [selectedLandscape, setSelectedLandscape] = useState({
    id: "ucayali",
    name: "Ucayali, Peru",
    priority: "Very High",
  });

  return {
    selectedLandscape,
    setSelectedLandscape,
  };
}