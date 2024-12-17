import * as React from 'react';

import { Box, Typography } from '@mui/material';
import PseudoGenerator from '../../components/Tools/PseudoGenerator/PseudoGenerator';

export default function Tools() {
  const results = {
    1: true,
    2: true,
  };

  return (
    <Box>
        <Typography>Tous les outils ici !</Typography>
        <Typography>Calculateur de crédits</Typography>
        <Typography>Calculateur d'uridium</Typography>
        <Typography>Calculateur de niveau</Typography>
        <Typography>Calculateur de grade</Typography>
        <Typography>Calculateur d'ouverture de GalaxyGate</Typography>
        <Typography>Calculateur de dégâts</Typography>
        <Typography>Calculateur de bouclier</Typography>
        <Typography>Simulateur d'Arbre de Compétences</Typography>
        <Typography>Générateur de pseudo</Typography>
        <PseudoGenerator />
        <Typography>Versus NPCs</Typography>
        <Typography>Versus vaisseaux</Typography>
    </Box>
  );
}
