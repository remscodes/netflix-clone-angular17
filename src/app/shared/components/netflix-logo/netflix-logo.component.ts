import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-netflix-logo',
  standalone: true,
  imports: [],
  templateUrl: './netflix-logo.component.html',
  styleUrl: './netflix-logo.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NetflixLogoComponent {

  public width = input('170px');
  public height = input('45px');
}
