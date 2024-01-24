import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CreditComponent } from './components/credit/credit.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CreditComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'netflix-clone-angular17';
}
