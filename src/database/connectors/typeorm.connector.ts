import {ConfigModule, ConfigService} from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import typeorm from "@/database/config/typeorm.config";

export default [
    TypeOrmModule.forRootAsync({
        inject: [ConfigService],
        useFactory: (configService: ConfigService) => configService.get('typeorm')
    }),
    ConfigModule.forRoot({
        isGlobal: true,
        load: [typeorm]
    })
]