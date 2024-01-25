import { animate, group, style, transition, trigger, useAnimation } from '@angular/animations';
import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { FADE_IN_ANIMATION } from '../../../../shared/animations/fade-in.animation';
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
  changeDetection: ChangeDetectionStrategy.Default,
  animations: [
    trigger('fadeInBottom', [
      transition(':enter', [
        style({ transform: 'translateY(-20px)' }),
        group([
          useAnimation(FADE_IN_ANIMATION, { params: { duration: '500ms' } }),
          animate('300ms {{delay}} ease', style({ transform: 'translateY(0)' })),
        ]),
      ]),
    ]),
    trigger(':leave', [])
  ],
})

export class ProfileBoxComponent {

  public profile = input.required<Profile>();

  public animationDelay = input('0ms', {
    alias: 'index',
    transform: (v: number) => `${(v + 1) * 100}ms`,
  });
}
