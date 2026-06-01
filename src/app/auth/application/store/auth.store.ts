import { Injectable, signal, computed, inject } from '@angular/core';
import { FirebaseAuthRepository } from '../../infraestructure/firebase/firebase-auth.repository';

@Injectable({
  providedIn: 'root'
})
export class AuthStore {
  private repo = inject(FirebaseAuthRepository);

  private state = signal({
    user: this.repo.getCurrentUser(),
    loading: false,
    error: null as string | null
  });

  user = computed(() => this.state().user);
  loading = computed(() => this.state().loading);
  error = computed(() => this.state().error);
  isAuthenticated = computed(() => !!this.user());

  async login(email: string, password: string) {
    this.setLoading(true);

    try {
      await this.repo.login(email, password);
      this.refreshUser();
    } catch (error) {
      this.setError('Login failed');
    } finally {
      this.setLoading(false);
    }
  }

  async logout() {
    await this.repo.logout();
    this.refreshUser();
  }

  private refreshUser() {
    this.state.update(s => ({
      ...s,
      user: this.repo.getCurrentUser()
    }));
  }

  private setLoading(value: boolean) {
    this.state.update(s => ({ ...s, loading: value }));
  }

  private setError(error: string | null) {
    this.state.update(s => ({ ...s, error }));
  }
}