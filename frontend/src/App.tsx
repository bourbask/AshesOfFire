import * as React from 'react';

import { Outlet } from 'react-router-dom';
import { keyframes } from '@emotion/react';
import { LocalFireDepartment } from '@mui/icons-material';
import { AppProvider } from '@toolpad/core/react-router-dom';

import { NAVIGATION } from './router/navigation';

const App: React.FunctionComponent = () => {
  const rainbowKeyframes = keyframes`
    0% { filter: hue-rotate(0deg); }
    100% { filter: hue-rotate(360deg); }
  `;

  const BRANDING = {
    title: 'Ashes of Fire',
    logo: <LocalFireDepartment
      sx={{
        fontSize: '2rem', // Adjust size as needed
        animation: `${rainbowKeyframes} 2s linear infinite`, // Rainbow animation
      }}
    />,
  };

  return (
    <AppProvider navigation={NAVIGATION} branding={BRANDING}>
      <Outlet />
    </AppProvider>
  );
};

export default App;
