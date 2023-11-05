import { Controller, Logger } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { OnEvent } from "@nestjs/event-emitter";
import { AuthEvent } from "@/app/modules/auth/enum/auth-event.enum";
import { UserLoginPayloadDto } from "@/app/modules/auth/dto/user-login.payload.dto";
import { EventsGateway } from "@/app/services/events-gateway/events.gateway";

@ApiTags("Auth Events Controller")
@Controller("/auth-events")
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
}
