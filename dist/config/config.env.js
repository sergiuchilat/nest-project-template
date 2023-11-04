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
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const ConfigEnv = {
    APP_DEV_MODE: process.env.APP_DEV_MODE,
    APP_PORT: process.env.APP_PORT,
    DB_HOST: process.env.DB_HOST,
    DB_PORT: process.env.DB_PORT,
    DB_USER: process.env.DB_USER,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_NAME: process.env.DB_NAME,
    DB_DRIVER: process.env.DB_DRIVER,
    JWT_BEARER_AUTH_NAME: process.env.JWT_BEARER_AUTH_NAME,
    JWT_TOKEN_EXPIRES_IN: process.env.JWT_TOKEN_EXPIRES_IN,
    JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
    DOCS_GENERATE: process.env.DOCS_GENERATE,
    DOCS_PATH: process.env.DOCS_PATH,
    DOCS_VERSION: process.env.DOCS_VERSION,
    DOCS_TITLE: process.env.DOCS_TITLE,
    DOCS_DESCRIPTION: process.env.DOCS_DESCRIPTION,
    APP_DEFAULT_TIMEOUT: Number(process.env.APP_DEFAULT_TIMEOUT),
};
exports.default = ConfigEnv;
//# sourceMappingURL=config.env.js.map