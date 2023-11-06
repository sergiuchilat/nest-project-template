import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import AppModules from './modules';
import typeormConnector from '@/database/connectors/typeorm.connector';
import EventEmitterConfig from "@/app/services/events-gateway/event-emitter.config";
import middlewares from './middleware';
import {SeedService} from "@/database/seeds/seed.service";

@Module({
  imports: [
      ...typeormConnector,
      ...AppModules,
      EventEmitterConfig
  ],
    providers: [
        SeedService
    ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    middlewares.forEach((middleware) => {
      consumer.apply(middleware.guard).forRoutes(middleware.routes);
    });
  }
}
