import { NestFactory } from '@nestjs/core';

import { AppModule } from '@/app/app.module';
import buildApiDocs from '@/docs/swagger.builder';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import AppConfig from '@/config/app-config';
import appLogger from '@/app/services/app-logger';

async function bootstrap() {

  const app = await NestFactory.create(AppModule, {
    logger: AppConfig.app.log.custom ? appLogger : undefined
  });

  if (AppConfig.docs.generate) {
    buildApiDocs(app, AppConfig.docs);
  }

  app.useGlobalPipes(new ValidationPipe());
  app.enableVersioning({
    type: VersioningType.URI,
  });
  await app.listen(AppConfig.app.port);
}

(async () => {
  console.log('App bootstrap started');
  try {
    await bootstrap();
  }catch (e) {
    console.log(e);
  }
  console.log('App bootstrap finished');
})();
