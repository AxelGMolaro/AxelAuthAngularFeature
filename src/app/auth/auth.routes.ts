import { Routes } from '@angular/router';

export const AUTH_ROUTES: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./presentation/pages/login-page.component')
        .then(m => m.LoginPageComponent)
  },

//   {
//     path: 'register',
//     loadComponent: () =>
//       import('./presentation/pages/register-page.component')
//         .then(m => m.RegisterPageComponent)
//   },

//   {
//     path: 'forgot-password',
//     loadComponent: () =>
//       import('./presentation/pages/forgot-password-page.component')
//         .then(m => m.ForgotPasswordPageComponent)
//   }
];