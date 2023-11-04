import { Region } from '../region/region.entity';
export declare class Location {
    id: number;
    name: string;
    code: string;
    regionId: number;
    createdAt: Date;
    updatedAt: Date;
    region: Region;
}
