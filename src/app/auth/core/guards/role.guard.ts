import { inject } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';

import { AuthFacade } from '../../application/use-cases/auth.facade';
import { AUTH_CONFIG } from '../config/auth.tokens';

export const roleGuard = (
  allowedRoles: string[]
): CanActivateFn => {
  return () => {
    const auth = inject(AuthFacade);
    const router = inject(Router);
    const config = inject(AUTH_CONFIG);

    const user = auth.user();

    if (!user) {
      return router.createUrlTree(['/auth/login']);
    }

    const validRoles = config.roles ?? [];

    const hasValidSystemRole = user.roles.some(role =>
      validRoles.includes(role)
    );

    const hasPermission = user.roles.some(role =>
      allowedRoles.includes(role)
    );

    if (!hasValidSystemRole || !hasPermission) {
      return router.createUrlTree(['/auth/unauthorized']);
    }

    return true;
  };
};