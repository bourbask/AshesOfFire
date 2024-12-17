import * as React from 'react';

import { Box, Button, Grid2, IconButton, Input, Typography } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';

type PseudoGeneratorProps = {};

// Liste des caractères spéciaux pour chaque lettre
const specialCharacters: Record<string, string[]> = {
  A: ["ª", "Ā", "ā", "Ά", "α", "Å", "à", "Á", "Â", "Ä"],
  a: ["ª", "ā", "ά", "α", "å", "á", "ä"],
  B: ["Β", "β", "฿"],
  b: ["ь", "ъ", "Ь"],
  C: ["¢", "©", "Ć", "č", "Ç"],
  c: ["ç", "ĉ", "ς"],
  D: ["Ď", "ď", "Đ", "δ"],
  d: ["đ", "ď"],
  E: ["Ē", "ĕ", "ė", "Ę", "Έ", "Ε", "Ξ", "Σ", "ê", "é", "È"],
  e: ["ê", "é", "è", "ë", "ę", "ĕ"],
  F: ["₣", "ƒ"],
  f: ["ƒ"],
  G: ["Ĝ", "ĝ", "Ğ", "ğ", "Ģ", "ģ"],
  g: ["ğ", "ĝ", "ģ"],
  H: ["Ĥ", "ĥ", "Ħ", "ħ", "Ή", "Ч", "ћ"],
  h: ["ĥ", "ħ"],
  I: ["¡", "ĩ", "ī", "Ĭ", "į", "İ", "Ί", "Ι", "ί", "ι", "ϊ", "ї"],
  i: ["į", "ī", "ĩ", "¡", "ï"],
  J: ["Ĵ", "ĵ", "Ј", "ј"],
  j: ["ĵ", "ј"],
  K: ["Ķ", "ķ", "Κ", "κ", "К", "к"],
  k: ["ķ", "κ", "к"],
  L: ["£", "Ĺ", "ĺ", "Ļ", "ļ", "Ł", "ł", "ℓ"],
  l: ["ļ", "ł", "ĺ"],
  M: ["М", "м", "๓"],
  m: ["м", "๓"],
  N: ["Ń", "ń", "Ņ", "ņ", "Ň", "ň", "и", "Й"],
  n: ["ń", "ņ", "ň", "и"],
  O: ["º", "¤", "Ō", "ō", "Ő", "ơ", "Θ", "Ф", "φ", "σ", "ό", "Ø"],
  o: ["º", "ō", "ő", "ø", "о"],
  P: ["ρ", "Р", "р"],
  p: ["ρ", "р"],
  Q: ["Φ", "Ω", "Ф"],
  q: ["φ", "ψ"],
  R: ["Ŕ", "Ŗ", "Ř", "Я", "г"],
  r: ["ŕ", "ř", "г"],
  S: ["§", "Ś", "ŝ", "Ş", "ş", "Ѕ"],
  s: ["ś", "ŝ", "ş", "ѕ"],
  T: ["Ţ", "Ť", "τ", "т", "Т"],
  t: ["ţ", "ť", "τ"],
  U: ["ų", "Ũ", "ū", "Ů", "ů", "Ư", "μ"],
  u: ["ũ", "ū", "ų", "ů"],
  V: ["ν", "ϋ", "υ", "√"],
  v: ["ν", "υ"],
  W: ["Ŵ", "ŵ", "ω", "ώ", "Ш", "Щ"],
  w: ["ŵ", "ω", "ώ"],
  X: ["χ", "Ж", "ж"],
  x: ["χ", "ж"],
  Y: ["¥", "γ", "Ŷ", "Ύ", "Ψ", "Ў", "ÿ"],
  y: ["ŷ", "ÿ", "γ"],
  Z: ["Ź", "Ż", "ż", "Ζ", "ž"],
  z: ["ź", "ż", "ž"],
};

// Fonction pour obtenir un caractère spécial aléatoire (sensible à la casse)
const getRandomSpecialCharacter = (char: string): string => {
  const specials = specialCharacters[char] || [char];
  return specials[Math.floor(Math.random() * specials.length)];
};

