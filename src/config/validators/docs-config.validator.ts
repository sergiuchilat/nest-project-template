import AppConfigInterface from "../interfaces/app-config.interface";

export default class DocsConfigValidator {

    private static validateConfig(docs: AppConfigInterface['docs']){
        if (!docs) {
            throw new Error('Invalid app config format')
        }
    }

    private static validatePath(path: string) {
        const minPathLength = 3
        if (path?.length < minPathLength) {
            throw new Error(`Invalid docs path. Min: ${minPathLength} characters`)
        }
    }

    private static validateVersion(version: string) {
        const semver = require('semver')

        if (!(version && semver.valid(version))) {
            throw new Error('Invalid docs version. See https://semver.org/')
        }
    }

    private static validateTitle(title: string) {
        const minTitleLength = 10
        if (title?.length < minTitleLength) {
            throw new Error(`Invalid docs title. Min: ${minTitleLength} characters`)
        }
    }

    private static validateDescription(description: string) {
        const minDescriptionLength = 15
        if (description?.length < minDescriptionLength) {
            throw new Error(`Invalid docs description. Min: ${minDescriptionLength} characters`)
        }
    }
    
    public static validate(docs: AppConfigInterface['docs']) {
        DocsConfigValidator.validateConfig(docs)
        DocsConfigValidator.validatePath(docs.path)
        DocsConfigValidator.validateVersion(docs.version)
        DocsConfigValidator.validateTitle(docs.title)
        DocsConfigValidator.validateDescription(docs.description)
    }
}