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
exports.CountryController = void 0;
const common_1 = require("@nestjs/common");
const country_service_1 = require("./country.service");
const region_service_1 = require("../region/region.service");
const location_service_1 = require("../location/location.service");
const swagger_1 = require("@nestjs/swagger");
const country_create_payload_dto_1 = require("./dto/country.create.payload.dto");
const country_item_dto_1 = require("./dto/country.item.dto");
const location_item_dto_1 = require("../location/dto/location.item.dto");
const region_item_dto_1 = require("../region/dto/region.item.dto");
const roles_decorator_1 = require("../../user/roles/roles.decorator");
const role_enum_1 = require("../../user/roles/role.enum");
const typeorm_sort_validator_1 = require("../../../validators/typeorm.sort.validator");
const country_sort_validator_1 = require("./validators/country.sort.validator");
const timeout_interceptor_1 = require("../../../interceptors/timeout.interceptor");
let CountryController = class CountryController {
    constructor(countryService, regionService, locationService) {
        this.countryService = countryService;
        this.regionService = regionService;
        this.locationService = locationService;
    }
    async getAllPaginated(page, limit, sort_order, sort_by, request, response) {
        response.status(common_1.HttpStatus.OK).json(await this.countryService.getAllPaginated({
            page,
            limit,
        }, sort_order, sort_by, request.query.filter));
    }
    async getAllWithDeleted(page, limit, sort_order, sort_by, request, response) {
        response.status(common_1.HttpStatus.OK).json(await this.countryService.getAllWithDeleted({
            page,
            limit,
        }, sort_order, sort_by, request.query.filter));
    }
    async getAllForDropdown(response) {
        response
            .status(common_1.HttpStatus.OK)
            .json(await this.countryService.getAllForDropdown());
    }
    async getOneById(id, response) {
        response
            .status(common_1.HttpStatus.OK)
            .send(await this.countryService.getOneById(id));
    }
    async create(createCountryDto, request, response) {
        response
            .status(common_1.HttpStatus.OK)
            .send(await this.countryService.create(createCountryDto, request.user));
    }
    async update(updateCountryDto, id, request, response) {
        response
            .status(common_1.HttpStatus.OK)
            .send(await this.countryService.update(id, updateCountryDto, request.user));
    }
    async delete(id, request, response) {
        response
            .status(common_1.HttpStatus.OK)
            .send(await this.countryService.deleteSoft(id, request.user));
    }
    async destroy(id, response) {
        response.status(common_1.HttpStatus.OK).send(await this.countryService.delete(id));
    }
    async getOneByIdWithRegions(id, response) {
        response
            .status(common_1.HttpStatus.OK)
            .send(await this.countryService.getOneByIdWithRegions(id));
    }
    async regions(id, Request, response) {
        response
            .status(common_1.HttpStatus.OK)
            .send(await this.regionService.getForCountry(id));
    }
    async locations(id, response) {
        response
            .status(common_1.HttpStatus.OK)
            .send(await this.locationService.getForCountry(id));
    }
};
__decorate([
    (0, common_1.Get)(''),
    (0, swagger_1.ApiOperation)({ summary: 'Get list of countries' }),
    (0, swagger_1.ApiQuery)({
        name: 'page',
        description: 'Page number',
        type: 'number',
        required: false,
    }),
    (0, swagger_1.ApiQuery)({
        name: 'limit',
        description: 'Page size',
        type: 'number',
        required: false,
    }),
    (0, swagger_1.ApiQuery)({
        name: 'sort_order',
        description: 'Sort order',
        enum: typeorm_sort_validator_1.SortOrder,
        required: false,
    }),
    (0, swagger_1.ApiQuery)({
        name: 'sort_by',
        description: 'Sort column',
        enum: country_sort_validator_1.CountrySort,
        required: false,
    }),
    (0, swagger_1.ApiQuery)({
        name: 'filter[name]',
        description: 'Filter by name',
        type: 'string',
        required: false,
    }),
    (0, swagger_1.ApiQuery)({
        name: 'filter[code]',
        description: 'Filter by code',
        type: 'string',
        required: false,
    }),
    (0, swagger_1.ApiOkResponse)({
        description: 'List of countries',
        type: country_item_dto_1.CountryItemDto,
        isArray: true,
    }),
    (0, common_1.UseInterceptors)(timeout_interceptor_1.TimeoutInterceptor),
    __param(0, (0, common_1.Query)('page', new common_1.DefaultValuePipe(1), common_1.ParseIntPipe)),
    __param(1, (0, common_1.Query)('limit', new common_1.DefaultValuePipe(50), common_1.ParseIntPipe)),
    __param(2, (0, common_1.Query)('sort_order', new common_1.DefaultValuePipe(typeorm_sort_validator_1.SortOrder.DESC))),
    __param(3, (0, common_1.Query)('sort_by', new common_1.DefaultValuePipe(country_sort_validator_1.CountrySort.id))),
    __param(4, (0, common_1.Req)()),
    __param(5, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, String, String, Object, Object]),
    __metadata("design:returntype", Promise)
], CountryController.prototype, "getAllPaginated", null);
__decorate([
    (0, common_1.Get)('with-deleted'),
    (0, roles_decorator_1.RolesGuard)(role_enum_1.UserRole.ADMIN),
    (0, swagger_1.ApiOperation)({ summary: 'Get list of countries' }),
    (0, swagger_1.ApiQuery)({
        name: 'page',
        description: 'Page number',
        type: 'number',
        required: false,
    }),
    (0, swagger_1.ApiQuery)({
        name: 'limit',
        description: 'Page size',
        type: 'number',
        required: false,
    }),
    (0, swagger_1.ApiQuery)({
        name: 'sort_order',
        description: 'Sort order',
        enum: typeorm_sort_validator_1.SortOrder,
        required: false,
    }),
    (0, swagger_1.ApiQuery)({
        name: 'sort_by',
        description: 'Sort column',
        enum: country_sort_validator_1.CountrySort,
        required: false,
    }),
    (0, swagger_1.ApiQuery)({
        name: 'filter[name]',
        description: 'Filter by name',
        type: 'string',
        required: false,
    }),
    (0, swagger_1.ApiQuery)({
        name: 'filter[code]',
        description: 'Filter by code',
        type: 'string',
        required: false,
    }),
    (0, swagger_1.ApiOkResponse)({
        description: 'List of countries',
        type: country_item_dto_1.CountryItemDto,
        isArray: true,
    }),
    (0, common_1.UseInterceptors)(timeout_interceptor_1.TimeoutInterceptor),
    __param(0, (0, common_1.Query)('page', new common_1.DefaultValuePipe(1), common_1.ParseIntPipe)),
    __param(1, (0, common_1.Query)('limit', new common_1.DefaultValuePipe(50), common_1.ParseIntPipe)),
    __param(2, (0, common_1.Query)('sort_order', new common_1.DefaultValuePipe(typeorm_sort_validator_1.SortOrder.DESC))),
    __param(3, (0, common_1.Query)('sort_by', new common_1.DefaultValuePipe(country_sort_validator_1.CountrySort.id))),
    __param(4, (0, common_1.Req)()),
    __param(5, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, String, String, Object, Object]),
    __metadata("design:returntype", Promise)
], CountryController.prototype, "getAllWithDeleted", null);
__decorate([
    (0, common_1.Get)('dropdown'),
    (0, roles_decorator_1.RolesGuard)(role_enum_1.UserRole.ADMIN),
    (0, swagger_1.ApiOperation)({ summary: 'Get list of countries' }),
    (0, swagger_1.ApiParam)({ name: 'page', description: 'Page number', type: 'number' }),
    (0, swagger_1.ApiParam)({ name: 'limit', description: 'Page size', type: 'number' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'List of countries',
        type: country_item_dto_1.CountryItemDto,
        isArray: true,
    }),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CountryController.prototype, "getAllForDropdown", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, roles_decorator_1.RolesGuard)(role_enum_1.UserRole.ADMIN),
    (0, swagger_1.ApiOperation)({ summary: 'Get One country by Id' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Country id', type: 'number' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Country item',
        type: country_item_dto_1.CountryItemDto,
        isArray: false,
    }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], CountryController.prototype, "getOneById", null);
