import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { UserLoginResponseDto } from './dto/user.login.response.dto';
import { UserLoginDto } from './dto/user.login.dto';
import { UserRegisterDto } from './dto/user.register.dto';
import { UserRegisterResponseDto } from './dto/user.register.response.dto';
export declare class AuthService {
    private userService;
    private jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    login(user: UserLoginDto): Promise<UserLoginResponseDto>;
    registerUser(user: UserRegisterDto): Promise<UserRegisterResponseDto>;
    parseUserFromToken(token: string): Promise<any>;
}
