import { Repository } from 'typeorm';
import { Location } from './location.entity';
import { Region } from '../region/region.entity';
export declare class LocationService {
    private locationRepository;
    private regionRepository;
    constructor(locationRepository: Repository<Location>, regionRepository: Repository<Region>);
    getAll(): Promise<Location[]>;
    getOneById(id: number): Promise<Location> | undefined;
    create(Location: Location): Promise<Location> | undefined;
    update(id: number, newValue: Location): Promise<Location> | undefined;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
    getForRegion(regionId: number): Promise<Location[]> | undefined;
    getForCountry(countryId: number): Promise<Location[]>;
}
