import { Request, Response } from 'express';
import { LocationService } from './location.service';
export declare class LocationController {
    private readonly locationService;
    constructor(locationService: LocationService);
    getAll(response: Response): Promise<void>;
    getOneById(request: Request, response: Response): Promise<void>;
    create(request: Request, response: Response): Promise<void>;
    update(request: Request, response: Response): Promise<void>;
    delete(request: Request, response: Response): Promise<void>;
}
