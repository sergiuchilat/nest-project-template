"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const semver = require('semver');
class DocsConfigValidator {
    static validateConfig(docs) {
        if (!docs) {
            throw new Error('Invalid app config format');
        }
    }
    static validatePath(path) {
        const minPathLength = 3;
        if (path?.length < minPathLength) {
            throw new Error(`Invalid docs path. Min: ${minPathLength} characters`);
        }
    }
    static validateVersion(version) {
        if (!(version && semver.valid(version))) {
            throw new Error('Invalid docs version. See https://semver.org/');
        }
    }
    static validateTitle(title) {
        const minTitleLength = 10;
        if (title?.length < minTitleLength) {
            throw new Error(`Invalid docs title. Min: ${minTitleLength} characters`);
        }
    }
    static validateDescription(description) {
        const minDescriptionLength = 15;
        if (description?.length < minDescriptionLength) {
            throw new Error(`Invalid docs description. Min: ${minDescriptionLength} characters`);
        }
    }
    static validate(docs) {
        DocsConfigValidator.validateConfig(docs);
        DocsConfigValidator.validatePath(docs.path);
        DocsConfigValidator.validateVersion(docs.version);
        DocsConfigValidator.validateTitle(docs.title);
        DocsConfigValidator.validateDescription(docs.description);
    }
}
exports.default = DocsConfigValidator;
//# sourceMappingURL=docs-config.validator.js.map