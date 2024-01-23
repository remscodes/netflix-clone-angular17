import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Profile } from '../../models/profile.model';

@Component({
  selector: 'app-profile-box',
  standalone: true,
  imports: [
    NgOptimizedImage,
  ],
  templateUrl: './profile-box.component.html',
  styleUrl: './profile-box.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileBoxComponent {

  public profile = input.required<Profile>();
}
