import { DecodedAddress } from "./decodeAddress";

/**
 * Calculate the weight of a connection dynamically based on distance from the start.
 *
 * @param from - Source address.
 * @param to - Target address.
 * @param start - Starting address.
 * @returns A weight value for the connection.
 */
const distanceInMapSector = (
  a: DecodedAddress, b: DecodedAddress
): number => {
  // Maybe 2 if maps differ, plus sector difference
  const mapBonus = a.map === b.map ? 0 : 2;
  const sectorDiff = Math.abs(a.sector - b.sector);
  // optionally portal difference
  return mapBonus + sectorDiff;
};

export default distanceInMapSector;
