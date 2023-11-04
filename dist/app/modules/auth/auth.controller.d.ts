import { AuthService } from './auth.service';
import { UserLoginDto } from './dto/user.login.dto';
import { UserLoginResponseDto } from './dto/user.login.response.dto';
import { UserRegisterDto } from './dto/user.register.dto';
import { UserRegisterResponseDto } from './dto/user.register.response.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(userLoginDto: UserLoginDto): Promise<UserLoginResponseDto>;
    registerUser(user: UserRegisterDto): Promise<UserRegisterResponseDto>;
}
