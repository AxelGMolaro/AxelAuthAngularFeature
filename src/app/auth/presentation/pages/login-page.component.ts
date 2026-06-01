import { Component, inject } from '@angular/core';
import { LoginFormComponent } from '../components/login-form/login-form.component';
import { AuthFacade } from '../../application/use-cases/auth.facade';

@Component({
  standalone: true,
  imports: [LoginFormComponent],
  template: `
    <app-login-form
      (loginSubmit)="login($event)"
    />
  `
})
export class LoginPageComponent {
  private auth = inject(AuthFacade);

  login(data: { email: string; password: string }) {
    this.auth.login(data.email, data.password);
  }
}