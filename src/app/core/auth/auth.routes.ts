import { Routes } from '@angular/router';
import { ProfileSelectorComponent } from './components/profile-selector/profile-selector.component';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './guards/auth.guard';

export const AUTH_ROUTES: Routes = [
  {
    path: 'login',
    // redirectTo: 'browse',
    component: LoginComponent,
  },
  {
    path: 'browse',
    canActivate: [authGuard()],
    component: ProfileSelectorComponent,
  },
];
