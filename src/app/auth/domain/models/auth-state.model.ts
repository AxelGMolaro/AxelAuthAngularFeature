import { AuthUser } from "./auth-user.model";

export interface AuthState {
    user: AuthUser | null;
    loading: boolean;
    error: string | null;
}