import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NetflixLogoComponent } from '../../../../shared/components/netflix-logo/netflix-logo.component';

interface MenuItem {
  label: string;
  route: string;
}

@Component({
  selector: 'app-top-navbar',
  standalone: true,
  imports: [
    NetflixLogoComponent,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './top-navbar.component.html',
  styleUrl: './top-navbar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopNavbarComponent {

  public items: MenuItem[] = [
    { label: 'Accueil', route: '' },
    { label: 'Séries', route: 'series' },
    { label: 'Films', route: 'movies' },
    { label: 'Nouveautés les plus regardées', route: 'news' },
    { label: 'Ma liste', route: 'my-list' },
    { label: 'Explorer par langue', route: 'explore' },
  ];
}
