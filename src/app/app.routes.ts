import { Routes } from '@angular/router';
import { Home } from './pages/home/home';

export const routes: Routes = [
  { path: '', component: Home, title: 'Naidu Tamarana — Frontend Developer · Angular · Healthcare' },
  {
    path: 'projects/:slug',
    loadComponent: () => import('./pages/project-detail/project-detail').then((m) => m.ProjectDetail),
  },
  {
    path: 'demos/:slug',
    loadComponent: () => import('./pages/demo-viewer/demo-viewer').then((m) => m.DemoViewer),
  },
  { path: '**', redirectTo: '' },
];
