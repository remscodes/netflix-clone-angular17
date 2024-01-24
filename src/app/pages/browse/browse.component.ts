import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopNavbarComponent } from './components/top-navbar/top-navbar.component';

@Component({
  standalone: true,
  imports: [
    TopNavbarComponent,
    RouterOutlet,
  ],
  templateUrl: './browse.component.html',
  styleUrl: './browse.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrowseComponent {

}
