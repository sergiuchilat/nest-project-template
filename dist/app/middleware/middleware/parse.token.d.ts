import { NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { AuthService } from '../../modules/auth/auth.service';
import { Reflector } from '@nestjs/core';
export declare class ParseToken implements NestMiddleware {
    private reflector;
    private authService;
    constructor(reflector: Reflector, authService: AuthService);
    private static parseAuthToken;
    use(request: Request, response: Response, next: NextFunction): Promise<void>;
}
