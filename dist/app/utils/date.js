"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidDate = void 0;
function isValidDate(date) {
    return date instanceof Date && isFinite(date.getTime());
}
exports.isValidDate = isValidDate;
//# sourceMappingURL=date.js.map