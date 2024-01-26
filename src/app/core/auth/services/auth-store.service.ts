import { computed, Injectable, signal } from '@angular/core';
import { UserContext } from '../models/user-context.model';

@Injectable({ providedIn: 'root' })
export class AuthStore {

  public userContext = signal<UserContext | null>(null);

  public isAuthenticated = computed(() => !!this.userContext());

  public selectedProfileIndex = signal<number | null>(null);
}
