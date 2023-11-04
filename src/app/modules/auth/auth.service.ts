import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { UserLoginResponseDto } from './dto/user-login.response.dto';
import { UserLoginPayloadDto } from './dto/user-login.payload.dto';
import { UserRegisterPayloadDto } from './dto/user-register.payload.dto';
import { UserRegisterResponseDto } from './dto/user-register.response.dto';
import { compare } from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async login(user: UserLoginPayloadDto): Promise<UserLoginResponseDto> {
    let validCredentials = false;
    let existingUser = null;
    try {
      existingUser = await this.userService.getOneByEmail(user.email);
      const passwordMatch = await compare(user.password, existingUser.password);

      if (existingUser && passwordMatch) {
        validCredentials = true;
      }
    } catch (e) {
      validCredentials = false;
    }
    if (existingUser && validCredentials) {
      return {
        token: this.jwtService.sign({
          props: {
            id: existingUser.id,
            email: existingUser.email,
            role: existingUser.role,
            name: existingUser.name,
          },

          sub: existingUser.id,
        }),
      };
    }
    throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
  }

  async registerUser(user: UserRegisterPayloadDto): Promise<UserRegisterResponseDto> {
    return await this.userService.createUser(user);
  }

  async parseUserFromToken(token: string): Promise<any> {
    try {
      return (await this.jwtService.decode(token)) as any;
    } catch (e) {
      return {};
    }
  }
}
