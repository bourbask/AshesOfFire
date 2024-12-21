import * as React from 'react';

import { Box } from '@mui/material';

import { NpcNames } from '../../../data/npcs/main';
import VersusSide from './fragments/VersusSide';
import VersusStatusSign from './fragments/VersusStatusSign';

const VersusNpcs: React.FunctionComponent = function () {
    const [npc1, setNpc1] = React.useState<NpcNames | null>(null);
    const [npc2, setNpc2] = React.useState<NpcNames | null>(null);

    const handleStartBattle = () => {
        const winner = Math.random() > 0.5 ? npc1 : npc2;
        const stats = {
          damageSent: 5000,
          damageReceived: 3000,
          shieldAbsorbed: 2000,
          rewards: {
            Credits: 10000,
            Uridium: 50,
          },
        };
        return { winner: winner || 'Unknown', stats };
    };

    const handleReset = () => {
        setNpc1(null);
        setNpc2(null);
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'end',
                justifyContent: 'space-between',
            }}
        >
            {/* Côté gauche */}
            <VersusSide npc={npc1} onNpcChange={setNpc1} side="left" />

            {/* Zone de combat */}
            <VersusStatusSign onReset={handleReset} onStartBattle={handleStartBattle} />

            {/* Côté droit */}
            <VersusSide npc={npc2} onNpcChange={setNpc2} side="right" />
        </Box>
    );
};

export default VersusNpcs;
