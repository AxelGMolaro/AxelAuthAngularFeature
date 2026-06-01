import { UserRole } from "../value-types/user-role";

export interface RegisterData{
    name: string;
    email: string;
    password: string;
    role?: UserRole
}