const PseudoGenerator: React.FunctionComponent<PseudoGeneratorProps> = () => {
    const [input, setInput] = React.useState<string>('');
    const [output, setOutput] = React.useState<string>('');
    const [history, setHistory] = React.useState<string[]>([]);
    const [customPseudo, setCustomPseudo] = React.useState<string>('');

  // Générer un pseudo spécial
  const generatePseudo = (value: string) => {
    const specialPseudo = value
      .split('')
      .map((char) => getRandomSpecialCharacter(char))
      .join('');
    setOutput(specialPseudo);

    // Mettre à jour l'historique
    setHistory((prev) => {
      const updatedHistory = [specialPseudo, ...prev];
      return updatedHistory.slice(0, 10); // Conserver seulement les 10 derniers
    });
  };

  // Ajouter un caractère au pseudo personnalisé
  const addCharacterToCustomPseudo = (char: string) => {
    setCustomPseudo((prev) => prev + char);
  };

  // Copier dans le presse-papiers
  const copyToClipboard = () => {
    navigator.clipboard.writeText(output);
    alert('Pseudo copié dans le presse-papiers !');
  };

  return (
    <Box style={{ fontFamily: 'Arial, sans-serif', padding: '20px', maxWidth: '400px' }}>
      <Typography variant='h2'>🔠 Générateur de Pseudo Spécial</Typography>
      <Box
        style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: '10px',
          position: 'relative',
        }}
      >
        <Input
          type="text"
          placeholder="Tape ton pseudo ici"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{
            flex: 1,
            padding: '8px',
            fontSize: '1rem',
            borderRadius: '4px',
            border: '1px solid #ccc',
          }}
        />
        <IconButton
          onClick={() => generatePseudo(input)}
          style={{ position: 'absolute', right: '-40px', top: '4px' }}
        >
          <RefreshIcon />
        </IconButton>
      </Box>
      <Box
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: '#f9f9f9',
          padding: '10px',
          borderRadius: '4px',
          border: '1px solid #ddd',
        }}
      >
        <Typography component="span" style={{ fontSize: '1.2rem', wordBreak: 'break-word' }}>
          {output || 'Résultat ici'}
        </Typography>
        <Button
          onClick={copyToClipboard}
          style={{
            marginLeft: '10px',
            padding: '6px 10px',
            cursor: 'pointer',
            border: 'none',
            backgroundColor: '#007bff',
            color: 'white',
            borderRadius: '4px',
          }}
        >
          📋 Copier
        </Button>
      </Box>
      {history.length > 0 && (
        <Box style={{ marginTop: '20px' }}>
          <Typography variant="h6">Historique des Pseudos :</Typography>
          <Box style={{ marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '5px' }}>
            {history.map((item, index) => (
              <Button
                key={index}
                onClick={() => setOutput(item)}
                style={{
                  textAlign: 'left',
                  backgroundColor: '#f0f0f0',
                  padding: '8px',
                  borderRadius: '4px',
                  border: '1px solid #ddd',
                }}
              >
                {item}
              </Button>
            ))}
          </Box>
        </Box>
      )}

      <Box>
        <Typography variant="h5">Pseudo Généré :</Typography>
        <Typography style={{ fontSize: '1.5rem', marginBottom: '20px' }}>
          {output || 'Résultat ici'}
        </Typography>
        <Typography variant="h5">Pseudo Personnalisé :</Typography>
        <Typography style={{ fontSize: '1.5rem', marginBottom: '20px' }}>
          {customPseudo || 'Ajoute des caractères ci-dessous'}
        </Typography>
      </Box>
      <Box>
        <Typography variant="h6">Liste des caractères spéciaux :</Typography>
        <Grid2 container spacing={2} style={{ marginTop: '10px' }}>
          {Object.entries(specialCharacters).map(([letter, specials]) => (
            <Grid2 xs={12} sm={6} md={4} key={letter}>
                <>
                    <Typography style={{ fontWeight: 'bold' }}>{letter} :</Typography>
                    <Box
                        style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '5px',
                        marginTop: '5px',
                        }}
                    >
                        {specials.map((specialChar, index) => (
                        <Button
                            key={index}
                            onClick={() => addCharacterToCustomPseudo(specialChar)}
                            variant="outlined"
                            style={{
                            padding: '5px',
                            minWidth: '30px',
                            textAlign: 'center',
                            }}
                        >
                            {specialChar}
                        </Button>
                        ))}
                    </Box>
                </>
            </Grid2>
          ))}
        </Grid2>
      </Box>
    </Box>
  );
};

export default PseudoGenerator;
