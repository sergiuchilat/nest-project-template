"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const date_1 = require("../../../../utils/date");
class CountryFiltersBuilder {
    constructor(filters) {
        this.filters = {};
        if (filters && filters['name'] && filters['name'].length) {
            this.filters['name'] = (0, typeorm_1.Like)(`%${filters['name']}%`);
        }
        if (filters && filters['code'] && filters['code'].length) {
            this.filters['code'] = (0, typeorm_1.Equal)(filters['code']);
        }
        if (filters && filters['created_from'] && filters['created_from'].length) {
            const date = new Date(filters['created_from']);
            if ((0, date_1.isValidDate)(date)) {
                this.filters['createdAt'] = (0, typeorm_1.MoreThanOrEqual)(date);
            }
        }
        if (filters && filters['created_to'] && filters['created_to'].length) {
            const date = new Date(filters['created_from']);
            if ((0, date_1.isValidDate)(date)) {
                this.filters['createdAt'] = (0, typeorm_1.LessThanOrEqual)(date);
            }
        }
        if (filters && filters['ids'] && filters['ids'].length) {
            const ids = filters['ids'].split(',').filter((id) => isFinite(id));
            if (ids.length) {
                this.filters['id'] = (0, typeorm_1.In)(ids);
            }
        }
        if (filters && filters['codes'] && filters['codes'].length) {
            const codes = filters['codes'].split(',').map((code) => code.trim());
            if (codes.length) {
                this.filters['code'] = (0, typeorm_1.In)(codes);
            }
        }
    }
    get() {
        return this.filters;
    }
}
exports.default = CountryFiltersBuilder;
//# sourceMappingURL=country.filters.builder.js.map