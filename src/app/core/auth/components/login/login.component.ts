import { animate, group, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, DestroyRef, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { AbstractControl, FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatError, MatFormField, MatLabel, MatPrefix } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';
import { MatOption, MatSelect } from '@angular/material/select';
import { Router } from '@angular/router';
import { concatMap, delay, interval, last, map, Observable, take, tap } from 'rxjs';
import { CreditComponent } from '../../../../components/credit/credit.component';
import { NetflixLogoComponent } from '../../../../shared/components/netflix-logo/netflix-logo.component';
import { Auth } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormField,
    MatInput,
    MatButton,
    MatError,
    MatCheckbox,
    MatLabel,
    MatSelect,
    MatOption,
    MatIcon,
    MatPrefix,
    NetflixLogoComponent,
    CreditComponent,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('loginBackgroundEnter', [
      transition(':enter', [
        style({ filter: 'brightness(0)', transform: 'scale(1)' }),
        group([
          animate('2s ease', style({ filter: 'brightness(0.4)' })),
          animate('4s ease', style({ transform: 'scale(1.05)' })),
        ]),
      ]),
    ]),
  ],
})
export class LoginComponent implements OnInit {

  private auth = inject(Auth);
  private router = inject(Router);
  private formBuilder = inject(FormBuilder);
  private destroyRef = inject(DestroyRef);

  public form = this.formBuilder.group({
    login: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    remember: [true, Validators.required],
  });

  public langs = ['Français', 'Anglais'] as const;

  public langControl = new FormControl(this.langs[0]);

  public ngOnInit(): void {
    this.fillForm();
  }

  private fillForm(): void {
    const { login, password } = this.form.controls;

    this.fillInput(login, 'john.doe@example.org', 300).pipe(
      last(),
      concatMap(() => this.fillInput(password, 'netflix-angular-17', 200)),
      takeUntilDestroyed(this.destroyRef),
    ).subscribe();
  }

  private fillInput(control: AbstractControl, finalValue: string, withDelay: number): Observable<string> {
    return interval(30).pipe(
      map((index: number) => finalValue.slice(0, index + 1)),
      delay(withDelay),
      tap((value: string) => control.setValue(value)),
      take(finalValue.length),
    );
  }

  public submit(): void {
    if (this.form.invalid) return;

    const { login, password } = this.form.value;

    this.auth.login(login!, password!).pipe(
      takeUntilDestroyed(this.destroyRef),
    ).subscribe({
      next: () => this.router.navigate(['profiles']),
    });
  }
}
