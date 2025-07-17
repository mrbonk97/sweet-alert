import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getCategory(s: string | undefined) {
  if (!s) return "음료";
  if (s == "beverage") return "음료";
  if (s == "dessert") return "디저트";
  return `검색 : ${s}`;
}
