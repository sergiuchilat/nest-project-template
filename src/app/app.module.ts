import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import AppModules from './modules';
import typeormConnector from '@/database/connectors/typeorm.connector';
import EventEmitterConfig from '@/app/services/events-gateway/event-emitter.config';
import middlewares from './middleware';
import {SeedService} from '@/database/seeds/seed.service';
import { CachedModule } from './modules/cached/cached.module';
import { FileUploaderModule } from './modules/file/modules/file-uploader/file-uploader.module';

@Module({
  imports: [
    ...typeormConnector,
    ...AppModules,
    EventEmitterConfig,
    CachedModule,
    FileUploaderModule
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
