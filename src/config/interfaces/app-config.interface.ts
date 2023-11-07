import DbConfigInterface from "./components/db-config.interface";
import JwtConfigInterface from "./components/jwt-config.interface";
import DocsConfigInterface from "./components/docs-config.interface";
import AppConfigInterface from "./components/app-config.interface";
import AppInstallInterface from "@/config/interfaces/components/app-install.interface";

export default interface ConfigInterface{
    app: AppConfigInterface
    db: DbConfigInterface
    jwt: JwtConfigInterface
    docs: DocsConfigInterface
    appInstall: AppInstallInterface
}