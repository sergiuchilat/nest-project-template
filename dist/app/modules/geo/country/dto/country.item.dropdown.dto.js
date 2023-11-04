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
exports.CountryItemDropdownDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
let CountryItemDropdownDto = class CountryItemDropdownDto {
};
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'Country id' }),
    (0, class_transformer_1.Expose)({
        name: 'id',
    }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CountryItemDropdownDto.prototype, "value", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Name', description: 'Country name' }),
    (0, class_transformer_1.Expose)({
        name: 'name',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CountryItemDropdownDto.prototype, "text", void 0);
CountryItemDropdownDto = __decorate([
    (0, class_transformer_1.Exclude)()
], CountryItemDropdownDto);
exports.CountryItemDropdownDto = CountryItemDropdownDto;
//# sourceMappingURL=country.item.dropdown.dto.js.map