import AppConfigInterface from './interfaces/app-config.interface';
import EnvConfigStrategy from './strategies/env-config-strategy';
import AppConfigValidator from './validators/app-config.validator';
import DbConfigValidator from './validators/db-config.validator';
import DocsConfigValidator from './validators/docs-config.validator';
import JsonPlainConfigStrategy from './strategies/json-plain-config-strategy';

export enum AppConfigStrategies {
    env = 'env',
    json = 'json'
}

class AppConfigSingleton {
  private static instance = null;

  private readonly configStrategies = {
    'env': new EnvConfigStrategy(),
    'json': new JsonPlainConfigStrategy()
  };

  private config: AppConfigInterface = {
    app: {
      port: null,
      requestTimeout: 0,
      log: {
        custom: false,
        levels: {
          error: {
            filename: null,
            maxFiles: null
          },
          all: {
            filename: null,
            maxFiles: null
          }
        }
      }
    },
    db: {
      host: null,
      port: null,
      user: null,
      password: null,
      name: null,
      driver: null,
      url: null
    },
    mongo:{
      driver: null,
      host: null,
      port: null,
      user: null,
      password: null,
      name: null,
      url: null
    },
    redis:{
      host: null,
      port: null
    },
    jwt: {
      secret: null,
      expiresIn: null
    },
    files: {
      uploadDirectory: null,
      uploadTempDirectory: null,
      uploadTempLifetime: null,
      maxFileSize: null,
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

  public static getInstance(): AppConfigSingleton {
    return this.instance || (this.instance = new this());
  }

  private validateConfig() {
    DbConfigValidator.validate(this.config.db);
    AppConfigValidator.validate(this.config.app);
    DocsConfigValidator.validate(this.config.docs);
  }

  public init(strategy: AppConfigStrategies) {
    this.config = this.configStrategies[strategy].getConfig();
    this.validateConfig();
  }

  public getConfig() {
    return this.config;
  }
}

AppConfigSingleton.getInstance().init(AppConfigStrategies.env);
// eslint-disable-next-line @typescript-eslint/naming-convention
const AppConfig = AppConfigSingleton.getInstance().getConfig();
export default AppConfig;
