import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthStore } from '../services/auth-store.service';

export function authGuard(): CanActivateFn {
  return () => {
    const router = inject(Router);
    const authStore = inject(AuthStore);

    if (!authStore.isAuthenticated()) {
      router.navigate(['login']).then();
      return false;
    }

    return true;
  };
}
