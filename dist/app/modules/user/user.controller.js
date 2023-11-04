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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const admin_register_dto_1 = require("./dto/admin.register.dto");
const user_register_response_dto_1 = require("../auth/dto/user.register.response.dto");
const user_service_1 = require("./user.service");
const roles_decorator_1 = require("./roles/roles.decorator");
const role_enum_1 = require("./roles/role.enum");
const user_item_dto_1 = require("./dto/user.item.dto");
const country_item_dto_1 = require("../geo/country/dto/country.item.dto");
const user_update_dto_1 = require("./dto/user.update.dto");
const user_update_password_dto_1 = require("./dto/user.update.password.dto");
const class_transformer_1 = require("class-transformer");
const user_entity_1 = require("./user.entity");
const config_env_1 = __importDefault(require("../../../config/config.env"));
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    async getAll(response) {
        try {
            response.status(common_1.HttpStatus.OK).json(await this.userService.getAll());
        }
        catch (e) {
            console.log(e);
        }
    }
    async updateOwnPassword(value, request, response) {
        console.log('here');
        response
            .status(common_1.HttpStatus.OK)
            .send(await this.userService.updateOwnPassword(value, request.user));
    }
    async getOneById(id, response) {
        response.status(common_1.HttpStatus.OK).send(await this.userService.getOneById(id));
    }
    async registerUser(user) {
        return this.userService.createAdmin(user);
    }
    async update(updateUserDto, id, request, response) {
        console.log(updateUserDto);
        response
            .status(common_1.HttpStatus.OK)
            .send(await this.userService.update(id, (0, class_transformer_1.plainToInstance)(user_entity_1.User, updateUserDto), request.user));
    }
    async delete(id, response) {
        response.status(common_1.HttpStatus.OK).send(await this.userService.delete(id));
    }
    async updatePassword(value, id, request, response) {
        response
            .status(common_1.HttpStatus.OK)
            .send(await this.userService.updatePassword(id, value, request.user));
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, roles_decorator_1.RolesGuard)(role_enum_1.UserRole.ADMIN),
    (0, swagger_1.ApiOperation)({ summary: 'Get List of users' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'List of users',
        type: user_item_dto_1.UserItemDto,
        isArray: true,
    }),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getAll", null);
__decorate([
    (0, common_1.Patch)('update-own-password'),
    (0, roles_decorator_1.RolesGuard)(role_enum_1.UserRole.ADMIN),
    (0, swagger_1.ApiOperation)({ summary: 'Update own password' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'User id', type: 'number' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Updated own password',
        type: user_update_password_dto_1.UserUpdatePasswordDto,
        isArray: true,
    }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_update_password_dto_1.UserUpdatePasswordDto, Object, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updateOwnPassword", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, roles_decorator_1.RolesGuard)(role_enum_1.UserRole.ADMIN),
    (0, swagger_1.ApiOperation)({ summary: 'Get one user by Id' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'User id', type: 'number' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'User item',
        type: user_item_dto_1.UserItemDto,
        isArray: false,
    }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getOneById", null);
__decorate([
    (0, common_1.Post)('create-admin'),
    (0, swagger_1.ApiOperation)({ summary: 'Create admin' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Registered user',
        type: user_register_response_dto_1.UserRegisterResponseDto,
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [admin_register_dto_1.AdminRegisterDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "registerUser", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, roles_decorator_1.RolesGuard)(role_enum_1.UserRole.ADMIN),
    (0, swagger_1.ApiOperation)({ summary: 'Update user by Id' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'User id', type: 'number' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Updated user',
        type: country_item_dto_1.CountryItemDto,
        isArray: true,
    }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(2, (0, common_1.Req)()),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_update_dto_1.UserUpdateDto, Number, Object, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, roles_decorator_1.RolesGuard)(role_enum_1.UserRole.ADMIN),
    (0, swagger_1.ApiOperation)({ summary: 'Delete user by Id' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'User id', type: 'number' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Empty response',
        type: null,
    }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "delete", null);
__decorate([
    (0, common_1.Patch)(':id/update-password'),
    (0, roles_decorator_1.RolesGuard)(role_enum_1.UserRole.ADMIN),
    (0, swagger_1.ApiOperation)({ summary: 'Update user password' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'User id', type: 'number' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Updated user password',
        type: user_update_password_dto_1.UserUpdatePasswordDto,
        isArray: true,
    }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(2, (0, common_1.Req)()),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_update_password_dto_1.UserUpdatePasswordDto, Number, Object, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updatePassword", null);
UserController = __decorate([
    (0, swagger_1.ApiTags)('Users'),
    (0, common_1.Controller)('/users'),
    (0, swagger_1.ApiBearerAuth)(config_env_1.default.JWT_BEARER_AUTH_NAME),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map