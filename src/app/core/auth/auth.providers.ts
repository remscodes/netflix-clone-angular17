import { EnvironmentProviders, Provider } from '@angular/core';
import { provideRouter } from '@angular/router';
import { AUTH_ROUTES } from './auth.routes';

export const AUTH_PROVIDERS: (Provider | EnvironmentProviders)[] = [
  provideRouter(AUTH_ROUTES),
];
