import React, { useState } from 'react';

import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  CardActions,
  Modal,
} from '@mui/material';

type VersusStatusSignProps = {
  onStartBattle: () => { winner: string; stats: CombatStats }; // Callback pour démarrer le combat
  onReset: () => void; // Callback pour réinitialiser les NPCs
};

type CombatStats = {
  damageSent: number;
  damageReceived: number;
  shieldAbsorbed: number;
  rewards: { [key: string]: number }; // Récompenses obtenues
};

const VersusStatusSign: React.FunctionComponent<VersusStatusSignProps> = ({
  onStartBattle,
  onReset,
}) => {
  const [battleStarted, setBattleStarted] = useState(false);
  const [battleFinished, setBattleFinished] = useState(false);
  const [winner, setWinner] = useState<string | null>(null);
  const [stats, setStats] = useState<CombatStats | null>(null);

  const handleStartBattle = () => {
    const { winner, stats } = onStartBattle();
    setBattleStarted(true);

    // Simule une durée pour le combat avant de montrer les résultats
    setTimeout(() => {
      setBattleStarted(false);
      setBattleFinished(true);
      setWinner(winner);
      setStats(stats);
    }, 2000);
  };

  const handleReset = () => {
    setBattleStarted(false);
    setBattleFinished(false);
    setWinner(null);
    setStats(null);
    onReset();
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 2,
        p: 4,
        textAlign: 'center',
      }}
    >
      {/* Avant le combat */}
      {!battleStarted && !battleFinished && (
        <>
          <Typography variant="h2" color="primary" sx={{ fontWeight: 'bold' }}>
            VS
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            onClick={handleStartBattle}
          >
            Lancer le combat
          </Button>
        </>
      )}

      {/* Pendant le combat */}
      {battleStarted && (
        <Typography variant="h4" color="warning.main">
          Combat en cours...
        </Typography>
      )}

      {/* Après le combat */}
      {battleFinished && stats && (
        <Modal
          open={battleFinished}
          onClose={handleReset}
          sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <Card sx={{ minWidth: 300, p: 3 }}>
            <CardContent>
              <Typography variant="h4" color="success.main" gutterBottom>
                {winner} a gagné !
              </Typography>
              <Typography variant="body1">
                Dégâts subits : {stats.damageReceived}
              </Typography>
              <Typography variant="body1">
                Dégâts infligés : {stats.damageSent}
              </Typography>
              <Typography variant="body1">
                Bouclier absorbé : {stats.shieldAbsorbed}
              </Typography>
              <Typography variant="body1">
                Récompenses :
                <ul>
                  {Object.entries(stats.rewards).map(([key, value]) => (
                    <li key={key}>
                      {key} : {value}
                    </li>
                  ))}
                </ul>
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                variant="outlined"
                color="primary"
                onClick={handleReset}
                fullWidth
              >
                Réinitialiser
              </Button>
            </CardActions>
          </Card>
        </Modal>
      )}
    </Box>
  );
};

export default VersusStatusSign;
