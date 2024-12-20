import { Connection } from "./findShortestPath";

const buildGraph = (connections: Connection[]) => {
  const graph = new Map<string, { [key: string]: number }>();

  connections.forEach(({ from, to, weight }) => {
    if (!graph.has(from)) graph.set(from, {});
    graph.get(from)![to] = weight;

    // Ajouter la direction inverse si bidirectionnelle
    if (!graph.has(to)) graph.set(to, {});
    graph.get(to)![from] = weight;
  });

  return graph;
};

export default buildGraph;
