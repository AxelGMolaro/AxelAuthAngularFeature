import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAuth } from './auth/providers/provide-auth';
import { provideFirebaseInfrastructure } from './auth/core/firebase/provide-firebase';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),

    ...provideFirebaseInfrastructure(),

    ...provideAuth({
      roles: ['admin', 'barber', 'client'],
      theme: {
        primaryColor: '#000'
      }
    })
  ]
};