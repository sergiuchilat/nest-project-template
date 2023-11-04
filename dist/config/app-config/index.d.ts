import AppConfigInterface from "./interfaces/app-config.interface";
export declare enum AppConfigStrategies {
    env = "env",
    json = "json"
}
declare class AppConfig {
    private static instance;
    private configStrategies;
    private config;
    static getInstance(): AppConfig;
    private constructor();
    private validateConfig;
    init(strategy: AppConfigStrategies): void;
    getConfig(): AppConfigInterface;
}
declare const _default: AppConfig;
export default _default;
