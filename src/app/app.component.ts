import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CreditComponent } from './components/credit/credit.component';
import { ROUTES_ANIMATION } from './routes.animation';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CreditComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [ROUTES_ANIMATION],
})
export class AppComponent {}
