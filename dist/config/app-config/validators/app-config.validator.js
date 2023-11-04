"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isValidHostname = require('is-valid-hostname');
class AppConfigValidator {
    static validateConfig(app) {
        if (!(app)) {
            throw new Error('Invalid app config format');
        }
    }
    static validatePort(port) {
        const minPortValue = 0;
        const maxPortValue = 65535;
        if (!(port && Number(port) > minPortValue && Number(port) < maxPortValue)) {
            throw new Error(`Invalid app port. Must be a number between ${minPortValue} and ${maxPortValue}`);
        }
    }
    static validateRequestTimeout(requestTimeout) {
        const minRequestTimeoutValue = 0;
        const maxRequestTimeoutValue = 30000;
        if (!(requestTimeout && requestTimeout >= minRequestTimeoutValue && requestTimeout <= maxRequestTimeoutValue)) {
            throw new Error(`Invalid app request timeout. Must be a number between ${minRequestTimeoutValue} and ${maxRequestTimeoutValue}`);
        }
    }
    static validate(app) {
        AppConfigValidator.validateConfig(app);
        AppConfigValidator.validatePort(app.port);
        AppConfigValidator.validateRequestTimeout(app.requestTimeout);
    }
}
exports.default = AppConfigValidator;
//# sourceMappingURL=app-config.validator.js.map