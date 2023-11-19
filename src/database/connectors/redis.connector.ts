import {CacheModule} from '@nestjs/cache-manager';
import * as redisStore from 'cache-manager-redis-store';
import AppConfig from '@/config/app-config';

export default [
  CacheModule.register({
    isGlobal: true,
    store: redisStore,
    host: AppConfig.redis.host,
    port: AppConfig.redis.port,
  })
];