import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Layout from '../layout/dashboard';
import Home from '../pages/main/home';
import Tools from '../pages/tools/main';
import Articles from '../pages/articles/main';

// import CreditsCalculatorPage from '../pages/tools/CreditsCalculatorPage';
// import UridiumCalculatorPage from '../pages/tools/UridiumCalculatorPage';
// import LevelCalculatorPage from '../pages/tools/LevelCalculatorPage';
// import GradeCalculatorPage from '../pages/tools/GradeCalculatorPage';
// import GalaxyGateCalculatorPage from '../pages/tools/GalaxyGateCalculatorPage';
// import DamageCalculatorPage from '../pages/tools/DamageCalculatorPage';
// import ShieldCalculatorPage from '../pages/tools/ShieldCalculatorPage';
// import SkillsTreeSimulatorPage from '../pages/tools/SkillsTreeSimulatorPage';
// import PseudoGeneratorPage from '../pages/tools/PseudoGeneratorPage';
import VersusNpcsPage from '../pages/tools/versus-npcs';
// import VersusShipsPage from '../pages/tools/versus-ships';

const router = createBrowserRouter([
  {
    Component: App,
    children: [
      {
        path: '/',
        Component: Layout,
        children: [
          {
            path: '',
            Component: Home,
          },
          {
            path: 'tools',
            Component: Tools,
            children: [
              // {
              //   path: 'credits-calculator',
              //   Component: CreditsCalculatorPage,
              // },
              // {
              //   path: 'uridium-calculator',
              //   Component: UridiumCalculatorPage,
              // },
              // {
              //   path: 'level-calculator',
              //   Component: LevelCalculatorPage,
              // },
              // {
              //   path: 'grade-calculator',
              //   Component: GradeCalculatorPage,
              // },
              // {
              //   path: 'galaxy-gate-calculator',
              //   Component: GalaxyGateCalculatorPage,
              // },
              // {
              //   path: 'damage-calculator',
              //   Component: DamageCalculatorPage,
              // },
              // {
              //   path: 'shield-calculator',
              //   Component: ShieldCalculatorPage,
              // },
              // {
              //   path: 'skills-tree-simulator',
              //   Component: SkillsTreeSimulatorPage,
              // },
              // {
              //   path: 'pseudo-generator',
              //   Component: PseudoGeneratorPage,
              // },
              {
                path: 'versus-npcs',
                Component: VersusNpcsPage,
              },
              // {
              //   path: 'versus-ships',
              //   Component: VersusShipsPage,
              // },
            ],
          },
          {
            path: 'articles',
            Component: Articles,
          },
        ],
      },
    ],
  },
]);

export default router;
