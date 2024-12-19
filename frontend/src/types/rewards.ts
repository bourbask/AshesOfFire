import { CURRENCIES_NAMES } from "./currencies";
import { PROGRESSION_NAMES } from "./progression";

export const BLACK_LIGHT_REWARDS_IDENTIFIERS = [
  "Rinusk",
  "Traceur",
  "Cerebrum",
] as const;

export type BLACK_LIGHT_REWARD_NAMES =
  (typeof BLACK_LIGHT_REWARDS_IDENTIFIERS)[number];

export type MoneyGainProps = { [name in CURRENCIES_NAMES]: number };
export type ProgressionGainProps = { [name in PROGRESSION_NAMES]: number };
export type BlackLightRewardProps = {
  [name in BLACK_LIGHT_REWARD_NAMES]: { min: number; max: number };
};

export type BaseRewardProps = MoneyGainProps & ProgressionGainProps;

export type RewardProps<NpcProps extends { is_blacklight?: boolean }> =
  NpcProps extends { is_blacklight: true }
    ? BaseRewardProps & BlackLightRewardProps
    : BaseRewardProps;
