type Graph = Map<string, { [key: string]: number }>;

type DijkstraResult = {
  path: string[]; // Le chemin du nœud source au nœud destination
  distance: number; // La distance totale
};

/**
 * Calculate the shortest path between two nodes using Dijkstra's algorithm.
 * 
 * @param graph - The graph represented as a Map.
 * @param start - The starting portal address.
 * @param end - The destination portal address.
 * @returns An object containing the path and total distance.
 */
const dijkstra = (
  graph: Graph,
  start: string,
  end: string
): DijkstraResult => {
  const distances: { [key: string]: number } = {};
  const previous: { [key: string]: string | null } = {};
  const unvisited = new Set<string>();

  graph.forEach((_, node) => {
    distances[node] = Infinity;
    previous[node] = null;
    unvisited.add(node);
  });
  distances[start] = 0;

  while (unvisited.size > 0) {
    const current = Array.from(unvisited).reduce((minNode, node) =>
      distances[node] < distances[minNode] ? node : minNode
    );

    if (current === end || distances[current] === Infinity) break;

    unvisited.delete(current);

    const neighbors = graph.get(current)!;
    for (const neighbor in neighbors) {
      const alt = distances[current] + neighbors[neighbor];
      if (alt < distances[neighbor]) {
        distances[neighbor] = alt;
        previous[neighbor] = current;
      }
    }
  }

  const path = [];
  let current: string | null = end;
  while (current) {
    path.unshift(current);
    current = previous[current];
  }

  return {
    path: path[0] === start ? path : [],
    distance: distances[end],
  };
};

export default dijkstra;
