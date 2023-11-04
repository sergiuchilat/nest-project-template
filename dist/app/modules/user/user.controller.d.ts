import { AdminRegisterDto } from './dto/admin.register.dto';
import { UserRegisterResponseDto } from '../auth/dto/user.register.response.dto';
import { UserService } from './user.service';
import { Request, Response } from 'express';
import { UserUpdateDto } from './dto/user.update.dto';
import { UserUpdatePasswordDto } from './dto/user.update.password.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getAll(response: Response): Promise<void>;
    updateOwnPassword(value: UserUpdatePasswordDto, request: Request, response: Response): Promise<void>;
    getOneById(id: number, response: Response): Promise<void>;
    registerUser(user: AdminRegisterDto): Promise<UserRegisterResponseDto>;
    update(updateUserDto: UserUpdateDto, id: number, request: Request, response: Response): Promise<void>;
    delete(id: number, response: Response): Promise<void>;
    updatePassword(value: UserUpdatePasswordDto, id: number, request: Request, response: Response): Promise<void>;
}
