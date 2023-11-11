import { Module } from '@nestjs/common';
import { PrismaCrudService } from './prisma-crud.service';
import { PrismaCrudController } from './prisma-crud.controller';
import {PrismaClient} from '@prisma/client';
import {PrismaCrudRepository} from '@/app/modules/prisma-crud/prisma-crud.repository';

@Module({
  controllers: [PrismaCrudController],
  providers: [PrismaCrudService, PrismaClient, PrismaCrudRepository],
})
export class PrismaCrudModule {}
