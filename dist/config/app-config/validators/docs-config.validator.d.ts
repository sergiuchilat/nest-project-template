import AppConfigInterface from "../interfaces/app-config.interface";
export default class DocsConfigValidator {
    private static validateConfig;
    private static validatePath;
    private static validateVersion;
    private static validateTitle;
    private static validateDescription;
    static validate(docs: AppConfigInterface['docs']): void;
}
