import * as React from 'react';

import { Box, Typography } from '@mui/material';
import PseudoRules from './misc/pseudo-rules';

export default function Articles() {
  const results = {
    1: true,
    2: true,
  };

  return (
    <Box>
        <Typography>Tous les articles ici !</Typography>
        <Typography>features</Typography>
        <Typography>misc</Typography>
        <Typography>newbie</Typography>
        <Typography>tips</Typography>
        <PseudoRules />
    </Box>
  );
}
