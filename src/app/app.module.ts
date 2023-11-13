import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import AppModules from './modules';
import typeormConnector from '@/database/connectors/typeorm.connector';
import EventEmitterConfig from '@/app/services/events-gateway/event-emitter.config';
import middlewares from './middleware';
import {SeedService} from '@/database/seeds/seed.service';
import {ScheduleModule} from '@nestjs/schedule';
import {CronService} from '@/app/modules/cron/cron.service';
import {EventEmitterModule} from '@nestjs/event-emitter';
import {CacheModule} from '@nestjs/cache-manager';
import * as redisStore from 'cache-manager-redis-store';

@Module({
  imports: [
    ...typeormConnector,
    ...AppModules,
    EventEmitterConfig,
    ScheduleModule.forRoot(),
    EventEmitterModule.forRoot(),
    CacheModule.register({
      isGlobal: true,
      store: redisStore,
      host: 'redis',
      port: 6379,
    })
  ],
  providers: [
    SeedService,
    CronService
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    middlewares.forEach((middleware) => {
      consumer.apply(middleware.guard).forRoutes(middleware.routes);
    });
  }
}
