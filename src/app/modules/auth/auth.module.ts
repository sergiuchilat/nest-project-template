import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { UserModule } from '../user/user.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import appConfig from '@/config/app-config';


@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule.register({
      secret: "1234",//appConfig.getInstance().getConfig().jwt.secret,
      signOptions: {
        expiresIn: 60 * Number(60 * 60 *24),//appConfig.getInstance().getConfig().jwt.expiresIn),
      },
    }),
  ],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
