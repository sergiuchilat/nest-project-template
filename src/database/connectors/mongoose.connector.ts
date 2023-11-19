import {MongooseModule} from '@nestjs/mongoose';
import AppConfig from '@/config/app-config';

console.log(AppConfig.mongo.url);
export default [
  MongooseModule.forRoot(AppConfig.mongo.url),
];