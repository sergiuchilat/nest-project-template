import { Request, Response } from 'express';
import { CountryService } from './country.service';
import { RegionService } from '../region/region.service';
import { LocationService } from '../location/location.service';
import { CountryCreateDto } from './dto/country.create.payload.dto';
import { SortOrder } from '../../../validators/typeorm.sort.validator';
import { CountrySort } from './validators/country.sort.validator';
export declare class CountryController {
    private readonly countryService;
    private readonly regionService;
    private readonly locationService;
    constructor(countryService: CountryService, regionService: RegionService, locationService: LocationService);
    getAllPaginated(page: number, limit: number, sort_order: SortOrder, sort_by: CountrySort, request: Request, response: Response): Promise<void>;
    getAllWithDeleted(page: number, limit: number, sort_order: SortOrder, sort_by: CountrySort, request: Request, response: Response): Promise<void>;
    getAllForDropdown(response: Response): Promise<void>;
    getOneById(id: number, response: Response): Promise<void>;
    create(createCountryDto: CountryCreateDto, request: Request, response: Response): Promise<void>;
    update(updateCountryDto: CountryCreateDto, id: number, request: Request, response: Response): Promise<void>;
    delete(id: number, request: Request, response: Response): Promise<void>;
    destroy(id: number, response: Response): Promise<void>;
    getOneByIdWithRegions(id: number, response: Response): Promise<void>;
    regions(id: number, Request: any, response: Response): Promise<void>;
    locations(id: number, response: Response): Promise<void>;
}
