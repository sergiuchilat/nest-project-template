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
exports.PlayerService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const player_entity_1 = require("./player.entity");
const class_transformer_1 = require("class-transformer");
const player_item_dto_1 = require("./dto/player.item.dto");
let PlayerService = class PlayerService {
    constructor(playerRepository) {
        this.playerRepository = playerRepository;
    }
    async getAll() {
        try {
            return (0, class_transformer_1.plainToInstance)(player_item_dto_1.PlayerItemDto, await this.playerRepository.find());
        }
        catch (e) {
            throw new common_1.NotFoundException();
        }
    }
    async getOneById(id) {
        return await this.playerRepository.findOneOrFail({
            where: {
                id: id,
            },
        });
    }
    async getOneByUUId(uuid) {
        return await this.playerRepository.findOneOrFail({
            where: {
                external_uuid: uuid,
            },
        });
    }
    async create(player) {
        const existingUser = await this.playerRepository.findOne({
            where: {
                external_uuid: player.external_uuid,
            },
        });
        if (existingUser) {
            throw new common_1.ConflictException();
        }
        return await this.playerRepository.save({
            external_uuid: player.external_uuid
        });
    }
    async delete(id) {
        const user = await this.getOneById(id);
        if (!user) {
            throw new common_1.NotFoundException();
        }
        return await this.playerRepository.delete(id);
    }
};
PlayerService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(player_entity_1.Player)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PlayerService);
exports.PlayerService = PlayerService;
//# sourceMappingURL=player.service.js.map