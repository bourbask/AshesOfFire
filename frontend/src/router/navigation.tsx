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
        { segment: 'credits-calculator', title: '[SOON] Calculateur de crédits' },
        { segment: 'uridium-calculator', title: '[SOON] Calculateur d\'uridium' },
        { segment: 'level-calculator', title: '[SOON] Calculateur de niveau' },
        { segment: 'grade-calculator', title: '[SOON] Calculateur de grade' },
        { segment: 'galaxy-gate-calculator', title: '[SOON] Calculateur d\'ouverture de GalaxyGate' },
        { segment: 'damage-calculator', title: '[SOON] Calculateur de dégâts' },
        { segment: 'shield-calculator', title: '[SOON] Calculateur de bouclier' },
        { segment: 'skills-tree-simulator', title: '[SOON] Simulateur d\'Arbre de Compétences' },
        { segment: 'pseudo-generator', title: 'Générateur de pseudo' },
        { segment: 'frozen-laby-resolver', title: '[WORKING ON] Fil d\'Ariane du Labyrinthe Gelé' },
        { segment: 'versus-npcs', title: '[NEXT] Versus NPCs' },
        { segment: 'versus-ships', title: '[SOON] Versus vaisseaux' },
      ],
    },
    {
      segment: 'articles',
      title: '[SOON] Articles',
      icon: <ShoppingCartIcon />,
    },
  ];