__decorate([
    (0, common_1.Post)(),
    (0, roles_decorator_1.RolesGuard)(role_enum_1.UserRole.ADMIN),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new country' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Added country',
        type: country_item_dto_1.CountryItemDto,
        isArray: true,
    }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [country_create_payload_dto_1.CountryCreateDto, Object, Object]),
    __metadata("design:returntype", Promise)
], CountryController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, roles_decorator_1.RolesGuard)(role_enum_1.UserRole.ADMIN),
    (0, swagger_1.ApiOperation)({ summary: 'Update a country by Id' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Country id', type: 'number' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Updated country',
        type: country_item_dto_1.CountryItemDto,
        isArray: true,
    }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(2, (0, common_1.Req)()),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [country_create_payload_dto_1.CountryCreateDto, Number, Object, Object]),
    __metadata("design:returntype", Promise)
], CountryController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, roles_decorator_1.RolesGuard)(role_enum_1.UserRole.ADMIN),
    (0, swagger_1.ApiOperation)({ summary: 'Soft Delete a country by Id' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Country id', type: 'number' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Empty response',
        type: null,
    }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object, Object]),
    __metadata("design:returntype", Promise)
], CountryController.prototype, "delete", null);
__decorate([
    (0, common_1.Delete)(':id/destroy'),
    (0, roles_decorator_1.RolesGuard)(role_enum_1.UserRole.ADMIN),
    (0, swagger_1.ApiOperation)({ summary: 'Delete(complete) a country by Id' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Country id', type: 'number' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Empty response',
        type: null,
    }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], CountryController.prototype, "destroy", null);
__decorate([
    (0, common_1.Get)(':id/with-regions'),
    (0, roles_decorator_1.RolesGuard)(role_enum_1.UserRole.ALL),
    (0, swagger_1.ApiOperation)({ summary: 'Get One country by Id with regions' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Country id', type: 'number' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Country item with regions',
        type: country_item_dto_1.CountryItemDto,
        isArray: false,
    }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], CountryController.prototype, "getOneByIdWithRegions", null);
__decorate([
    (0, common_1.Get)(':id/regions'),
    (0, roles_decorator_1.RolesGuard)(role_enum_1.UserRole.ALL),
    (0, swagger_1.ApiOperation)({ summary: 'Get a country regions' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Country id', type: 'number' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'List of regions',
        type: region_item_dto_1.RegionItemDto,
        isArray: true,
    }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object, Object]),
    __metadata("design:returntype", Promise)
], CountryController.prototype, "regions", null);
__decorate([
    (0, common_1.Get)(':id/locations'),
    (0, roles_decorator_1.RolesGuard)(role_enum_1.UserRole.ALL),
    (0, swagger_1.ApiOperation)({ summary: 'Get a country locations' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Country id', type: 'number' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'List of locations',
        type: location_item_dto_1.LocationItemDto,
        isArray: true,
    }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], CountryController.prototype, "locations", null);
CountryController = __decorate([
    (0, swagger_1.ApiTags)('Countries'),
    (0, common_1.Controller)('/countries'),
    __metadata("design:paramtypes", [country_service_1.CountryService,
        region_service_1.RegionService,
        location_service_1.LocationService])
], CountryController);
exports.CountryController = CountryController;
//# sourceMappingURL=country.controller.js.map