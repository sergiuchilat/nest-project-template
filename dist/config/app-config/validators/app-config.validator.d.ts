import AppConfigInterface from "../interfaces/app-config.interface";
export default class AppConfigValidator {
    private static validateConfig;
    private static validatePort;
    private static validateRequestTimeout;
    static validate(app: AppConfigInterface['app']): void;
}
