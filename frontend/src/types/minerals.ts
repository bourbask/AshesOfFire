export const MINERALS_IDENTIFIERS = [
  "Prometium",
  "Endurium",
  "Terbium",
  "Prometid",
  "Duranium",
  "Xenomit",
  "Promerium",
  "Palladium",
  "Seprom",
] as const;

export type MINERALS_NAMES = (typeof MINERALS_IDENTIFIERS)[number];

export type RefineProps = {
  amount: number;
};

export type MineralProps = {
  base_sell_price: number;
  mining_duration: number;
  refined_to?: Array<{ [name in MINERALS_NAMES]?: RefineProps }>;
};

export const MINERALS: { [name in MINERALS_NAMES]: MineralProps } = {
  Prometium: {
    base_sell_price: 10,
    mining_duration: 100,
    refined_to: [
      {
        Prometid: {
          amount: 100,
        },
      },
    ],
  },
  Endurium: {
    base_sell_price: 12,
    mining_duration: 250,
    refined_to: [
      {
        Prometid: {
          amount: 100,
        },
      },
      {
        Duranium: {
          amount: 100,
        },
      },
    ],
  },
  Terbium: {
    base_sell_price: 15,
    mining_duration: 500,
    refined_to: [
      {
        Duranium: {
          amount: 100,
        },
      },
    ],
  },
  Prometid: {
    base_sell_price: 100,
    mining_duration: 0,
    refined_to: [
      {
        Promerium: {
          amount: 10,
        },
      },
    ],
  },
  Duranium: {
    base_sell_price: 125,
    mining_duration: 0,
    refined_to: [
      {
        Promerium: {
          amount: 10,
        },
      },
    ],
  },
  Xenomit: {
    base_sell_price: 0,
    mining_duration: 0,
    refined_to: [
      {
        Promerium: {
          amount: 10,
        },
      },
    ],
  },
  Promerium: {
    base_sell_price: 1000,
    mining_duration: 0,
  },
  Palladium: {
    base_sell_price: 15, // Specific case: Can only be sold by 15 units, and does not give credits but click GG (15 => 1)
    mining_duration: 6000,
  },
  Seprom: {
    base_sell_price: 10000,
    mining_duration: 0,
  },
};
