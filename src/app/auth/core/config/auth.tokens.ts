import { InjectionToken } from '@angular/core';

import { AuthConfig } from './auth.config';
import { AuthRepository } from '../domain/repositories/auth.repository';
import { AuthProvider } from '../ports/auth-providers';

export const AUTH_CONFIG =
  new InjectionToken<AuthConfig>('AUTH_CONFIG');

export const AUTH_REPOSITORY =
  new InjectionToken<AuthRepository>('AUTH_REPOSITORY');


export const AUTH_PROVIDER = new InjectionToken<AuthProvider>(
  'AUTH_PROVIDER'
);