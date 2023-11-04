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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("../user/user.service");
const jwt_1 = require("@nestjs/jwt");
const bcrypt_1 = require("bcrypt");
let AuthService = class AuthService {
    constructor(userService, jwtService) {
        this.userService = userService;
        this.jwtService = jwtService;
    }
    async login(user) {
        let validCredentials = false;
        let existingUser = null;
        try {
            existingUser = await this.userService.getOneByEmail(user.email);
            const passwordMatch = await (0, bcrypt_1.compare)(user.password, existingUser.password);
            if (existingUser && passwordMatch) {
                validCredentials = true;
            }
        }
        catch (e) {
            validCredentials = false;
        }
        if (existingUser && validCredentials) {
            return {
                token: this.jwtService.sign({
                    props: {
                        id: existingUser.id,
                        email: existingUser.email,
                        role: existingUser.role,
                        name: existingUser.name,
                    },
                    sub: existingUser.id,
                }),
            };
        }
        throw new common_1.HttpException('Invalid credentials', common_1.HttpStatus.UNAUTHORIZED);
    }
    async registerUser(user) {
        return await this.userService.createUser(user);
    }
    async parseUserFromToken(token) {
        try {
            return (await this.jwtService.decode(token));
        }
        catch (e) {
            return {};
        }
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_service_1.UserService,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map