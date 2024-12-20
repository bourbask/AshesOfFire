import { LABYRINTH_MAP } from "./decodeAddress";

const encodeAddress = (map: string, sector: number, portal: number): string => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const mapCode = Object.entries(LABYRINTH_MAP).find(([_, name]) => name === map)?.[0];
  if (!mapCode) {
    throw new Error(`Invalid map name: ${map}`);
  }
  if (![1, 2, 3, 4].includes(sector) || ![1, 2, 3, 4].includes(portal)) {
    throw new Error(`Invalid sector or portal: sector=${sector}, portal=${portal}`);
  }

  return `${mapCode}${sector}${portal}`;
};

export default encodeAddress;