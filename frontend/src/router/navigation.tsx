import { Navigation } from '@toolpad/core';
import {
  Dashboard as DashboardIcon,
  CalendarMonth as CalendarMonthIcon,
  ShoppingCart as ShoppingCartIcon,
} from '@mui/icons-material';

export const NAVIGATION: Navigation = [
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
      children: [
        { segment: 'credits-calculator', title: 'Calculateur de crédits' },
        { segment: 'uridium-calculator', title: 'Calculateur d\'uridium' },
        { segment: 'level-calculator', title: 'Calculateur de niveau' },
        { segment: 'grade-calculator', title: 'Calculateur de grade' },
        { segment: 'galaxy-gate-calculator', title: 'Calculateur d\'ouverture de GalaxyGate' },
        { segment: 'damage-calculator', title: 'Calculateur de dégâts' },
        { segment: 'shield-calculator', title: 'Calculateur de bouclier' },
        { segment: 'skills-tree-simulator', title: 'Simulateur d\'Arbre de Compétences' },
        { segment: 'pseudo-generator', title: 'Générateur de pseudo' },
        { segment: 'versus-npcs', title: 'Versus NPCs' },
        { segment: 'versus-ships', title: 'Versus vaisseaux' },
      ],
    },
    {
      segment: 'articles',
      title: 'Articles',
      icon: <ShoppingCartIcon />,
    },
  ];