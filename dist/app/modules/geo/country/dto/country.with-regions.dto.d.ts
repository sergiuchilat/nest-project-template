import { Region } from '../../region/region.entity';
export declare class CountryWithRegionsDto {
    id: number;
    name: string;
    code: string;
    regions: Region[];
}
