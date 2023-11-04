import { Repository } from 'typeorm';
import { Region } from './region.entity';
export declare class RegionService {
    private regionRepository;
    constructor(regionRepository: Repository<Region>);
    getAll(): Promise<Region[]>;
    getOneById(id: number): Promise<Region> | undefined;
    create(Region: Region): Promise<Region> | undefined;
    update(id: number, newValue: Region): Promise<Region> | undefined;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
    getForCountry(countryId: number): Promise<Region[]> | undefined;
}
