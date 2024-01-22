import { animate, state, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatFormField } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { AuthStore } from '../../services/auth-store.service';
import { Auth } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatFormField,
    MatInput,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('zoomIn', [
      transition(':enter', [
        style({ transform: 'scale(0.95)' }),
        animate('1s ease', style({ transform: 'scale(1)' })),
      ]),
    ]),
  ],
})
export class LoginComponent {

  private auth = inject(Auth);
  private authStore = inject(AuthStore);

}

