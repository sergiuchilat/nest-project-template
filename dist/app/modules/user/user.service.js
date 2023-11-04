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
var UserService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("./user.entity");
const bcrypt_1 = require("bcrypt");
const role_enum_1 = require("./roles/role.enum");
const class_transformer_1 = require("class-transformer");
const user_item_dto_1 = require("./dto/user.item.dto");
let UserService = UserService_1 = class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async getAll() {
        try {
            return (0, class_transformer_1.plainToInstance)(user_item_dto_1.UserItemDto, await this.userRepository.find());
        }
        catch (e) {
            throw new common_1.NotFoundException();
        }
    }
    async getOneByEmail(email) {
        return await this.userRepository.findOneOrFail({
            where: {
                email: email,
            },
        });
    }
    async getOneById(id) {
        return await this.userRepository.findOneOrFail({
            where: {
                id: id,
            },
        });
    }
    async createUser(user) {
        return await this.create(user, 'user');
    }
    async createAdmin(user) {
        return await this.create(user, 'admin');
    }
    async create(user, role) {
        const existingUser = await this.userRepository.findOne({
            where: {
                email: user.email,
            },
        });
        if (existingUser) {
            throw new common_1.ConflictException();
        }
        return await this.userRepository.save({
            name: user.name || 'Noname',
            email: user.email,
            password: await this.encodePassword(user.password),
            role: UserService_1.detectRole(role),
            createdBy: 1,
            updatedBy: 1,
        });
    }
    async update(id, newValue, user) {
        const entity = (0, class_transformer_1.plainToInstance)(user_entity_1.User, newValue);
        entity.updatedBy = user.id;
        await this.userRepository.update(id, entity);
        return this.getOneById(id);
    }
    async updatePassword(id, newValue, user) {
        if (newValue.new_password !== newValue.new_password_confirmation) {
            throw new common_1.UnprocessableEntityException('Password and confirm password do not match');
        }
        const existingUser = await this.getOneById(id);
        if (!(await (0, bcrypt_1.compare)(newValue.old_password, existingUser.password))) {
            throw new common_1.NotFoundException();
        }
        const newPassword = await this.encodePassword(newValue.new_password);
        const entity = (0, class_transformer_1.plainToInstance)(user_entity_1.User, {
            password: newPassword,
        });
        entity.updatedBy = user.props.id;
        await this.userRepository.update(id, entity);
        return this.getOneById(id);
    }
    async updateOwnPassword(newValue, user) {
        if (newValue.new_password !== newValue.new_password_confirmation) {
            throw new common_1.UnprocessableEntityException('Password and confirm password do not match');
        }
        const existingUser = await this.getOneById(user.props.id);
        if (newValue.new_password !== newValue.new_password_confirmation) {
            throw new common_1.UnprocessableEntityException('Password and confirm password do not match');
        }
        if (await (0, bcrypt_1.compare)(newValue.new_password, existingUser.password)) {
            throw new common_1.UnprocessableEntityException("You can't use one of old password. Please select a new password");
        }
        if (!(await (0, bcrypt_1.compare)(newValue.old_password, existingUser.password))) {
            throw new common_1.NotFoundException();
        }
        const newPassword = await this.encodePassword(newValue.new_password);
        const entity = (0, class_transformer_1.plainToInstance)(user_entity_1.User, {
            password: newPassword,
        });
        entity.updatedBy = user.props.id;
        await this.userRepository.update(user.props.id, entity);
        return this.getOneById(user.props.id);
    }
    async delete(id) {
        const user = await this.getOneById(id);
        if (!user) {
            throw new common_1.NotFoundException();
        }
        return await this.userRepository.delete(id);
    }
    static detectRole(role) {
        if (role === 'admin') {
            return role_enum_1.UserRole.ADMIN;
        }
        if (role === 'user') {
            return role_enum_1.UserRole.USER;
        }
    }
    async encodePassword(password) {
        return await (0, bcrypt_1.hash)(password, 12);
    }
};
UserService = UserService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map