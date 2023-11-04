import { Repository } from 'typeorm';
import { Country } from './country.entity';
import { CountryCreateDto } from './dto/country.create.payload.dto';
import { CountryItemDto } from './dto/country.item.dto';
import { CountryWithRegionsDto } from './dto/country.with-regions.dto';
import { Region } from '../region/region.entity';
import { CountryCreateResponseDto } from './dto/country.create.response.dto';
import { IPaginationOptions, Pagination } from 'nestjs-typeorm-paginate';
import { CountryItemDropdownDto } from './dto/country.item.dropdown.dto';
import { SortOrder } from '../../../validators/typeorm.sort.validator';
import { CountrySort } from './validators/country.sort.validator';
export declare class CountryService {
    private countryRepository;
    private regionRepository;
    constructor(countryRepository: Repository<Country>, regionRepository: Repository<Region>);
    getAllForDropdown(): Promise<CountryItemDropdownDto[]>;
    getAllPaginated(options: IPaginationOptions, sort_order: SortOrder, sort_by: CountrySort, filters: any): Promise<Pagination<Country>>;
    getAllWithDeleted(options: IPaginationOptions, sort_order: SortOrder, sort_by: CountrySort, filters: any): Promise<Pagination<Country>>;
    getOneById(id: number): Promise<CountryItemDto> | undefined;
    create(country: CountryCreateDto, user: any): Promise<CountryCreateResponseDto> | undefined;
    update(id: number, newValue: CountryCreateDto, user: any): Promise<CountryItemDto> | undefined;
    deleteSoft(id: number, user: any): Promise<import("typeorm").UpdateResult>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
    getOneByIdWithRegions(id: number): Promise<CountryWithRegionsDto> | undefined;
}
