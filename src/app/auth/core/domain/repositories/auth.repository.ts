import { AuthUser } from "../models/auth-user.model";

export abstract class AuthRepository {
  abstract login(email: string, password: string): Promise<void>;
  abstract register(email: string, password: string): Promise<void>;
  abstract logout(): Promise<void>;
  abstract getCurrentUser(): AuthUser | null;
}