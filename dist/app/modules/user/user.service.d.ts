import { Repository } from 'typeorm';
import { User } from './user.entity';
import { UserRegisterDto } from '../auth/dto/user.register.dto';
import { UserRegisterResponseDto } from '../auth/dto/user.register.response.dto';
import { UserItemDto } from './dto/user.item.dto';
import { UserUpdateDto } from './dto/user.update.dto';
import { UserUpdatePasswordDto } from './dto/user.update.password.dto';
export declare class UserService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    getAll(): Promise<UserItemDto[]>;
    getOneByEmail(email: string): Promise<User | undefined>;
    getOneById(id: number): Promise<User | undefined>;
    createUser(user: UserRegisterDto): Promise<UserRegisterResponseDto>;
    createAdmin(user: UserRegisterDto): Promise<UserRegisterResponseDto>;
    private create;
    update(id: number, newValue: User, user: any): Promise<UserUpdateDto> | undefined;
    updatePassword(id: number, newValue: UserUpdatePasswordDto, user: any): Promise<User> | undefined;
    updateOwnPassword(newValue: UserUpdatePasswordDto, user: any): Promise<User> | undefined;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
    private static detectRole;
    encodePassword(password: string): Promise<string>;
}
