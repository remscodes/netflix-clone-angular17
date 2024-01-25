import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { Router } from '@angular/router';
import { NetflixLogoComponent } from '../../../../shared/components/netflix-logo/netflix-logo.component';

interface MenuItem {
  label: string;
  route: string;
}

@Component({
  selector: 'app-top-navbar',
  standalone: true,
  imports: [
    MatIcon,
    NetflixLogoComponent,
  ],
  templateUrl: './top-navbar.component.html',
  styleUrl: './top-navbar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopNavbarComponent {

  private router = inject(Router);

  public items: MenuItem[] = [
    { label: 'Accueil', route: '' },
    { label: 'Séries', route: 'series' },
    { label: 'Films', route: 'movies' },
    { label: 'Nouveautés les plus regardées', route: 'latest' },
    { label: 'Ma liste', route: 'my-list' },
    { label: 'Explorer par langue', route: 'original-audio' },
  ];

  public navigateTo(route: string): void {
    const commands = ['browse'];
    if (route) commands.push(route);
    this.router.navigate(commands).then();
  }

  public logout(): void {
    this.router.navigate(['login']).then();
  }
}
