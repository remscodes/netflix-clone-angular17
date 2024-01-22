import { provideHttpClient, withFetch } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';
import { APP_ROUTES } from './app.routes';
import { AUTH_PROVIDERS } from './core/auth/auth.providers';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimationsAsync(),
    provideHttpClient(withFetch()),
    AUTH_PROVIDERS,
    provideRouter(APP_ROUTES),
  ],
};
