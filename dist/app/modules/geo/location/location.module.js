"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationModule = void 0;
const common_1 = require("@nestjs/common");
const location_controller_1 = require("./location.controller");
const location_service_1 = require("./location.service");
const location_entity_1 = require("./location.entity");
const typeorm_1 = require("@nestjs/typeorm");
const region_entity_1 = require("../region/region.entity");
let LocationModule = class LocationModule {
};
LocationModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([location_entity_1.Location, region_entity_1.Region])],
        exports: [typeorm_1.TypeOrmModule],
        controllers: [location_controller_1.LocationController],
        providers: [location_service_1.LocationService],
    })
], LocationModule);
exports.LocationModule = LocationModule;
//# sourceMappingURL=location.module.js.map