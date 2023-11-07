import AppConfigInterface from '../interfaces/app-config.interface';
import { DbDriver } from '../interfaces/components/db-config.interface';
import * as dotenv from 'dotenv';
dotenv.config();

export default class EnvConfigStrategy {
  private readonly config: AppConfigInterface = null;

  constructor() {
    this.config = {
      app: {
        port: process.env.APP_PORT,
        requestTimeout: Number(process.env.APP_REQUEST_TIMEOUT)
      },
      db: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        name: process.env.DB_NAME,
        driver: DbDriver[process.env.DB_DRIVER]
      },
      jwt: {
        secret: process.env.JWT_SECRET_KEY,
        expiresIn: process.env.JWT_TOKEN_EXPIRES_IN
      },
      docs: {
        generate: process.env.DOCS_GENERATE === 'true',
        path: process.env.DOCS_PATH,
        version: process.env.DOCS_VERSION,
        title: process.env.DOCS_TITLE,
        description: process.env.DOCS_DESCRIPTION,
        authName: process.env.DOCS_AUTH_NAME
      },
      appInstall: {
        admin_username: process.env.APP_INSTALL_ADMIN_USERNAME,
        admin_email: process.env.APP_INSTALL_ADMIN_EMAIL,
        admin_password: process.env.APP_INSTALL_ADMIN_PASSWORD
      }
    };
  }

  public getConfig() {
    return this.config;
  }
}
