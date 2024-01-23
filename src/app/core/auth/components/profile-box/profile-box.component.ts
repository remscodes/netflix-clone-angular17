import { group, transition, trigger, useAnimation } from '@angular/animations';
import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { FADE_IN_ANIMATION } from '../../../../shared/animations/fade-in.animation';
import { TOP_TO_BOT_ANIMATION } from '../../../../shared/animations/top-to-bot.animation';
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
        group([
          useAnimation(FADE_IN_ANIMATION),
          useAnimation(TOP_TO_BOT_ANIMATION),
        ]),
      ]),
    ]),
  ],
})

export class ProfileBoxComponent {

  public profile = input.required<Profile>();

  public animationDelay = input('0ms', {
    alias: 'index',
    transform: (v: number) => `${(v + 1) * 100}ms`,
  });
}
