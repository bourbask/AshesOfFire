import { DecodedAddress } from "./decodeAddress";
import distanceInMapSector from "./distanceInMapSector";

/**
 * Calculate the weight of a connection dynamically based on distance from the start.
 *
 * @param from - Source address.
 * @param to - Target address.
 * @param start - Starting address.
 * @returns A weight value for the connection.
 */
const calculateWeight = (
  from: DecodedAddress,
  to: DecodedAddress,
  start: DecodedAddress
): number => {
  // "distanceFromStart" is how far the 'from' node is from the actual user start
  const distanceFromStart = distanceInMapSector(from, start);

  // "distanceToTarget" is how far the 'to' node is from the user start
  const distanceToTarget = distanceInMapSector(to, start);

  // Maybe the cost is:
  //   base 1
  // + from->to difference
  // + some factor of how far from the user start
  const fromTo = distanceInMapSector(from, to);
  
  return 1 + fromTo + (distanceFromStart + distanceToTarget) * 0.25;
};

export default calculateWeight;
