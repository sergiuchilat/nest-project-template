import AppConfigInterface from "./interfaces/app-config.interface";
import EnvConfigStrategy from "./strategies/env-config-strategy";
import AppConfigValidator from "./validators/app-config.validator";
import DbConfigValidator from "./validators/db-config.validator";
import DocsConfigValidator from "./validators/docs-config.validator";
import JsonPlainConfigStrategy from "./strategies/json-plain-config-strategy";

export enum AppConfigStrategies {
    env = 'env',
    json = 'json'
}

class AppConfigSingleton {
    private static instance: AppConfigSingleton = null;

    private configStrategies = {
        'env': new EnvConfigStrategy(),
        'json': new JsonPlainConfigStrategy()
    }
    
    private config: AppConfigInterface = {
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
        docs:{
            generate: false,
            path: null,
            version: null,
            title: null,
            description: null,
            authName: null
        },
        appInstall: {
            admin_username: null,
            admin_email: null,
            admin_password: null
        }
    };

    private constructor() {}

    public static getInstance(): AppConfigSingleton {
        return this.instance || (this.instance = new this());
    }

    private validateConfig() {
        DbConfigValidator.validate(this.config.db)
        AppConfigValidator.validate(this.config.app)
        DocsConfigValidator.validate(this.config.docs)
    }

    public init(strategy: AppConfigStrategies) {
        this.config = this.configStrategies[strategy].getConfig();
        this.validateConfig();
    }

    public getConfig() {
        return this.config
    }
}

AppConfigSingleton.getInstance().init(AppConfigStrategies.env);
const AppConfig = AppConfigSingleton.getInstance().getConfig()
export default AppConfig