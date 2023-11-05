import {ConfigService, registerAs} from '@nestjs/config';
import { DataSource, DataSourceOptions } from 'typeorm';

import * as dotenv from 'dotenv';
dotenv.config();

const configService = new ConfigService();

const config = {
  type: 'postgres',
  host: configService.get('DB_HOST'),
  port: configService.get('DB_PORT'),
  username: configService.get('DB_USER'),
  password: configService.get('DB_PASSWORD'),
  database: configService.get('DB_NAME'),
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrations: ['dist/**/database/migrations/*.js'],
  autoLoadEntities: true,
  synchronize: false,
}

export default registerAs('typeorm', () => config);

export const connectionSource = new DataSource(config as DataSourceOptions)