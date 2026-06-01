import { UserRole } from "../value-types/user-role";

export interface AuthUser{
    uid: string,
    email: string,
    displayName?: string,
    role: UserRole
}