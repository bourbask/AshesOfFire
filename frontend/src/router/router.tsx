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
import FrozenLabyResolverPage from '../pages/tools/frozen-laby-resolver';
import VersusSpaceshipsPage from '../pages/tools/versus-spaceships';
import PseudoGeneratorPage from '../pages/tools/pseudo-generator';
import ShieldCalculatorPage from '../pages/tools/shield-calculator';
import DamagesCalculatorPage from '../pages/tools/damages-calculator';
import NextGradeCalculatorPage from '../pages/tools/next-grade-calculator';
import NextLevelCalculatorPage from '../pages/tools/next-level-calculator';
import UridiumCalculatorPage from '../pages/tools/uridium-calculator';
import CreditsCalculatorPage from '../pages/tools/credits-calculator';
import SkillTreeSimulatorPage from '../pages/tools/skill-tree-simulator';
import GalaxyGateCalculatorPage from '../pages/tools/open-gg-calculator';
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
              {
                path: 'credits-calculator',
                Component: CreditsCalculatorPage,
              },
              {
                path: 'uridium-calculator',
                Component: UridiumCalculatorPage,
              },
              {
                path: 'level-calculator',
                Component: NextLevelCalculatorPage,
              },
              {
                path: 'grade-calculator',
                Component: NextGradeCalculatorPage,
              },
              {
                path: 'galaxy-gate-calculator',
                Component: GalaxyGateCalculatorPage,
              },
              {
                path: 'damage-calculator',
                Component: DamagesCalculatorPage,
              },
              {
                path: 'shield-calculator',
                Component: ShieldCalculatorPage,
              },
              {
                path: 'skills-tree-simulator',
                Component: SkillTreeSimulatorPage,
              },
              {
                path: 'pseudo-generator',
                Component: PseudoGeneratorPage,
              },
              {
                path: 'frozen-laby-resolver',
                Component: FrozenLabyResolverPage,
              },
              {
                path: 'versus-npcs',
                Component: VersusNpcsPage,
              },
              {
                path: 'versus-ships',
                Component: VersusSpaceshipsPage,
              },
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
