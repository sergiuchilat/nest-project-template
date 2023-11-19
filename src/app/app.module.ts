import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import AppModules from './modules';
import typeormConnector from '@/database/connectors/typeorm.connector';
import mongooseConnector from '@/database/connectors/mongoose.connector';
import redisConnector from '@/database/connectors/redis.connector';
import EventEmitterConfig from '@/app/services/events-gateway/event-emitter.config';
import middlewares from './middleware';
import { SeedService } from '@/database/seeds/seed.service';
import { ScheduleModule } from '@nestjs/schedule';
import { CronService } from '@/app/modules/cron/cron.service';
import { RabbitModule } from './modules/rabbit/rabbit.module';

@Module({
  imports: [
    ...typeormConnector,
    ...mongooseConnector,
    ...redisConnector,
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
