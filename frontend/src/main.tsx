import { StrictMode } from 'react'

import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css'
import App from './App.tsx'
import Layout from './layout/dashboard.tsx';
import Home from './pages/main/home.tsx';
import Articles from './pages/articles/main.tsx';
import Tools from './pages/tools/main.tsx';

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

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
