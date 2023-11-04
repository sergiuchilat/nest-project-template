"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
exports.default = typeorm_1.TypeOrmModule.forRootAsync({
    inject: [config_1.ConfigService],
    useFactory: (configService) => configService.get('typeorm')
});
//# sourceMappingURL=typeorm..connector.js.map