"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountryModule = void 0;
const common_1 = require("@nestjs/common");
const country_controller_1 = require("./country.controller");
const country_service_1 = require("./country.service");
const region_service_1 = require("../region/region.service");
const country_entity_1 = require("./country.entity");
const typeorm_1 = require("@nestjs/typeorm");
const region_entity_1 = require("../region/region.entity");
const location_service_1 = require("../location/location.service");
const location_entity_1 = require("../location/location.entity");
const roles_guard_1 = require("../../../middleware/guards/roles.guard");
const core_1 = require("@nestjs/core");
let CountryModule = class CountryModule {
};
CountryModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([country_entity_1.Country, region_entity_1.Region, location_entity_1.Location])],
        exports: [typeorm_1.TypeOrmModule],
        controllers: [country_controller_1.CountryController],
        providers: [
            country_service_1.CountryService,
            region_service_1.RegionService,
            location_service_1.LocationService,
            {
                provide: core_1.APP_GUARD,
                useClass: roles_guard_1.RolesGuard,
            },
        ],
    })
], CountryModule);
exports.CountryModule = CountryModule;
//# sourceMappingURL=country.module.js.map