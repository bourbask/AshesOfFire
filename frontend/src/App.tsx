import React, { FunctionComponent } from 'react';

import { Outlet } from 'react-router-dom';
import { DeveloperBoard, LocalFireDepartment } from '@mui/icons-material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { AppProvider } from '@toolpad/core/react-router-dom';
import type { Navigation } from '@toolpad/core';

import { keyframes } from '@emotion/react';

const App: FunctionComponent = () => {
  const NAVIGATION: Navigation = [
    {
      kind: 'header',
      title: 'Main items',
    },
    {
      title: 'Dashboard',
      icon: <DashboardIcon />,
    },
    {
      segment: 'tools',
      title: 'Outils',
      icon: <CalendarMonthIcon />,
    },
    {
      segment: 'articles',
      title: 'Articles',
      icon: <ShoppingCartIcon />,
    },
  ];

  const rainbowKeyframes = keyframes`
    0% { filter: hue-rotate(0deg); }
    100% { filter: hue-rotate(360deg); }
  `;

  const BRANDING = {
    title: 'AshesOfFire',
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
