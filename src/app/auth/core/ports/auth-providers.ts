import { Observable } from 'rxjs';
import { AuthUser } from '../domain/models/auth-user.model';

export interface AuthProvider {
  login(email: string, password: string): Promise<void>;
  register(email: string, password: string): Promise<void>;
  logout(): Promise<void>;
  currentUser(): Observable<AuthUser | null>;
}