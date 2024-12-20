type Graph = Map<string, { [key: string]: number }>;

type DijkstraResult = {
  path: string[]; // Le chemin du nœud source au nœud destination
  distance: number; // La distance totale
};

const dijkstra = (graph: Graph, start: string, end: string): DijkstraResult => {
  const distances: { [key: string]: number } = {};
  const previous: { [key: string]: string | null } = {};
  const unvisited = new Set<string>();

  // Initialiser les distances et les nœuds précédents
  graph.forEach((_, node) => {
    distances[node] = Infinity;
    previous[node] = null;
    unvisited.add(node);
  });
  distances[start] = 0;

  // Parcourir les nœuds
  while (unvisited.size > 0) {
    // Trouver le nœud avec la plus petite distance
    const current = Array.from(unvisited).reduce((minNode, node) =>
      distances[node] < distances[minNode] ? node : minNode
    );

    // Si le nœud actuel est le nœud destination ou si aucune connexion n'est possible
    if (current === end || distances[current] === Infinity) break;

    // Retirer le nœud actuel des non-visités
    unvisited.delete(current);

    // Mettre à jour les distances pour les voisins du nœud actuel
    const neighbors = graph.get(current)!;
    for (const neighbor in neighbors) {
      const alt = distances[current] + neighbors[neighbor];
      if (alt < distances[neighbor]) {
        distances[neighbor] = alt;
        previous[neighbor] = current;
      }
    }
  }

  // Construire le chemin
  const path = [];
  let current: string | null = end;
  while (current) {
    path.unshift(current);
    current = previous[current];
  }

  // Retourner le chemin et la distance
  return {
    path: path[0] === start ? path : [], // Si le chemin ne commence pas par le départ, aucun chemin valide
    distance: distances[end],
  };
};

export default dijkstra;
