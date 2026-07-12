import { landscapes } from "@/data/mock/landscapes";

export async function getLandscapes() {
  return Promise.resolve(landscapes);
}

export async function getLandscape(id: string) {
  return Promise.resolve(
    landscapes.find((l) => l.id === id)
  );
}