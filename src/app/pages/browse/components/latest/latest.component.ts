import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-latest',
  standalone: true,
  imports: [],
  templateUrl: './latest.component.html',
  styleUrl: './latest.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LatestComponent {

}
