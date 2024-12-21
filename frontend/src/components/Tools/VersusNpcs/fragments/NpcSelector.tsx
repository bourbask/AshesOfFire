import * as React from 'react';

import { FormControl, InputLabel, Select, MenuItem, SelectProps } from '@mui/material';

import allNpcs, { type NpcNames } from '../../../../data/npcs/main';

export type NpcSelectorProps = {
  onSelect: (npcName: NpcNames | null) => void; // Callback pour remonter la sélection
};

const NpcSelector: React.FunctionComponent<NpcSelectorProps> = ({ onSelect }) => {
  const npcNames = Object.keys(allNpcs) as (NpcNames)[];

  const handleChange: SelectProps['onChange'] = (event) => {
    onSelect(event.target.value as NpcNames | null);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="npc-selector-label">Select NPC</InputLabel>
      <Select
        labelId="npc-selector-label"
        defaultValue=""
        onChange={handleChange}
      >
        <MenuItem value="">None</MenuItem>
        {npcNames.map((name) => (
          <MenuItem key={`${name}`} value={`${name}`}>
            {`${name}`}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default NpcSelector;
