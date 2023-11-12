import {Injectable} from '@nestjs/common';
import {PrismaRepositoryBase} from '@/app/services/database/prisma-repository-base.service';

@Injectable()
export class PrismaCrudRepository extends PrismaRepositoryBase{

  async getCountries() {
    return await this.db.countries.findMany();
  }

  async getCountryById(id: number) {
    return await this.db.countries.findFirst({
      where: {
        id: id
      }
    });
  }
}