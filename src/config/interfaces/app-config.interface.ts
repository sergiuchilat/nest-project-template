import DbConfigInterface from './components/db-config.interface';
import JwtConfigInterface from './components/jwt-config.interface';
import DocsConfigInterface from './components/docs-config.interface';
import AppConfigInterface from './components/app-config.interface';
import AppInstallInterface from './components/app-install.interface';
import FilesConfigInterface from './components/files-config.interface';
import MongodbConfigInterface from './components/mongodb-config.interface';
import RedisConfigInterface from './components/redis-config.interface';

export default interface ConfigInterface{
    app: AppConfigInterface
    db: DbConfigInterface
    mongo: MongodbConfigInterface
    redis: RedisConfigInterface
    jwt: JwtConfigInterface
    files: FilesConfigInterface
    docs: DocsConfigInterface
    appInstall: AppInstallInterface
}
