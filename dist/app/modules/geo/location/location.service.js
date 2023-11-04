"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const location_entity_1 = require("./location.entity");
const region_entity_1 = require("../region/region.entity");
let LocationService = class LocationService {
    constructor(locationRepository, regionRepository) {
        this.locationRepository = locationRepository;
        this.regionRepository = regionRepository;
    }
    async getAll() {
        return await this.locationRepository.find();
    }
    async getOneById(id) {
        return await this.locationRepository.findOne({
            where: {
                id,
            },
        });
    }
    async create(Location) {
        return this.locationRepository.save(Location);
    }
    async update(id, newValue) {
        await this.locationRepository.update(id, newValue);
        return this.getOneById(id);
    }
    async delete(id) {
        return await this.locationRepository.delete(id);
    }
    async getForRegion(regionId) {
        return await this.locationRepository.find({
            where: {
                regionId,
            },
        });
    }
    async getForCountry(countryId) {
        const regions = await this.regionRepository.find({
            where: {
                countryId,
            },
        });
        return await this.locationRepository.find({
            where: {
                regionId: (0, typeorm_2.In)(regions.map((region) => region.id)),
            },
        });
    }
};
LocationService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(location_entity_1.Location)),
    __param(1, (0, typeorm_1.InjectRepository)(region_entity_1.Region)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], LocationService);
exports.LocationService = LocationService;
//# sourceMappingURL=location.service.js.map