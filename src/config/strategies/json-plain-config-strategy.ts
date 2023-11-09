
import AppConfigInterface from '../interfaces/app-config.interface';
import { DbDriver } from '../interfaces/components/db-config.interface';
import jsonPlainConfig from '@/config/json-config.json';
export default class JsonPlainConfigStrategy {
  private readonly config: AppConfigInterface = null;

  constructor() {
    this.config = {
      app: {
        port: jsonPlainConfig.app.port.toString(),
        requestTimeout: jsonPlainConfig.app.requestTimeout,
        log: {
          error: {
            filename: jsonPlainConfig.app.log.error.filename,
            maxFiles: jsonPlainConfig.app.log.error.maxFiles
          },
          all: {
            filename: jsonPlainConfig.app.log.all.filename,
            maxFiles: jsonPlainConfig.app.log.all.maxFiles
          }
        }
      },
      db: {
        host: jsonPlainConfig.db.host,
        port: jsonPlainConfig.db.port.toString(),
        user: jsonPlainConfig.db.user,
        password: jsonPlainConfig.db.password,
        name: jsonPlainConfig.db.name,
        driver: DbDriver[jsonPlainConfig.db.driver]
      },
      jwt: {
        secret: jsonPlainConfig.jwt.secret_key,
        expiresIn: jsonPlainConfig.jwt.token_expires_in
      },
      docs: {
        generate: jsonPlainConfig.docs.generate,
        path: jsonPlainConfig.docs.path,
        version: jsonPlainConfig.docs.version,
        title: jsonPlainConfig.docs.title,
        description: jsonPlainConfig.docs.description,
        authName: jsonPlainConfig.docs.authName
      },
      appInstall: {
        admin_username: jsonPlainConfig.appInstall.admin_username,
        admin_email: jsonPlainConfig.appInstall.admin_email,
        admin_password: jsonPlainConfig.appInstall.admin_password
      }
    };
  }

  public getConfig() {
    return this.config;
  }
}
