import { LabyrinthMapName } from "./decodeAddress";

/**
 * Generate all portal addresses for a given map and sector.
 * 
 * @param map - The map name (e.g., "ATC").
 * @param sector - The sector number (1-4).
 * @returns An array of portal addresses (e.g., ["ATC11", "ATC12", "ATC13", "ATC14"]).
 */
const getPortalsFromSector = (map: LabyrinthMapName, sector: number): string[] => {
  return [1, 2, 3, 4].map((portal) => `${map}${sector}${portal}`);
};


export default getPortalsFromSector;