export const PROGRESSION_IDENTIFIERS = [
  "Experience",
  "Honor",
  "Grade",
] as const;

export type PROGRESSION_NAMES = (typeof PROGRESSION_IDENTIFIERS)[number];
