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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountryService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const country_entity_1 = require("./country.entity");
const country_item_dto_1 = require("./dto/country.item.dto");
const class_transformer_1 = require("class-transformer");
const country_with_regions_dto_1 = require("./dto/country.with-regions.dto");
const region_entity_1 = require("../region/region.entity");
const nestjs_typeorm_paginate_1 = require("nestjs-typeorm-paginate");
const country_item_dropdown_dto_1 = require("./dto/country.item.dropdown.dto");
const country_filters_builder_1 = __importDefault(require("./builders/country.filters.builder"));
let CountryService = class CountryService {
    constructor(countryRepository, regionRepository) {
        this.countryRepository = countryRepository;
        this.regionRepository = regionRepository;
    }
    async getAllForDropdown() {
        try {
            return (0, class_transformer_1.plainToInstance)(country_item_dropdown_dto_1.CountryItemDropdownDto, await this.countryRepository.find());
        }
        catch (e) {
            throw new common_1.NotFoundException();
        }
    }
    async getAllPaginated(options, sort_order, sort_by, filters) {
        const filtersBuilder = new country_filters_builder_1.default(filters);
        try {
            const queryBuilder = this.countryRepository
                .createQueryBuilder('countries')
                .where(filtersBuilder.get())
                .orderBy(sort_by, sort_order);
            return (0, nestjs_typeorm_paginate_1.paginate)(queryBuilder, options);
        }
        catch (e) {
            throw new common_1.NotFoundException();
        }
    }
    async getAllWithDeleted(options, sort_order, sort_by, filters) {
        const filtersBuilder = new country_filters_builder_1.default(filters);
        try {
            const queryBuilder = this.countryRepository
                .createQueryBuilder('countries')
                .withDeleted()
                .where(filtersBuilder.get())
                .orderBy(sort_by, sort_order);
            return (0, nestjs_typeorm_paginate_1.paginate)(queryBuilder, options);
        }
        catch (e) {
            throw new common_1.NotFoundException();
        }
    }
    async getOneById(id) {
        try {
            return (0, class_transformer_1.plainToInstance)(country_item_dto_1.CountryItemDto, await this.countryRepository.findOneOrFail({
                where: {
                    id,
                },
            }));
        }
        catch (e) {
            throw new common_1.NotFoundException();
        }
    }
    async create(country, user) {
        const countryEntity = (0, class_transformer_1.plainToInstance)(country_entity_1.Country, country);
        const existingCountry = await this.countryRepository.findOne({
            where: [{ name: countryEntity.name }, { code: countryEntity.code }],
        });
        if (existingCountry) {
            throw new common_1.ConflictException();
        }
        countryEntity.createdBy = user.props.id;
        countryEntity.updatedBy = user.props.id;
        return await this.countryRepository.save(countryEntity);
    }
    async update(id, newValue, user) {
        const countryEntity = (0, class_transformer_1.plainToInstance)(country_entity_1.Country, newValue);
        countryEntity.updatedBy = user.props.id;
        await this.countryRepository.update(id, countryEntity);
        return this.getOneById(id);
    }
    async deleteSoft(id, user) {
        const country = await this.getOneById(id);
        if (!country) {
            throw new common_1.NotFoundException();
        }
        await this.countryRepository.update(id, {
            deletedBy: user.props.id,
        });
        return await this.countryRepository.softDelete(id);
    }
    async delete(id) {
        await this.countryRepository.update(id, {
            deletedBy: null,
            deletedAt: null,
        });
        const country = await this.getOneById(id);
        if (!country) {
            throw new common_1.NotFoundException();
        }
        await this.countryRepository.update(id, {
            deletedBy: null,
            deletedAt: null,
        });
        return await this.countryRepository.delete(id);
    }
    async getOneByIdWithRegions(id) {
        try {
            const country = (0, class_transformer_1.plainToInstance)(country_with_regions_dto_1.CountryWithRegionsDto, await this.countryRepository.findOneOrFail({
                where: {
                    id,
                },
            }));
            country.regions = await this.regionRepository.find({
                where: {
                    countryId: id,
                },
            });
            return country;
        }
        catch (e) {
            throw new common_1.NotFoundException();
        }
    }
};
CountryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(country_entity_1.Country)),
    __param(1, (0, typeorm_1.InjectRepository)(region_entity_1.Region)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], CountryService);
exports.CountryService = CountryService;
//# sourceMappingURL=country.service.js.map