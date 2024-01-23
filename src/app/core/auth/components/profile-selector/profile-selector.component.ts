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
})
export class ProfileSelectorComponent {

  public mockProfiles: Profile[] = [
    { name: 'Giga Chad', imgUrl: `${isDevMode() ? '/assets/gigachad.jpg' : `/netflix-clone-angular17/assets/gigachad.jpg`}` },
    { name: 'Pepe the Frog', imgUrl: `${isDevMode() ? '/assets/pepe-the-frog.jpg' : `/netflix-clone-angular17/assets/pepe-the-frog.jpg`}` },
  ];
}
