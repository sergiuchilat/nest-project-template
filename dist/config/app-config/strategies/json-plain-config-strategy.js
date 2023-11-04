"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_config_interface_1 = require("../interfaces/components/db-config.interface");
const app_config_json_1 = __importDefault(require("../../app-config.json"));
class JsonPlainConfigStrategy {
    constructor() {
        this.config = null;
        this.config = {
            app: {
                port: app_config_json_1.default.app.port.toString(),
                requestTimeout: app_config_json_1.default.app.requestTimeout
            },
            db: {
                host: app_config_json_1.default.db.host,
                port: app_config_json_1.default.db.port.toString(),
                user: app_config_json_1.default.db.user,
                password: app_config_json_1.default.db.password,
                name: app_config_json_1.default.db.name,
                driver: db_config_interface_1.DbDriver[app_config_json_1.default.db.driver]
            },
            jwt: {
                secret: app_config_json_1.default.jwt.secret_key,
                expiresIn: app_config_json_1.default.jwt.tocken_expires_in
            },
            docs: {
                generate: app_config_json_1.default.docs.generate,
                path: app_config_json_1.default.docs.path,
                version: app_config_json_1.default.docs.version,
                title: app_config_json_1.default.docs.title,
                description: app_config_json_1.default.docs.description,
                authName: app_config_json_1.default.docs.authName
            }
        };
    }
    getConfig() {
        return this.config;
    }
}
exports.default = JsonPlainConfigStrategy;
//# sourceMappingURL=json-plain-config-strategy.js.map