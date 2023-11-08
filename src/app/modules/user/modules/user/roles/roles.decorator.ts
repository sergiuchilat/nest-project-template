import { SetMetadata } from '@nestjs/common';
import { UserRole } from './role.enum';
export const ROLES_KEY = 'roles';
// eslint-disable-next-line @typescript-eslint/naming-convention
export const RolesGuard = (...roles: UserRole[]) =>
  SetMetadata(ROLES_KEY, roles);
