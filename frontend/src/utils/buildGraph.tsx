import calculateWeight from "./calculateWeight";
import decodeAddress from "./decodeAddress";
import { Connection } from "./findShortestPath";

/**
 * Build a graph with dynamic weights based on the starting address.
 *
 * @param connections - List of connections between portals.
 * @param startAddress - Starting address to calculate weights dynamically.
 * @returns A graph represented as a Map.
 */
const buildGraph = (connections: Connection[], startAddress: string): Map<string, { [key: string]: number }> => {
  const graph = new Map<string, { [key: string]: number }>();

  // Decode the starting address
  const start = decodeAddress(startAddress);

  connections.forEach(({ from, to }) => {
    const fromDecoded = decodeAddress(from);
    const toDecoded = decodeAddress(to);

    // Calculate weight dynamically based on distance
    const weight = calculateWeight(fromDecoded, toDecoded, start);

    // Add to the graph as a bidirectional connection
    if (!graph.has(from)) {
      graph.set(from, {});
    }
    if (!graph.has(to)) {
      graph.set(to, {});
    }

    graph.get(from)![to] = weight;
    graph.get(to)![from] = weight;
  });

  return graph;
};

export default buildGraph;
