import { UserRole } from './roles/role.enum';
export declare class User {
    id: number;
    name: string;
    email: string;
    password: string;
    role: UserRole;
    verified: number;
    createdBy: number;
    updatedBy: number;
    createdAt: Date;
    updatedAt: Date;
    toJSON(): this & {
        password: any;
        verified: any;
    };
}
