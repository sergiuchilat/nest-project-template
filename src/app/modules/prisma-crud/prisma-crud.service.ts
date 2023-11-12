import { Injectable } from '@nestjs/common';
import { CreatePrismaCrudDto } from './dto/create-prisma-crud.dto';
import { UpdatePrismaCrudDto } from './dto/update-prisma-crud.dto';
import { PrismaCrudRepository } from '@/app/modules/prisma-crud/prisma-crud.repository';

@Injectable()
export class PrismaCrudService {
  constructor(
    private readonly prismaCrudRepository: PrismaCrudRepository
  ) {
  }
  create(createPrismaDto: CreatePrismaCrudDto) {
    return 'This action adds a new prisma-crud' + JSON.stringify(createPrismaDto);
  }

  async findAll() {
    return await this.prismaCrudRepository.getCountries();
  }

  async findOne(id: number) {
    return await this.prismaCrudRepository.getCountryById(id);
  }

  update(id: number, updatePrismaDto: UpdatePrismaCrudDto) {
    return `This action updates a #${id} prisma {${JSON.stringify(updatePrismaDto)}}`;
  }

  remove(id: number) {
    return `This action removes a #${id} prisma`;
  }
}
