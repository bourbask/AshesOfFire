import * as React from 'react';

import { Outlet } from 'react-router-dom';
import { Box, Typography } from '@mui/material';

export default function Tools() {
  return (
    <Box>
        <Typography>Tous les outils ici !</Typography>
        <Outlet />
    </Box>
  );
}
