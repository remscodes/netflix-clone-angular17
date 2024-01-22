import { inject, Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { UserContext } from '../models/user-context.model';
import { AuthStore } from './auth-store.service';

@Injectable({ providedIn: 'root' })
export class Auth {

  private authStore = inject(AuthStore);

  public login(login: string, _password: string): Observable<UserContext> {
    const mockUserContext: UserContext = {
      firstName: 'John',
      lastName: 'DOE',
      email: login,
    };
    return of(mockUserContext).pipe(
      tap((ctx: UserContext) => this.authStore.userContext.set(ctx)),
    );
  }
}
