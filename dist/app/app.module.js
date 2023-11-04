"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const modules_1 = __importDefault(require("./modules"));
const config_1 = require("@nestjs/config");
const typeorm__connector_1 = __importDefault(require("../database/connectors/typeorm..connector"));
const typeorm_config_1 = __importDefault(require("../database/config/typeorm.config"));
const middleware_1 = __importDefault(require("./middleware"));
let AppModule = class AppModule {
    configure(consumer) {
        middleware_1.default.forEach((middleware) => {
            consumer.apply(middleware.guard).forRoutes(middleware.routes);
        });
    }
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [config_1.ConfigModule.forRoot({
                isGlobal: true,
                load: [typeorm_config_1.default],
            }),
            typeorm__connector_1.default,
            ...modules_1.default],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map