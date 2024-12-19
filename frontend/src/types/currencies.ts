export const CURRENCIES_IDENTIFIERS = ["Credit", "Uridium"] as const;

export type CURRENCIES_NAMES = (typeof CURRENCIES_IDENTIFIERS)[number];
