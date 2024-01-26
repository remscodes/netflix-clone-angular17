import { animate, group, style, transition, trigger, useAnimation, AnimationEvent } from '@angular/animations';
import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { BOUNCE_ANIMATION } from '../../../../shared/animations/bounce.animation';
import { FADE_IN_ANIMATION } from '../../../../shared/animations/fade-in.animation';
import { RigidImgDirective } from '../../../../shared/directives/rigid-img.directive';
import { Profile } from '../../models/profile.model';
import { AuthStore } from '../../services/auth-store.service';

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
    trigger('selectedProfile', [
      transition(':leave', [
        useAnimation(BOUNCE_ANIMATION, { params: { delay: '0ms' } }),
      ]),
    ]),
  ],
})

export class ProfileBoxComponent {

  public profile = input.required<Profile>();
  public index = input.required<number>();

  private authStore = inject(AuthStore);

  public selected = computed(() => this.authStore.selectedProfileIndex() === this.index());

  public animationDone($event: AnimationEvent): void {
    // console.log($event);
  }
}
