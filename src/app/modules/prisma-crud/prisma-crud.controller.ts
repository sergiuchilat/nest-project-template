import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PrismaCrudService } from './prisma-crud.service';
import { CreatePrismaCrudDto } from './dto/create-prisma-crud.dto';
import { UpdatePrismaCrudDto } from './dto/update-prisma-crud.dto';

@Controller('prisma')
export class PrismaCrudController {
  constructor(private readonly prismaCrudService: PrismaCrudService) {}

  @Post()
  create(@Body() createPrismaDto: CreatePrismaCrudDto) {
    return this.prismaCrudService.create(createPrismaDto);
  }

  @Get()
  findAll() {
    return this.prismaCrudService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.prismaCrudService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePrismaDto: UpdatePrismaCrudDto) {
    return this.prismaCrudService.update(+id, updatePrismaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.prismaCrudService.remove(+id);
  }
}
