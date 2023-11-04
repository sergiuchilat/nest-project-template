import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { UserLoginPayloadDto } from './dto/user-login.payload.dto';
import { UserLoginResponseDto } from './dto/user-login.response.dto';
import { UserRegisterPayloadDto } from './dto/user-register.payload.dto';
import { UserRegisterResponseDto } from './dto/user-register.response.dto';
import { EventEmitter2 } from "@nestjs/event-emitter";
import {AuthEvent} from "@/app/modules/auth/enum/auth.events.enum";
import {UserPingResponseDto} from "@/app/modules/auth/dto/user-ping.response.dto";
import {UserPingPayloadDto} from "@/app/modules/auth/dto/user-ping.payload.dto";

@ApiTags('Authentication')
@Controller('/auth')
// @UseFilters(AllExceptionsFilter)
export class AuthController {
  constructor(
      private authService: AuthService,
      private eventEmitter: EventEmitter2
  ) {}

  @Post('login')
  @ApiOperation({ summary: 'User login' })
  @ApiOkResponse({
    description: 'Bearer token',
    type: UserLoginResponseDto,
  })
  async login(@Body() user: UserLoginPayloadDto) {
    const response  = this.authService.login(user);
    if(response){
      this.eventEmitter.emit(AuthEvent.UserLoggedIn, user.email);
    }
    return response;
  }

  @Post('ping')
  @ApiOperation({ summary: 'Track user activity' })
  @ApiOkResponse({
    description: 'User data',
    type: UserPingResponseDto,
  })
  async trackActivity(@Body() user: UserPingPayloadDto) {
    this.eventEmitter.emit(AuthEvent.UserActivity, user);
    return user;
  }

  @Post('register')
  @ApiOperation({ summary: 'User register' })
  @ApiOkResponse({
    description: 'Registered user',
    type: UserRegisterResponseDto,
  })
  async registerUser(@Body() user: UserRegisterPayloadDto) {
    return this.authService.registerUser(user);
  }
}
