"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppConfigStrategies = void 0;
const env_config_strategy_1 = __importDefault(require("./strategies/env-config-strategy"));
const app_config_validator_1 = __importDefault(require("./validators/app-config.validator"));
const db_config_validator_1 = __importDefault(require("./validators/db-config.validator"));
const dotenv = __importStar(require("dotenv"));
const docs_config_validator_1 = __importDefault(require("./validators/docs-config.validator"));
const json_plain_config_strategy_1 = __importDefault(require("./strategies/json-plain-config-strategy"));
dotenv.config();
var AppConfigStrategies;
(function (AppConfigStrategies) {
    AppConfigStrategies["env"] = "env";
    AppConfigStrategies["json"] = "json";
})(AppConfigStrategies = exports.AppConfigStrategies || (exports.AppConfigStrategies = {}));
class AppConfig {
    static getInstance() {
        return this.instance || (this.instance = new this());
    }
    constructor() {
        this.configStrategies = {
            'env': new env_config_strategy_1.default(),
            'json': new json_plain_config_strategy_1.default()
        };
        this.config = {
            app: {
                port: null,
                requestTimeout: 0
            },
            db: {
                host: null,
                port: null,
                user: null,
                password: null,
                name: null,
                driver: null
            },
            jwt: {
                secret: null,
                expiresIn: null
            },
            docs: {
                generate: false,
                path: null,
                version: null,
                title: null,
                description: null,
                authName: null
            }
        };
    }
    validateConfig() {
        db_config_validator_1.default.validate(this.config.db);
        app_config_validator_1.default.validate(this.config.app);
        docs_config_validator_1.default.validate(this.config.docs);
    }
    init(strategy) {
        this.config = this.configStrategies[strategy].getConfig();
        this.validateConfig();
    }
    getConfig() {
        return this.config;
    }
}
AppConfig.instance = null;
exports.default = AppConfig.getInstance();
//# sourceMappingURL=index.js.map