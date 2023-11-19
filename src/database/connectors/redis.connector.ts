import {CacheModule} from '@nestjs/cache-manager';
import * as redisStore from 'cache-manager-redis-store';

export default [
  CacheModule.register({
    isGlobal: true,
    store: redisStore,
    host: 'redis',
    port: 6379,
  })
];