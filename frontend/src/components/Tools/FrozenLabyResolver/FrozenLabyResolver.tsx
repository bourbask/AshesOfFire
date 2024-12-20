import React, { useEffect, useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";

// Importer les utilitaires
import buildGraph from "../../../utils/buildGraph";
import findClosestTargetSector from "../../../utils/findClosestTargetSector";
import decodeAddress from "../../../utils/decodeAddress";
import dijkstra from "../../../utils/dijkstra";

// Importer les données JSON
import labyrinthConnections from "../../../data/winter_event/labyrinth_connections.json";

const FrozenLabyResolver: React.FC = () => {
  // État pour les entrées utilisateur
  const [start, setStart] = useState(""); // Adresse de départ
  const [end, setEnd] = useState(""); // Adresse de destination
  const [path, setPath] = useState<string[]>([]); // Résultat du chemin
  const [distance, setDistance] = useState<number | null>(null); // Distance totale

  // Construire le graphe une fois pour toutes
  const graph = React.useMemo(() => buildGraph(labyrinthConnections.connections), []);

    // Handler pour trouver le chemin le plus court
    const handleFindPath = () => {
    try {
        if (/^[1-4]$/.test(end)) {
        const targetSector = parseInt(end, 10);
        const result = findClosestTargetSector(
            labyrinthConnections.connections,
            start,
            targetSector
        );

        setPath(result);
        setDistance(result.length > 0 ? result.length - 1 : null);
        } else {
        const startDecoded = decodeAddress(start);
        const startAddress = startDecoded.portal
            ? start
            : `${startDecoded.map}${startDecoded.sector}1`; // Si portail manquant, assume le premier

        const result = dijkstra(graph, startAddress, end);
        setPath(result.path);
        setDistance(result.distance);
        }
    } catch (error) {
        console.error("Erreur lors de la recherche du chemin :", error);
        setPath([]);
        setDistance(null);
    }
    };


useEffect(() => {
    // Pour ATC13 vers ATA41
    // On devrait obtenir un truc du genre :
    // ATC13 -> ATB34 -> OR11 -> ATC24 -> MA24 -> ATA41
    console.log(path, distance);
}, [distance, path]);

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Frozen Labyrinth Path Finder
      </Typography>
      <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
        <TextField
          label="Start (e.g., ATC1)"
          value={start}
          onChange={(e) => setStart(e.target.value.toUpperCase())}
        />
        <TextField
          label="Destination (e.g., ATA4 or 4)"
          value={end}
          onChange={(e) => setEnd(e.target.value.toUpperCase())}
        />
        <Button variant="contained" onClick={handleFindPath}>
          Find Path
        </Button>
      </Box>
      {path.length > 0 && (
        <Box sx={{ mt: 2 }}>
          <Typography variant="h6">Shortest Path:</Typography>
          <Typography variant="body1">{path.join(" -> ")}</Typography>
          <Typography variant="h6" sx={{ mt: 1 }}>Total Distance:</Typography>
          <Typography variant="body1">{distance}</Typography>
        </Box>
      )}
    </Box>
  );
};

export default FrozenLabyResolver;
