import { Component, inject, input, output } from '@angular/core';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { AUTH_CONFIG } from '../../../config/auth.tokens';

@Component({
  selector: 'auth-login-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login-form.component.html'
})
export class LoginFormComponent {
  private config = inject(AUTH_CONFIG);
  
  submitLogin = output<{ email: string; password: string }>();

  fb = new FormBuilder();

  form = this.fb.group({
    email: [''],
    password: ['']
  });

  submit() {
    this.submitLogin.emit(this.form.getRawValue() as any);
  }
}