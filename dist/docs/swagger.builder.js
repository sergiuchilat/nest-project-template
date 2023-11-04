"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_1 = require("@nestjs/swagger");
const buildApiDocs = (app, ConfigEnv) => {
    const config = new swagger_1.DocumentBuilder()
        .setTitle(ConfigEnv.title)
        .setDescription(ConfigEnv.description)
        .setVersion(ConfigEnv.version)
        .addBearerAuth({ type: 'http', scheme: 'bearer', bearerFormat: 'JWT' }, ConfigEnv.authName)
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup(ConfigEnv.path, app, document);
};
exports.default = buildApiDocs;
//# sourceMappingURL=swagger.builder.js.map