import { animate, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, DestroyRef, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { AbstractControl, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatError, MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { Router } from '@angular/router';
import { concatMap, delay, interval, last, map, Observable, scan, take, tap } from 'rxjs';
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
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('zoomIn', [
      transition(':enter', [
        style({ transform: 'scale(1)' }),
        animate('4s ease'),
      ]),
    ]),
    trigger('bright', [
      transition(':enter', [
        style({ filter: 'brightness(0)' }),
        animate('2s ease'),
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

  public ngOnInit(): void {
    this.fillForm();
  }

  private fillForm(): void {
    const { login, password } = this.form.controls;

    this.fillInput(login, 'john.doe@example.org').pipe(
      last(),
      concatMap(() => this.fillInput(password, 'netflix-angular-17')),
      takeUntilDestroyed(this.destroyRef),
    ).subscribe();
  }

  private fillInput(control: AbstractControl, finalValue: string): Observable<string> {
    return interval(30).pipe(
      delay(600),
      map((index: number) => finalValue[index % finalValue.length]),
      scan((acc: string, value: string) => `${acc}${value}`),
      tap((value: string) => control.setValue(value)),
      take(finalValue.length),
      takeUntilDestroyed(this.destroyRef),
    );
  }

  public submit(): void {
    if (this.form.invalid) return;

    const { login, password } = this.form.value;

    this.auth.login(login!, password!).pipe(
      takeUntilDestroyed(this.destroyRef),
    ).subscribe({
      next: () => this.router.navigate(['/home']),
    });
  }
}

