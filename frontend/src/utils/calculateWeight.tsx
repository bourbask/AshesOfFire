import { DecodedAddress } from "./decodeAddress";

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
  // Calculate distances in terms of sectors
  const distanceFromStart = Math.abs(from.sector - start.sector);
  const distanceToTarget = Math.abs(to.sector - start.sector);

  console.log('----------------------', 'Start Sector : ', start.sector);
  console.log('----------------------', 'From Sector : ', from.sector);
  console.log('----------------------', 'To Sector : ', to.sector);

  // Base weight plus distance penalties
  const weight = 1 + distanceFromStart + distanceToTarget;

  console.log(`Weight calculated: From ${from.map}${from.sector} to ${to.map}${to.sector}, Weight: ${weight}`);
  
  return weight;
};

export default calculateWeight;
