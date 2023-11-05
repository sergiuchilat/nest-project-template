import {Logger, Module} from '@nestjs/common';
import { UserService } from './modules/user/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '@/app/modules/user/modules/user/user.entity';
import { UserController } from '@/app/modules/user/modules/user/user.controller';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from '../../middleware/guards/roles.guard';
import { UserActivityController } from "@/app/modules/user/modules/activity/user-activity.controller";
import { UserActivityEventsController } from "@/app/modules/user/modules/activity/user-activity.events.controller";
import { EventsGateway } from "@/app/services/events-gateway/events.gateway";

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [
      UserService,
      EventsGateway,
      Logger,
      {
        provide: APP_GUARD,
        useClass: RolesGuard,
      },
  ],
  exports: [UserService],
  controllers: [UserController, UserActivityController, UserActivityEventsController],
})
export class UserModule {}
