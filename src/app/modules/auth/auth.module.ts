import {Logger, Module} from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { UserModule } from '../user/user.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import AppConfig from '@/config/app-config';
import { EventsGateway } from "@/app/modules/auth/events/events.gateway";
import { AuthEventsController } from "@/app/modules/auth/auth.events.controller";

@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule.register({
      secret: AppConfig.jwt.secret,
      signOptions: {
        expiresIn: 60 * Number(AppConfig.jwt.expiresIn),
      },
    }),
  ],
  providers: [
      AuthService,
      JwtStrategy,
      Logger,
      EventsGateway
  ],
  exports: [AuthService],
  controllers: [AuthController, AuthEventsController],
})
export class AuthModule {}
