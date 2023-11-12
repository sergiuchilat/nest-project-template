import DbConfigInterface from './components/db-config.interface';
import JwtConfigInterface from './components/jwt-config.interface';
import DocsConfigInterface from './components/docs-config.interface';
import AppConfigInterface from './components/app-config.interface';
import AppInstallInterface from './components/app-install.interface';
import FilesConfigInterface from './components/files-config.interface';

export default interface ConfigInterface{
    app: AppConfigInterface
    db: DbConfigInterface
    jwt: JwtConfigInterface
    files: FilesConfigInterface
    docs: DocsConfigInterface
    appInstall: AppInstallInterface
}
