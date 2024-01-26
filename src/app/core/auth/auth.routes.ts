import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ProfileSelectorComponent } from './components/profile-selector/profile-selector.component';

export const AUTH_ROUTES: Routes = [
  {
    path: 'login',
    data: { animation: 'Login' },
    component: LoginComponent,
  },
  {
    path: 'profiles',
    data: { animation: 'Profiles' },
    component: ProfileSelectorComponent,
  },
];
