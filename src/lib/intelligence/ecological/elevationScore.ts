export function calculateElevationScore(
  elevation: number,
  min: number,
  max: number
): number {

  if (elevation >= min && elevation <= max) {
    return 2;
  }

  const distance = Math.min(
    Math.abs(elevation - min),
    Math.abs(elevation - max)
  );

  if (distance <= 100) {
    return 1;
  }

  return 0;
}