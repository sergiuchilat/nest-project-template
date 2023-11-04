import { Region } from '../region/region.entity';
export declare class Country {
    id: number;
    name: string;
    code: string;
    createdBy: number;
    updatedBy: number;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
    deletedBy: number;
    regions: Region[];
    beforeInsert(): void;
    beforeUpdate(): void;
    beforeSoftRemove(): void;
}
