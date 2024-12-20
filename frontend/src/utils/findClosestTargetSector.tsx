import buildGraph from "./buildGraph";
import decodeAddress from "./decodeAddress";
import dijkstra from "./dijkstra";
import { Connection } from "./findShortestPath";

const findClosestTargetSector = (
  connections: Connection[],
  startSector: string,
  targetSector: number
): string[] => {
  console.log("StartSector received:", startSector);

  // Construire le graphe avec des poids dynamiques
  const graph = buildGraph(connections, startSector);

  // Decode l'adresse de départ
  const { map: startMap, sector: startSectorNumber } = decodeAddress(startSector);

  // Générer tous les portails pour le secteur de départ
  const startPortals = [1, 2, 3, 4].map((portal) => `${startMap}${startSectorNumber}${portal}`);

  // Trouver tous les portails dans le secteur cible
  const targetPortals = connections
    .map((conn) => conn.to)
    .filter((portal) => {
      const decoded = decodeAddress(portal);
      return decoded.sector === targetSector;
    });

  console.log("Start portals:", startPortals); // Affiche tous les portails de départ
  console.log("Target portals:", targetPortals); // Affiche les portails correspondant au secteur cible

  if (targetPortals.length === 0) {
    console.error(`No portals found for sector ${targetSector}.`);
    return [];
  }

  // Trouver le chemin le plus court en itérant sur toutes les combinaisons start → end
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