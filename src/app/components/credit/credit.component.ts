import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { WINDOW } from '../../shared/injections/window.injection';

@Component({
  selector: 'app-credit',
  standalone: true,
  imports: [],
  templateUrl: './credit.component.html',
  styleUrl: './credit.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreditComponent {

  private window = inject(WINDOW);

  public openRepository(): void {
    this.window.open('https://github.com/remscodes/netflix-clone-angular17', '_blank');
  }
}
