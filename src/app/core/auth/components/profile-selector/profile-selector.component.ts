import { animate, animateChild, group, query, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, isDevMode } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { Profile } from '../../models/profile.model';
import { ProfileBoxComponent } from '../profile-box/profile-box.component';

@Component({
  selector: 'app-profile-selector',
  standalone: true,
  imports: [
    ProfileBoxComponent,
    MatButton,
  ],
  templateUrl: './profile-selector.component.html',
  styleUrl: './profile-selector.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('selectorEnter', [
      transition(':enter', [
        style({ opacity: 0.8 }),
        group([
          animate('300ms', style({ opacity: 1 })),
          query('#profile-selector', [
            style({ transform: 'scale(1.2)' }),
            animate('600ms ease', style({ transform: 'scale(1)' })),
          ]),
          query('@*', animateChild(), { delay: '200ms' }),
        ]),
      ]),
    ]),
  ],
})
export class ProfileSelectorComponent {

  public mockProfiles: Profile[] = [
    { name: 'CEO Pepe Frog', imgUrl: `${isDevMode() ? '/assets/ceo-pepe-frog.jpg' : `/netflix-clone-angular17/assets/ceo-pepe-frog.jpg`}` },
    { name: 'Chad Commercial', imgUrl: `${isDevMode() ? '/assets/gigachad.jpg' : `/netflix-clone-angular17/assets/gigachad.jpg`}` },
    { name: 'Dev Senior Kermit', imgUrl: `${isDevMode() ? '/assets/senior-kermit.jpg' : `/netflix-clone-angular17/assets/senior-kermit.jpg`}` },
  ];
}
