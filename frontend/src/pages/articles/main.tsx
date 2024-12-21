import { Box, Typography } from '@mui/material';
import PseudoRules from './misc/pseudo-rules';

export default function Articles() {
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
