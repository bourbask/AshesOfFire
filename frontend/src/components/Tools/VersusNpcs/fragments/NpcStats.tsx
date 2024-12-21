import * as React from 'react';

import { Box, Typography, Card, CardContent } from '@mui/material';

import allNpcs, { NpcNames } from '../../../../data/npcs/main';

export type NpcStatsProps = {
  npcName: NpcNames | null;
};

const NpcStats: React.FunctionComponent<NpcStatsProps> = ({ npcName }) => {
  if (!npcName) {
    return (
      <Box sx={{ mt: 2 }}>
        <Typography variant="h6">No NPC selected</Typography>
      </Box>
    );
  }

  const npc = allNpcs[npcName as string];

  return (
    <Card sx={{ mt: 2 }}>
      <CardContent>
        <Typography variant="h5">{npc.name}</Typography>
        <Typography>HP: {npc.hp}</Typography>
        <Typography>Shield: {npc.shield}</Typography>
        <Typography>
          Shield Absorption: {npc.shield_absorption * 100}%
        </Typography>
        <Typography>Speed: {npc.speed}</Typography>
        <Typography>Damage: {npc.damage}</Typography>
      </CardContent>
    </Card>
  );
};

export default NpcStats;
