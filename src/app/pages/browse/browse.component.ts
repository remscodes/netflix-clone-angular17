import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CreditComponent } from '../../components/credit/credit.component';
import { TopNavbarComponent } from './components/top-navbar/top-navbar.component';

@Component({
  standalone: true,
  imports: [
    RouterOutlet,
    TopNavbarComponent,
    CreditComponent,
  ],
  templateUrl: './browse.component.html',
  styleUrl: './browse.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrowseComponent {

}
