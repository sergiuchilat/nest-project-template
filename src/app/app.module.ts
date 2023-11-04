import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import AppModules from './modules';
import { ConfigModule } from '@nestjs/config';
import typeormConnector from '@/database/connectors/typeorm..connector';
import typeorm from '../database/config/typeorm.config';
import middlewares from './middleware';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [typeorm]
    }),
    typeormConnector
    , ...AppModules
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    middlewares.forEach((middleware) => {
      consumer.apply(middleware.guard).forRoutes(middleware.routes);
    });
  }
}
