import blackLightNpcs from "./black_light";
import classicNpcs from "./classic";
import pirateNpcs from "./pirate";

const allNpcs = {
    ...classicNpcs,
    ...pirateNpcs,
    ...blackLightNpcs,
};

export default allNpcs;
export type AllNpcs = typeof allNpcs;
export type NpcNames = keyof AllNpcs;