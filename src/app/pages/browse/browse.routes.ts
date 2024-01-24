import { Routes } from '@angular/router';
import { BrowseComponent } from './browse.component';
import { HomeComponent } from './components/home/home.component';
import { LatestComponent } from './components/latest/latest.component';
import { MoviesComponent } from './components/movies/movies.component';
import { MyListComponent } from './components/my-list/my-list.component';
import { OriginalAudioComponent } from './components/original-audio/original-audio.component';
import { SeriesComponent } from './components/series/series.component';

export const BROWSE_ROUTES: Routes = [
  {
    path: '',
    component: BrowseComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'series',
        component: SeriesComponent,
      },
      {
        path: 'movies',
        component: MoviesComponent,
      },
      {
        path: 'latest',
        component: LatestComponent,
      },
      {
        path: 'my-list',
        component: MyListComponent,
      },
      {
        path: 'original-audio',
        component: OriginalAudioComponent,
      },
    ],
  },
];
