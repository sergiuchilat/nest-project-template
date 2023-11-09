export interface LogConfigInterface {
    filename: string
    maxFiles: string
}

export default interface AppConfigInterface {
    port: string
    requestTimeout: number
    log: {
        error: LogConfigInterface
        all: LogConfigInterface
    }
}