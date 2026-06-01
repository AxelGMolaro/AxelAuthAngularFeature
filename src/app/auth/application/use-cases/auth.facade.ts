import { Injectable, inject } from '@angular/core';
import { AuthStore } from '../store/auth.store';

@Injectable({
  providedIn: 'root'
})
export class AuthFacade {
  private store = inject(AuthStore);

  user = this.store.user;
  loading = this.store.loading;
  error = this.store.error;
  isAuthenticated = this.store.isAuthenticated;

  login(email: string, password: string) {
    return this.store.login(email, password);
  }

  logout() {
    return this.store.logout();
  }
}