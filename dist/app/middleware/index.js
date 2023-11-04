"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const parse_token_1 = require("./middleware/parse.token");
exports.default = [
    {
        name: 'parse_token',
        routes: '*',
        guard: parse_token_1.ParseToken,
    },
];
//# sourceMappingURL=index.js.map