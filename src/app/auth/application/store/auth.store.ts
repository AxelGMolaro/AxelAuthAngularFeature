import {
  Injectable,
  signal,
  computed,
  inject
} from '@angular/core';
import { AUTH_REPOSITORY } from '../../core/config/auth.tokens';


@Injectable({
  providedIn: 'root'
})
export class AuthStore {
  private repo = inject(AUTH_REPOSITORY);

  private state = signal({
    user: this.repo.getCurrentUser(),
    loading: false,
    error: null as string | null
  });

  readonly user = computed(() => this.state().user);
  readonly loading = computed(() => this.state().loading);
  readonly error = computed(() => this.state().error);
  readonly isAuthenticated = computed(() => !!this.user());

  async login(email: string, password: string) {
    this.setLoading(true);
    this.setError(null);

    try {
      await this.repo.login(email, password);
      this.refreshUser();
    } catch {
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
    this.state.update(state => ({
      ...state,
      user: this.repo.getCurrentUser()
    }));
  }

  private setLoading(loading: boolean) {
    this.state.update(state => ({
      ...state,
      loading
    }));
  }

  private setError(error: string | null) {
    this.state.update(state => ({
      ...state,
      error
    }));
  }
}