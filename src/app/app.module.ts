import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import AppModules from './modules';
import typeormConnector from '@/database/connectors/typeorm.connector';
import EventEmitterConfig from "@/app/services/events-gateway/event-emitter.config";
import middlewares from './middleware';

@Module({
  imports: [
      ...typeormConnector,
      ...AppModules,
      EventEmitterConfig
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    middlewares.forEach((middleware) => {
      consumer.apply(middleware.guard).forRoutes(middleware.routes);
    });
  }
}
