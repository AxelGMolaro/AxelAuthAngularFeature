import { Injectable, inject, signal } from '@angular/core';
import { FirebaseAuthProvider } from '../../core/infrastructure/firebase/firebase-auth.provider';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private provider = inject(FirebaseAuthProvider);

  user = signal<any | null>(null);

  login(email: string, password: string) {
    return this.provider.login(email, password);
  }

  register(email: string, password: string) {
    return this.provider.register(email, password);
  }

  logout() {
    return this.provider.logout();
  }
}