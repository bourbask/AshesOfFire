import { LabyrinthMapName } from "./decodeAdress";

const getPortalsFromSector = (card: LabyrinthMapName, sector: number): string[] => {
  return [1, 2, 3, 4].map((portal) => `${card}${sector}${portal}`);
};

export default getPortalsFromSector;