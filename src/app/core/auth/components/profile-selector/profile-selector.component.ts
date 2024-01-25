import { animateChild, group, query, transition, trigger, useAnimation } from '@angular/animations';
import { ChangeDetectionStrategy, Component, inject, isDevMode } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { Router } from '@angular/router';
import { CreditComponent } from '../../../../components/credit/credit.component';
import { FADE_IN_ANIMATION, FADE_OUT_ANIMATION } from '../../../../shared/animations/fade-in.animation';
import { SCALE_IN_ANIMATION, SCALE_OUT_ANIMATION } from '../../../../shared/animations/scale.animation';
import { Profile } from '../../models/profile.model';
import { ProfileBoxComponent } from '../profile-box/profile-box.component';

@Component({
  selector: 'app-profile-selector',
  standalone: true,
  imports: [
    MatButton,
    ProfileBoxComponent,
    CreditComponent,
  ],
  templateUrl: './profile-selector.component.html',
  styleUrl: './profile-selector.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('selector', [
      transition(':enter', [
        group([
          useAnimation(FADE_IN_ANIMATION),
          query('#profile-selector', [
            useAnimation(SCALE_OUT_ANIMATION, { params: { duration: '500ms', from: 1.2, to: 1 } }),
          ]),
          query('@*', [
            animateChild(),
          ], { delay: '200ms' }),
        ]),
      ]),
      transition(':leave', [
        group([
          query(':leave @*', [
            animateChild(),
          ], { delay: '200ms', optional: true }),
          useAnimation(FADE_OUT_ANIMATION),
          query('#profile-selector', [
            useAnimation(SCALE_IN_ANIMATION, { params: { duration: '200ms', from: 1, to: 1.1 } }),
          ]),
        ]),
      ]),
    ]),
  ],
})
export class ProfileSelectorComponent {

  private router = inject(Router);

  public mockProfiles: Profile[] = [
    { name: 'CEO Michael Scott', imgUrl: `${isDevMode() ? '/assets/michael-scott.jpg' : `/netflix-clone-angular17/assets/michael-scott.jpg`}` },
    { name: 'Commercial Chad', imgUrl: `${isDevMode() ? '/assets/gigachad.jpg' : `/netflix-clone-angular17/assets/gigachad.jpg`}` },
    { name: 'Dev Senior Kermit', imgUrl: `${isDevMode() ? '/assets/senior-kermit.jpg' : `/netflix-clone-angular17/assets/senior-kermit.jpg`}` },
  ];

  public navigateToHome(): void {
    this.router.navigate(['browse']).then();
  }
}
