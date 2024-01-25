import { Routes } from '@angular/router';
import { BROWSE_PROVIDERS } from './pages/browse/browse.providers';

export const APP_ROUTES: Routes = [
  {
    path: 'browse',
    providers: [BROWSE_PROVIDERS],
    loadChildren: () => import('./pages/browse/browse.routes').then(m => m.BROWSE_ROUTES),
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];
