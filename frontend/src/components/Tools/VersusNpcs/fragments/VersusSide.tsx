import * as React from 'react';

import { Box, Typography } from '@mui/material';

import { NpcNames } from '../../../../data/npcs/main';
import NpcSelector from './NpcSelector';
import NpcStats from './NpcStats';

type VersusSideProps = {
    npc: NpcNames | null;
    onNpcChange: (npcName: NpcNames | null) => void;
    side: 'left' | 'right';
};

const VersusSide: React.FunctionComponent<VersusSideProps> = function ({ npc, onNpcChange, side }: VersusSideProps) {
    return (
        <Box
            sx={{
                height: '50vh',
                width: '40%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: side === 'left' ? 'flex-start' : 'flex-end',
            }}
        >
            <Typography variant="h5" sx={{ mb: 2 }}>
                Côté {side === 'left' ? 'Gauche' : 'Droit'}
            </Typography>

            <NpcSelector onSelect={onNpcChange} />
            <NpcStats npcName={npc} />
        </Box>
    );
};

export default VersusSide;
