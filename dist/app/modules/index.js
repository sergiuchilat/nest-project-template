"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auth_module_1 = require("./auth/auth.module");
const country_module_1 = require("./geo/country/country.module");
const location_module_1 = require("./geo/location/location.module");
const region_module_1 = require("./geo/region/region.module");
const user_module_1 = require("./user/user.module");
exports.default = [
    auth_module_1.AuthModule,
    user_module_1.UserModule,
    country_module_1.CountryModule,
    region_module_1.RegionModule,
    location_module_1.LocationModule,
];
//# sourceMappingURL=index.js.map