import { Outlet } from 'react-router-dom';
import { Box, Typography } from '@mui/material';

export default function Tools() {
  return (
    <Box>
        <Typography>C'est une V1, c'est pas beau et à peine fonctionnel, mais ça a le mérite d'exister</Typography>
        <Outlet />
    </Box>
  );
}
