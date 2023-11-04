import AppConfigInterface from "../interfaces/app-config.interface";
import { DbDriver } from "../interfaces/components/db-config.interface";

export default class DbConfigValidator {

    private static validateConfig(db: AppConfigInterface['db']){
        if (!db) {
            throw new Error('Invalid db config')
        }
    }

    private static validateDriver(driver: DbDriver) {
        if(!Object.values(DbDriver).includes(driver)){
            throw new Error('Invalid db driver')
        }
    }

    private static validateHost(host: string) {
        const isValidHostname = require('is-valid-hostname')

        if (!isValidHostname(host)) {
            throw new Error('Invalid db host')
        }
    }

    private static validatePort(port: string) {
        if (!(port && Number(port) > 0 && Number(port) < 2**16 - 1)) {
            throw new Error('Invalid db port')
        }
    }

    private static validateUser(user: string) {
        if (!user?.length) {
            throw new Error('Invalid db user')
        }
    }

    private static validatePassword(password: string) {
        if (!password?.length) {
            throw new Error('Invalid db password')
        }
    }
    
    private static validateName(name: string) {
        if (!name?.length) {
            throw new Error('Invalid db name')
        }
    }
    
    public static validate(db: AppConfigInterface['db']) {
        DbConfigValidator.validateConfig(db)
        DbConfigValidator.validateDriver(db.driver)
        DbConfigValidator.validateHost(db.host)
        DbConfigValidator.validatePort(db.port)
        DbConfigValidator.validateUser(db.user)
        DbConfigValidator.validatePassword(db.password)
        DbConfigValidator.validateName(db.name)
    }
}