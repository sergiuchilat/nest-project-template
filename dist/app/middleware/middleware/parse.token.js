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
var ParseToken_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParseToken = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("../../modules/auth/auth.service");
const core_1 = require("@nestjs/core");
let ParseToken = ParseToken_1 = class ParseToken {
    constructor(reflector, authService) {
        this.reflector = reflector;
        this.authService = authService;
    }
    static parseAuthToken(request) {
        return request.headers?.authorization?.replace('Bearer ', '') || '';
    }
    async use(request, response, next) {
        const authHeader = ParseToken_1.parseAuthToken(request);
        request.user = await this.authService.parseUserFromToken(authHeader);
        next();
    }
};
ParseToken = ParseToken_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [core_1.Reflector, auth_service_1.AuthService])
], ParseToken);
exports.ParseToken = ParseToken;
//# sourceMappingURL=parse.token.js.map