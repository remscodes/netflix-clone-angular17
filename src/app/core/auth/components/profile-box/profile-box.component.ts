import { animate, group, style, transition, trigger } from '@angular/animations';
import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RigidImgDirective } from '../../../../shared/directives/rigid-img.directive';
import { Profile } from '../../models/profile.model';

@Component({
  selector: 'app-profile-box',
  standalone: true,
  imports: [
    NgOptimizedImage,
    RigidImgDirective,
  ],
  templateUrl: './profile-box.component.html',
  styleUrl: './profile-box.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('fadeInBottom', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-20px)' }),
        group([
          animate('1s {{delay}}ms ease', style({ opacity: 1 })),
          animate('500ms {{delay}}ms ease', style({ transform: 'translateY(0)' })),
        ]),
      ], { params: { delay: 0 } }),
    ]),
  ],
})

export class ProfileBoxComponent {

  public profile = input.required<Profile>();

  public animationDelay = input(0, {
    alias: 'index',
    transform: (v: number) => (v + 1) * 100,
  });
}
