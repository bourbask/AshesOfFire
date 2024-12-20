import isLabyrinthMapName from "./isLabyrinthMapName";

export type DecodedAddress = {
  map: LabyrinthMapName; // Nom complet de la carte
  sector: number; // Secteur : 1, 2, 3 ou 4
  portal?: number; // Portail : 1, 2, 3 ou 4
};

export const LABYRINTH_MAP = {
  ATA: 'Atlas_A',
  ATB: 'Atlas_B',
  ATC: 'Atlas_C',
  AL: 'Alcyone',
  AQ: 'Aquila',
  AU: 'Auriga',
  BO: 'Bootes',
  CY: 'Cygni',
  ER: 'Eridani',
  HE: 'Helvetios',
  MA: 'Maia',
  OR: 'Orion',
  PE: 'Persei',
  SA: 'Sadatoni',
  SI: 'Sirius',
  VO: 'Volantis',
} as const;

export type LabyrinthMapName = keyof typeof LABYRINTH_MAP;

/**
 * Decode an address into its components: map, sector, and portal.
 * 
 * @param address - The address string (e.g., "ATC12").
 * @returns An object containing map, sector, and portal.
 * @throws An error if the address format is invalid.
 */
const decodeAddress = (address: string): DecodedAddress => {
  const match = address.match(/^([A-Z]+)([1-4])([1-4])?$/);

  if (!match) {
    throw new Error(`Invalid address format: ${address}`);
  }

  const [, map, sector, portal] = match;

  if (!map || !sector) {
    throw new Error(`Invalid address components: ${address}`);
  }

  if (!isLabyrinthMapName(map)) {
    throw new Error(`Invalid address format`);
  }

  return {
    map,
    sector: parseInt(sector, 10),
    portal: portal ? parseInt(portal, 10) : undefined,
  };
};

export default decodeAddress;
