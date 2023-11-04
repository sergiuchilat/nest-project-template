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
exports.LocationController = void 0;
const common_1 = require("@nestjs/common");
const location_service_1 = require("./location.service");
const swagger_1 = require("@nestjs/swagger");
let LocationController = class LocationController {
    constructor(locationService) {
        this.locationService = locationService;
    }
    async getAll(response) {
        try {
            response.status(common_1.HttpStatus.OK).json(await this.locationService.getAll());
        }
        catch (e) {
            response.status(common_1.HttpStatus.INTERNAL_SERVER_ERROR).send(e);
        }
    }
    async getOneById(request, response) {
        try {
            const region = await this.locationService.getOneById(Number(request.params.id));
            if (region) {
                response.status(common_1.HttpStatus.OK).send(region);
            }
            else {
                response.status(common_1.HttpStatus.NOT_FOUND).send();
            }
        }
        catch (e) {
            response.status(common_1.HttpStatus.INTERNAL_SERVER_ERROR).send(e);
        }
    }
    async create(request, response) {
        try {
            const region = await this.locationService.create(request.body);
            if (region) {
                response.status(common_1.HttpStatus.OK).send(region);
            }
            else {
                response.status(common_1.HttpStatus.NOT_FOUND).send();
            }
        }
        catch (e) {
            response.status(common_1.HttpStatus.INTERNAL_SERVER_ERROR).send(e);
        }
    }
    async update(request, response) {
        try {
            const region = await this.locationService.update(Number(request.params.id), request.body);
            if (region) {
                response.status(common_1.HttpStatus.OK).send(region);
            }
            else {
                response.status(common_1.HttpStatus.NOT_FOUND).send();
            }
        }
        catch (e) {
            response.status(common_1.HttpStatus.INTERNAL_SERVER_ERROR).send(e);
        }
    }
    async delete(request, response) {
        try {
            const region = await this.locationService.getOneById(Number(request.params.id));
            if (region) {
                await this.locationService.delete(Number(request.params.id));
                response.status(common_1.HttpStatus.OK).send({});
            }
            else {
                response.status(common_1.HttpStatus.NOT_FOUND).send();
            }
        }
        catch (e) {
            response.status(common_1.HttpStatus.INTERNAL_SERVER_ERROR).send(e);
        }
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], LocationController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], LocationController.prototype, "getOneById", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], LocationController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], LocationController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], LocationController.prototype, "delete", null);
LocationController = __decorate([
    (0, swagger_1.ApiTags)('Locations'),
    (0, common_1.Controller)('/locations'),
    __metadata("design:paramtypes", [location_service_1.LocationService])
], LocationController);
exports.LocationController = LocationController;
//# sourceMappingURL=location.controller.js.map