/**
 * Formats values that may be:
 * - null / undefined
 * - string
 * - number
 * - { min, max }
 * - { minimum, maximum }
 */
export function formatRange(
  value: unknown,
  unit = ""
): string {
  if (value === null || value === undefined) {
    return "Not specified";
  }

  if (typeof value === "string") {
    return unit ? `${value} ${unit}` : value;
  }

  if (typeof value === "number") {
    return unit ? `${value} ${unit}` : `${value}`;
  }

  if (typeof value === "object") {
    const range = value as Record<string, unknown>;

    const minimum =
      (range.minimum as number | null | undefined) ??
      (range.min as number | null | undefined);

    const maximum =
      (range.maximum as number | null | undefined) ??
      (range.max as number | null | undefined);

    if (
      minimum !== null &&
      minimum !== undefined &&
      maximum !== null &&
      maximum !== undefined
    ) {
      return `${minimum}–${maximum}${unit ? ` ${unit}` : ""}`;
    }

    if (minimum !== null && minimum !== undefined) {
      return `≥ ${minimum}${unit ? ` ${unit}` : ""}`;
    }

    if (maximum !== null && maximum !== undefined) {
      return `≤ ${maximum}${unit ? ` ${unit}` : ""}`;
    }

    return "Not specified";
  }

  return "Not specified";
}