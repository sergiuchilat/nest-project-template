import {registerAs} from '@nestjs/config';
import appConfig, { AppConfigStrategies } from '../../config/app-config/index';

import { DataSource, DataSourceOptions } from 'typeorm';

appConfig.getInstance().init(AppConfigStrategies.env);

const appConfigInstance = appConfig.getInstance().getConfig()

const config = {
  type: appConfigInstance.db.driver,
  host: appConfigInstance.db.host,
  port: appConfigInstance.db.port,
  username: appConfigInstance.db.user,
  password: appConfigInstance.db.password,
  database: appConfigInstance.db.name,
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrations: ['dist/database/migrations/*.js'],
  autoLoadEntities: true,
  syncronize: false,
}

export default registerAs('typeorm', () => config);

export const connectionSource = new DataSource(config as DataSourceOptions)