import { Routes } from '@angular/router';
import { HOME_PROVIDERS } from './pages/home/home.providers';

export const APP_ROUTES: Routes = [

  {
    path: 'home',
    providers: [HOME_PROVIDERS],
    loadChildren: () => import('./pages/home/home.routes').then(m => m.HOME_ROUTES),
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];
