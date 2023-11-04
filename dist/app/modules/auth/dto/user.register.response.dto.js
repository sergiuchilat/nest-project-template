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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRegisterResponseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const role_enum_1 = require("../../user/roles/role.enum");
let UserRegisterResponseDto = class UserRegisterResponseDto {
};
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'mail@mail.com', description: 'Username' }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], UserRegisterResponseDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'admin|user', description: 'User role' }),
    __metadata("design:type", String)
], UserRegisterResponseDto.prototype, "role", void 0);
UserRegisterResponseDto = __decorate([
    (0, class_transformer_1.Exclude)()
], UserRegisterResponseDto);
exports.UserRegisterResponseDto = UserRegisterResponseDto;
//# sourceMappingURL=user.register.response.dto.js.map