import { Component, inject } from '@angular/core';
import { AuthService } from '../../../../application/services/auth.service';
import { LoginFormComponent } from '../../components/login-form/login-form.component';

@Component({
  standalone: true,
  imports: [LoginFormComponent],
  template: `
    <auth-login-form
      (submitLogin)="login($event)"
    />
  `
})
export class LoginPageComponent {
  private auth = inject(AuthService);

  login(data: { email: string; password: string }) {
    this.auth.login(data.email, data.password);
  }
}