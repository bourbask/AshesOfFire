import buildGraph from "./buildGraph";
import decodeAddress from "./decodeAdress";
import dijkstra from "./dijkstra";
import { Connection } from "./findShortestPath";

const findClosestTargetSector = (
  connections: Connection[],
  startSector: string,
  targetSector: number
): string[] => {
  const graph = buildGraph(connections);

  // Décoder l'adresse de départ
  const { card, sector, portal } = decodeAddress(startSector);

  // Si le portail est manquant, générer tous les portails possibles pour ce secteur
  const startPortals = portal
    ? [`${card}${sector}${portal}`]
    : [1, 2, 3, 4].map((p) => `${card}${sector}${p}`);

  // Identifier les portails du secteur cible
  const targetPortals = connections
    .map((conn) => conn.to)
    .filter((portal) => {
      const decoded = decodeAddress(portal);
      return decoded.sector === targetSector;
    });

  if (targetPortals.length === 0) {
    console.error(`Aucun secteur ${targetSector} trouvé.`);
    return [];
  }

  // Trouver le chemin le plus court
  let shortestPath: string[] = [];
  let shortestDistance = Infinity;

  startPortals.forEach((start) => {
    targetPortals.forEach((end) => {
      const result = dijkstra(graph, start, end);
      if (result.distance < shortestDistance) {
        shortestDistance = result.distance;
        shortestPath = result.path;
      }
    });
  });

  return shortestPath;
};

export default findClosestTargetSector;