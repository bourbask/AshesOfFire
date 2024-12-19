import { MINERALS_NAMES } from "./minerals";

export type CargoProps = {
  minerals: { [name in MINERALS_NAMES]?: number };
};
