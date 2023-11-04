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
exports.RegionService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const region_entity_1 = require("./region.entity");
let RegionService = class RegionService {
    constructor(regionRepository) {
        this.regionRepository = regionRepository;
    }
    async getAll() {
        return await this.regionRepository.find();
    }
    async getOneById(id) {
        return await this.regionRepository.findOne({
            where: {
                id,
            },
        });
    }
    async create(Region) {
        return this.regionRepository.save(Region);
    }
    async update(id, newValue) {
        await this.regionRepository.update(id, newValue);
        return this.getOneById(id);
    }
    async delete(id) {
        return await this.regionRepository.delete(id);
    }
    async getForCountry(countryId) {
        return await this.regionRepository.find({
            where: {
                countryId,
            },
        });
    }
};
RegionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(region_entity_1.Region)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], RegionService);
exports.RegionService = RegionService;
//# sourceMappingURL=region.service.js.map