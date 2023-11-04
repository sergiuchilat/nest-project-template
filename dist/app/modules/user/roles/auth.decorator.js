"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthGuard = void 0;
const common_1 = require("@nestjs/common");
const AuthGuard = () => (0, common_1.SetMetadata)('authRequired', true);
exports.AuthGuard = AuthGuard;
//# sourceMappingURL=auth.decorator.js.map