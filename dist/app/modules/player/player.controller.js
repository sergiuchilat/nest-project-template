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
exports.PlayerController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const player_service_1 = require("./player.service");
const player_item_dto_1 = require("./dto/player.item.dto");
const player_create_payload_dto_1 = require("./dto/player.create.payload.dto");
const player_create_response_dto_1 = require("./dto/player.create.response.dto");
let PlayerController = class PlayerController {
    constructor(playerService) {
        this.playerService = playerService;
    }
    async getAll(response) {
        try {
            response.status(common_1.HttpStatus.OK).json(await this.playerService.getAll());
        }
        catch (e) {
            console.log(e);
        }
    }
    async getOneById(id, response) {
        response.status(common_1.HttpStatus.OK).send(await this.playerService.getOneById(id));
    }
    async getOneByUUId(uuid, response) {
        response.status(common_1.HttpStatus.OK).send(await this.playerService.getOneByUUId(uuid));
    }
    async create(player) {
        return this.playerService.create(player);
    }
    async delete(id, response) {
        response.status(common_1.HttpStatus.OK).send(await this.playerService.delete(id));
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get List of players' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'List of players',
        type: player_item_dto_1.PlayerItemDto,
        isArray: true,
    }),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PlayerController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get one player by Id' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Player id', type: 'number' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Player item',
        type: player_item_dto_1.PlayerItemDto,
        isArray: false,
    }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], PlayerController.prototype, "getOneById", null);
__decorate([
    (0, common_1.Get)(':uuid'),
    (0, swagger_1.ApiOperation)({ summary: 'Get one player by UUID' }),
    (0, swagger_1.ApiParam)({ name: 'uuid', description: 'Player UUID', type: 'string' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Player item',
        type: player_item_dto_1.PlayerItemDto,
        isArray: false,
    }),
    __param(0, (0, common_1.Param)('uuid')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], PlayerController.prototype, "getOneByUUId", null);
__decorate([
    (0, common_1.Post)(''),
    (0, swagger_1.ApiOperation)({ summary: 'Create player' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Created player',
        type: player_create_response_dto_1.PlayerCreateResponseDto,
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [player_create_payload_dto_1.PlayerCreatePayloadDto]),
    __metadata("design:returntype", Promise)
], PlayerController.prototype, "create", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete user by Id' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Player id', type: 'number' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Empty response',
        type: null,
    }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], PlayerController.prototype, "delete", null);
PlayerController = __decorate([
    (0, swagger_1.ApiTags)('Players'),
    (0, common_1.Controller)('/players'),
    __metadata("design:paramtypes", [player_service_1.PlayerService])
], PlayerController);
exports.PlayerController = PlayerController;
//# sourceMappingURL=player.controller.js.map