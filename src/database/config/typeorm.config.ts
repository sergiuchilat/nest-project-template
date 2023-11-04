import {registerAs} from '@nestjs/config';
import AppConfig from '@/config/app-config';

import { DataSource, DataSourceOptions } from 'typeorm';

const config = {
  type: AppConfig.db.driver,
  host: AppConfig.db.host,
  port: AppConfig.db.port,
  username: AppConfig.db.user,
  password: AppConfig.db.password,
  database: AppConfig.db.name,
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrations: ['dist/database/migrations/*.js'],
  autoLoadEntities: true,
  synchronize: false,
}

export default registerAs('typeorm', () => config);

export const connectionSource = new DataSource(config as DataSourceOptions)