import { DataSource } from 'typeorm';
declare const _default: (() => {
    type: import("../../config/app-config/interfaces/components/db-config.interface").DbDriver;
    host: string;
    port: string;
    username: string;
    password: string;
    database: string;
    entities: string[];
    migrations: string[];
    autoLoadEntities: boolean;
    syncronize: boolean;
}) & import("@nestjs/config").ConfigFactoryKeyHost<{
    type: import("../../config/app-config/interfaces/components/db-config.interface").DbDriver;
    host: string;
    port: string;
    username: string;
    password: string;
    database: string;
    entities: string[];
    migrations: string[];
    autoLoadEntities: boolean;
    syncronize: boolean;
}>;
export default _default;
export declare const connectionSource: DataSource;
