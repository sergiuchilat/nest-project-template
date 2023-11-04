"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_config_interface_1 = require("../interfaces/components/db-config.interface");
class EnvConfigStrategy {
    constructor() {
        this.config = null;
        this.config = {
            app: {
                port: process.env.APP_PORT,
                requestTimeout: Number(process.env.APP_REQUEST_TIMEOUT)
            },
            db: {
                host: process.env.DB_HOST,
                port: process.env.DB_PORT,
                user: process.env.DB_USER,
                password: process.env.DB_PASSWORD,
                name: process.env.DB_NAME,
                driver: db_config_interface_1.DbDriver[process.env.DB_DRIVER]
            },
            jwt: {
                secret: process.env.JWT_SECRET_KEY,
                expiresIn: process.env.JWT_TOKEN_EXPIRES_IN
            },
            docs: {
                generate: process.env.DOCS_GENERATE === 'true',
                path: process.env.DOCS_PATH,
                version: process.env.DOCS_VERSION,
                title: process.env.DOCS_TITLE,
                description: process.env.DOCS_DESCRIPTION,
                authName: process.env.DOCS_AUTH_NAME
            }
        };
    }
    getConfig() {
        return this.config;
    }
}
exports.default = EnvConfigStrategy;
//# sourceMappingURL=env-config-strategy.js.map