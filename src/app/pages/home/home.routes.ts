import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';

export const HOME_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'series',
    component: HomeComponent,
  },
  {
    path: 'movies',
    component: HomeComponent,
  },
  {
    path: 'latest',
    component: HomeComponent,
  },
  {
    path: 'my-list',
    component: HomeComponent,
  },
  {
    path: 'original-audio',
    component: HomeComponent,
  },
];
