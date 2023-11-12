import {
  ConflictException, Inject,
  Injectable, Logger,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Country } from './country.entity';
import { CountryCreateDto } from './dto/country.create.payload.dto';
import { CountryItemDto } from './dto/country.item.dto';
import { plainToInstance } from 'class-transformer';
import { CountryWithRegionsDto } from './dto/country.with-regions.dto';
import { Region } from '@/app/modules/geo/region/region.entity';
import { CountryCreateResponseDto } from './dto/country.create.response.dto';
import {
  IPaginationOptions,
  paginate,
  Pagination,
} from 'nestjs-typeorm-paginate';
import { CountryItemDropdownDto } from './dto/country.item.dropdown.dto';
import { SortOrder } from '@/database/validators/typeorm.sort.validator';
import { CountrySort } from './validators/country.sort.validator';
import CountryFiltersBuilder from './builders/country.filters.builder';
import { filesConfig } from '@/app/modules/geo/country/interceptors/country-flag.storage.interceptor.config';
import { FileUploaderService } from '@/app/modules/file/modules/file-uploader/file-uploader.service';
import AppConfig from '@/config/app-config';
import {EventEmitter2, OnEvent} from '@nestjs/event-emitter';
import { Cache } from 'cache-manager';
import {CACHE_MANAGER} from '@nestjs/cache-manager';


@Injectable()
export class CountryService {
  constructor(
    @InjectRepository(Country)
    private readonly countryRepository: Repository<Country>,
    @InjectRepository(Region)
    private readonly regionRepository: Repository<Region>,
    private readonly eventEmitter: EventEmitter2,
    @Inject(CACHE_MANAGER) private readonly cacheManager: Cache,
  ) {}

  async getAllForDropdown(): Promise<CountryItemDropdownDto[]> {
    try {
      return plainToInstance(
        CountryItemDropdownDto,
        await this.countryRepository.find(),
      );
    } catch (e) {
      throw new NotFoundException();
    }
  }

  async getAllPaginated(
    options: IPaginationOptions,
    sort_order: SortOrder,
    sort_by: CountrySort,
    filters: any,
  ): Promise<Pagination<Country>> {
    const cacheKey = `countries-paginated-${JSON.stringify(options)}-${sort_order}-${sort_by}-${JSON.stringify(filters)}`;
    const cachedData: any = await this.cacheManager.get(cacheKey);
    console.log('HERE');
    if(cachedData){
      console.log('cached data');
      return cachedData;
    }
    const filtersBuilder = new CountryFiltersBuilder(filters);
    try {
      const queryBuilder = this.countryRepository
        .createQueryBuilder('countries')
        .where(filtersBuilder.get())
        .orderBy(sort_by, sort_order)
        .skip(Number(options.page) * Number(options.limit))
        .take(Number(options.limit))
      ;
      Logger.log(queryBuilder.getSql());
      const response = await paginate<Country>(queryBuilder, options);
      await this.cacheManager.set(cacheKey, response, 10 * 1000);
      console.log('from database');
      return response;
    } catch (e) {
      throw new NotFoundException();
    }
  }

  async getAllWithDeleted(
    options: IPaginationOptions,
    sort_order: SortOrder,
    sort_by: CountrySort,
    filters: any,
  ): Promise<Pagination<Country>> {
    const filtersBuilder = new CountryFiltersBuilder(filters);
    try {
      const queryBuilder = this.countryRepository
        .createQueryBuilder('countries')
        .withDeleted()
        .where(filtersBuilder.get())
        .orderBy(sort_by, sort_order);
      return paginate<Country>(queryBuilder, options);
    } catch (e) {
      throw new NotFoundException();
    }
  }

  async getOneById(id: number): Promise<CountryItemDto> | undefined {
    try {
      return plainToInstance(
        CountryItemDto,
        await this.countryRepository.findOneOrFail({
          where: {
            id,
          },
        }),
      );
    } catch (e) {
      throw new NotFoundException();
    }
  }

  async create(
    country: CountryCreateDto,
    user: any,
  ): Promise<CountryCreateResponseDto> | undefined {
    const countryEntity = plainToInstance(Country, country);

    const existingCountry = await this.countryRepository.findOne({
      where: [{ name: countryEntity.name }, { code: countryEntity.code }],
    });

    if (existingCountry) {
      throw new ConflictException();
    }
    countryEntity.createdBy = user.props.id;
    countryEntity.updatedBy = user.props.id;

    return await this.countryRepository.save(countryEntity);
  }

  async update(
    id: number,
    newValue: CountryCreateDto,
    user: any,
  ): Promise<CountryItemDto> | undefined {
    const countryEntity = plainToInstance(Country, newValue);
    countryEntity.updatedBy = user.props.id;
    await this.countryRepository.update(id, countryEntity);
    return this.getOneById(id);
  }

  async deleteSoft(id: number, user: any) {
    const country = await this.getOneById(id);
    if (!country) {
      throw new NotFoundException();
    }
    await this.countryRepository.update(id, {
      deletedBy: user.props.id,
    });
    return await this.countryRepository.softDelete(id);
  }

  async delete(id: number) {
    await this.countryRepository.update(id, {
      deletedBy: null,
      deletedAt: null,
    });
    const country = await this.getOneById(id);
    if (!country) {
      throw new NotFoundException();
    }
    await this.countryRepository.update(id, {
      deletedBy: null,
      deletedAt: null,
    });
    this.eventEmitter.emit('country.deleted', country);

    return await this.countryRepository.delete(id);
  }

  @OnEvent('country.deleted', { async: true })
  async handleCountryDeletedEvent(country: CountryItemDto) {
    await this.removeFlag(country.id);
  }

  async getOneByIdWithRegions(
    id: number,
  ): Promise<CountryWithRegionsDto> | undefined {
    try {
      const country = plainToInstance(
        CountryWithRegionsDto,
        await this.countryRepository.findOneOrFail({
          where: {
            id,
          },
        }),
      );
      country.regions = await this.regionRepository.find({
        where: {
          countryId: id,
        },
      });
      return country;
    } catch (e) {
      throw new NotFoundException();
    }
  }

  async truncate(){
    await this.countryRepository.query('TRUNCATE TABLE countries RESTART IDENTITY CASCADE');
  }

  async uploadFlag(id: number, file: any){
    const country = await this.getOneById(id);
    if (!country) {
      throw new NotFoundException();
    }
    const flagFileName = `${AppConfig.files.uploadDirectory}/${filesConfig.folder}/${country.code}.png`;
    await FileUploaderService.moveUploadedFile(file.path, flagFileName);
    return {
      entity: 'country',
      id: id,
      file: flagFileName
    };
  }

  async removeFlag(id: number){
    const country = await this.getOneById(id);
    const flagFileName = `${AppConfig.files.uploadDirectory}/${filesConfig.folder}/${country.code}.png`;
    await FileUploaderService.deleteFile(flagFileName);
    return {
      entity: 'country',
      id: country.id,
      file: flagFileName
    };
  }
}
