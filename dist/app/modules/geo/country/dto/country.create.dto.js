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
exports.CountryCreateDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CountryCreateDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Name', description: 'Country name' }),
    (0, class_validator_1.Length)(3, 50, {
        message: 'Name must contain [$constraint1, $constraint2] characters',
    }),
    __metadata("design:type", String)
], CountryCreateDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'AA', description: 'Country code' }),
    (0, class_validator_1.Length)(2, 2, {
        message: 'Code must contain $constraint1 characters',
    }),
    __metadata("design:type", String)
], CountryCreateDto.prototype, "code", void 0);
exports.CountryCreateDto = CountryCreateDto;
//# sourceMappingURL=country.create.dto.js.map