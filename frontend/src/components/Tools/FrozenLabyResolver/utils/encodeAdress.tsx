import { LABYRINTH_MAP } from "./decodeAdress";

const encodeAddress = (card: string, sector: number, portal: number): string => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const cardCode = Object.entries(LABYRINTH_MAP).find(([_, name]) => name === card)?.[0];
  if (!cardCode) {
    throw new Error(`Invalid card name: ${card}`);
  }
  if (![1, 2, 3, 4].includes(sector) || ![1, 2, 3, 4].includes(portal)) {
    throw new Error(`Invalid sector or portal: sector=${sector}, portal=${portal}`);
  }

  return `${cardCode}${sector}${portal}`;
};

export default encodeAddress;