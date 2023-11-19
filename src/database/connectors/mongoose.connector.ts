import {MongooseModule} from '@nestjs/mongoose';
import AppConfig from '@/config/app-config';
export default [
  MongooseModule.forRoot(AppConfig.mongo.url),
];