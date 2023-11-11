import AppConfigInterface from '../interfaces/app-config.interface';
import { DbDriver } from '../interfaces/components/db-config.interface';
import { generateDatabaseUrl } from '@/config/services/db.service';
import * as dotenv from 'dotenv';
dotenv.config();

export default class EnvConfigStrategy {
  private readonly config: AppConfigInterface = null;

  constructor() {
    this.config = {
      app: {
        port: process.env.APP_PORT,
        requestTimeout: Number(process.env.APP_REQUEST_TIMEOUT),
        log: {
          custom: process.env.APP_LOG_CUSTOM === 'true',
          levels: {
            error: {
              filename: process.env.APP_LOG_ERROR_FILENAME,
              maxFiles: process.env.APP_LOG_ERROR_MAX_FILES
            },
            all: {
              filename: process.env.APP_LOG_ALL_FILENAME,
              maxFiles: process.env.APP_LOG_ALL_MAX_FILES
            }
          }
        }
      },
      db: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        name: process.env.DB_NAME,
        driver: DbDriver[process.env.DB_DRIVER],
        url: null
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

    this.config.db.url = generateDatabaseUrl(this.config.db);
  }

  public getConfig() {
    return this.config;
  }
}
