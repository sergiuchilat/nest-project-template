import { Request, Response } from 'express';
import { RegionService } from './region.service';
import { LocationService } from '../location/location.service';
export declare class RegionController {
    private readonly regionService;
    private readonly locationService;
    constructor(regionService: RegionService, locationService: LocationService);
    getAll(response: Response): Promise<void>;
    getOneById(request: Request, response: Response): Promise<void>;
    create(request: Request, response: Response): Promise<void>;
    update(request: Request, response: Response): Promise<void>;
    delete(request: Request, response: Response): Promise<void>;
    locations(request: Request, response: Response): Promise<void>;
}
