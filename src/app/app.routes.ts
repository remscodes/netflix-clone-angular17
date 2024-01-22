import { Routes } from '@angular/router';
import { authGuard } from './core/auth/guards/auth.guard';
import { HOME_PROVIDERS } from './pages/home/home.providers';

export const APP_ROUTES: Routes = [

  {
    path: 'home',
    canActivate: [authGuard()],
    providers: [HOME_PROVIDERS],
    loadChildren: () => import('./pages/home/home.routes').then(m => m.HOME_ROUTES),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
