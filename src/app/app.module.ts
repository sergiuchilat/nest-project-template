import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import AppModules from './modules';
import TypeormConnector from '@/database/connectors/typeorm.connector';
import MongooseConnector from '@/database/connectors/mongoose.connector';
import RedisConnector from '@/database/connectors/redis.connector';
import EventEmitterConfig from '@/app/services/events-gateway/event-emitter.config';
import middlewares from './middleware';
import { SeedService } from '@/database/seeds/seed.service';
import { ScheduleModule } from '@nestjs/schedule';
import { CronService } from '@/app/modules/cron/cron.service';
import { RabbitModule } from './modules/rabbit/rabbit.module';

@Module({
  imports: [
    ...TypeormConnector,
    ...MongooseConnector,
    ...RedisConnector,
    ...AppModules,
    ScheduleModule.forRoot(),
    EventEmitterConfig,
    RabbitModule
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
