import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import buildApiDocs from './docs/swagger.builder';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import appConfig, { AppConfigStrategies } from './config/app-config/index';

async function bootstrap() {
  appConfig.init(AppConfigStrategies.env);
  const appConfigInstance = appConfig.getConfig()
  const app = await NestFactory.create(AppModule);
  
  if (appConfigInstance.docs.generate) {
    buildApiDocs(app, appConfigInstance.docs);
  }

  app.useGlobalPipes(new ValidationPipe());
  app.enableVersioning({
    type: VersioningType.URI,
  });
  await app.listen(appConfigInstance.app.port);
}
bootstrap();
