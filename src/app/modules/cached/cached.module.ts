import { Module } from '@nestjs/common';
import { CachedService } from './cached.service';
import { CachedController } from './cached.controller';
import {CacheModule} from '@nestjs/cache-manager';

@Module({
  imports: [CacheModule.register()],
  controllers: [CachedController],
  providers: [CachedService],
})
export class CachedModule {}
