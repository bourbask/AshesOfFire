import allNpcs from "../data/npcs/main";
import { CargoProps } from "./cargos";
import { BaseRewardProps, BlackLightRewardProps } from "./rewards";

export type ShieldAbsorption =
  | 0
  | 0.1
  | 0.2
  | 0.3
  | 0.4
  | 0.5
  | 0.6
  | 0.7
  | 0.8
  | 0.9
  | 1;

export type InvulnerabilityProps = {
  condition: string;
  stats_while?: Omit<BaseNpcProps, "cargo" | "reward">;
};

export type NPC_NAMES = (typeof allNpcs)[number]["name"];

export type SummonedProps = {
  amount: number;
  npc: NPC_NAMES;
};

export type SummonerProps = {
  condition: string;
  stats_while?: Omit<BaseNpcProps, "cargo" | "reward">;
  summoned: Array<SummonedProps>;
};

export type BaseNpcProps = {
  name: string;
  hp: number;
  shield: number;
  shield_absorption: ShieldAbsorption;
  range: number;
  speed: number;
  damage: number;
  cargo: CargoProps;
  invulnerability?: InvulnerabilityProps;
  summoner?: SummonerProps;
};

export type NpcProps =
  | (BaseNpcProps & {
      is_blacklight: true;
      reward: BaseRewardProps & BlackLightRewardProps;
    })
  | (BaseNpcProps & {
      is_blacklight?: false;
      reward: BaseRewardProps;
    });
