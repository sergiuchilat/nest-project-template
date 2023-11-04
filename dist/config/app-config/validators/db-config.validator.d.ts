import AppConfigInterface from "../interfaces/app-config.interface";
export default class DbConfigValidator {
    private static validateConfig;
    private static validateDriver;
    private static validateHost;
    private static validatePort;
    private static validateUser;
    private static validatePassword;
    private static validateName;
    static validate(db: AppConfigInterface['db']): void;
}
