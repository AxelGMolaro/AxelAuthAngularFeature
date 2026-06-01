import { Provider } from '@angular/core';
import { FirebaseAuthProvider } from '../core/infrastructure/firebase/firebase-auth.provider';
import { AuthConfig } from '../core/config/auth.config';
import { AUTH_PROVIDER, AUTH_CONFIG } from '../core/config/auth.tokens';

export function provideAuth(config: AuthConfig): Provider[] {
  return [
    {
      provide: AUTH_CONFIG,
      useValue: config
    },
    {
      provide: AUTH_PROVIDER,
      useClass: FirebaseAuthProvider
    }
  ];
}