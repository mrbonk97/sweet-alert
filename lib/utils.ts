import { CAFES } from "@/constants/constants";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function sleep(ms: number): Promise<boolean> {
  return new Promise((resolve) => setTimeout(() => resolve(true), ms));
}

export function getCafeById(id: string) {
  const cafe = CAFES.find((c) => c.id === id);
  if (!cafe) throw new Error(`카페를 찾을 수 없습니다. ID:${id}`);
  return cafe;
}
