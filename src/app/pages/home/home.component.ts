import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TopNavbarComponent } from './components/top-navbar/top-navbar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    TopNavbarComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {

}
