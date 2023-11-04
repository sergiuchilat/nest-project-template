import { Controller, Logger } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { OnEvent } from "@nestjs/event-emitter";
import { AuthEvent } from "@/app/modules/auth/enum/auth.events.enum";
import { UserLoginPayloadDto } from "@/app/modules/auth/dto/user-login.payload.dto";
import { EventsGateway } from "@/app/modules/events-gateway/events.gateway";
import { UserPingPayloadDto } from "@/app/modules/auth/dto/user-ping.payload.dto";

@ApiTags("Auth Events Controller")
@Controller("/login")
export class AuthEventsController {
  constructor(
    private logger: Logger,
    private eventsGateway: EventsGateway
  ) {}

  @OnEvent(AuthEvent.UserLoggedIn)
  userLoggedIn(user: UserLoginPayloadDto) {
    this.eventsGateway.server.emit(AuthEvent.UserLoggedIn, user);
    this.logger.log(
        'Socket event',
        {
          event: AuthEvent.UserLoggedIn,
          user: user
        }
    )
  }

    @OnEvent(AuthEvent.UserActivity)
    userActivity(user: UserPingPayloadDto) {
        this.eventsGateway.server.emit(AuthEvent.UserActivity, user);
        this.logger.log(
            'Socket event',
            {
                event: AuthEvent.UserActivity,
                user: user
            }
        )
    }
}
