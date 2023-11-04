"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_config_interface_1 = require("../interfaces/components/db-config.interface");
const isValidHostname = require('is-valid-hostname');
class DbConfigValidator {
    static validateConfig(db) {
        if (!db) {
            throw new Error('Invalid db config');
        }
    }
    static validateDriver(driver) {
        if (!Object.values(db_config_interface_1.DbDriver).includes(driver)) {
            throw new Error('Invalid db driver');
        }
    }
    static validateHost(host) {
        if (!isValidHostname(host)) {
            throw new Error('Invalid db host');
        }
    }
    static validatePort(port) {
        if (!(port && Number(port) > 0 && Number(port) < 2 ** 16 - 1)) {
            throw new Error('Invalid db port');
        }
    }
    static validateUser(user) {
        if (!user?.length) {
            throw new Error('Invalid db user');
        }
    }
    static validatePassword(password) {
        if (!password?.length) {
            throw new Error('Invalid db password');
        }
    }
    static validateName(name) {
        if (!name?.length) {
            throw new Error('Invalid db name');
        }
    }
    static validate(db) {
        DbConfigValidator.validateConfig(db);
        DbConfigValidator.validateDriver(db.driver);
        DbConfigValidator.validateHost(db.host);
        DbConfigValidator.validatePort(db.port);
        DbConfigValidator.validateUser(db.user);
        DbConfigValidator.validatePassword(db.password);
        DbConfigValidator.validateName(db.name);
    }
}
exports.default = DbConfigValidator;
//# sourceMappingURL=db-config.validator.js.map