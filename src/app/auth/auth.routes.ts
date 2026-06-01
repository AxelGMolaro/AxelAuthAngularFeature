import { Routes } from '@angular/router';

export const AUTH_ROUTES: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./core/presentation/pages/login-page/login-page.component')
        .then(m => m.LoginPageComponent)
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./core/presentation/pages/register-page/register-page.component')
        .then(m => m.RegisterPageComponent)
  },
  {
    path: 'forgot-password',
    loadComponent: () =>
      import('./core/presentation/pages/forgot-password-page/forgot-password-page.component')
        .then(m => m.ForgotPasswordPageComponent)
  },
  {
    path: 'unauthorized',
    loadComponent: () =>
      import('./core/presentation/pages/unauthorized-page/unauthorized-page.component')
        .then(m => m.UnauthorizedPageComponent)
  }
];