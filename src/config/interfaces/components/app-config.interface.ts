export interface LogConfigInterface {
    filename: string
    maxFiles: string
}

export default interface AppConfigInterface {
    port: string
    requestTimeout: number
    log: {
        custom: boolean,
        levels: {
            error: LogConfigInterface
            all: LogConfigInterface
        }
    }
}