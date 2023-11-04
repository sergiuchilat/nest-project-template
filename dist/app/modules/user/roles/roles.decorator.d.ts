import { UserRole } from './role.enum';
export declare const ROLES_KEY = "roles";
export declare const RolesGuard: (...roles: UserRole[]) => import("@nestjs/common").CustomDecorator<string>;
