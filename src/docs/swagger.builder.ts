import ConfigInterface from '@/config/app-config/interfaces/app-config.interface';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

const buildApiDocs = (app, ConfigEnv: ConfigInterface['docs']) => {
  const config = new DocumentBuilder()
    .setTitle(ConfigEnv.title)
    .setDescription(ConfigEnv.description)
    .setVersion(ConfigEnv.version)
    
    .addBearerAuth(
      { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' },
      ConfigEnv.authName,
    )
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(ConfigEnv.path, app, document);
};

export default buildApiDocs;
