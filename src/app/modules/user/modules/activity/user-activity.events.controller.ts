import { Controller, Logger } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { OnEvent } from '@nestjs/event-emitter';
import { EventsGateway } from '@/app/services/events-gateway/events.gateway';
import { UserActivityPayloadDto } from '@/app/modules/user/modules/activity/dto/user-activity.payload.dto';
import { UserEvent } from '@/app/modules/user/modules/activity/enum/user-event.enum';

@ApiTags('User activity Events Controller')
@Controller('/user-activity-events')
export class UserActivityEventsController {
  constructor(
        private readonly logger: Logger,
        private readonly eventsGateway: EventsGateway
  ) {}

    @OnEvent(UserEvent.MouseMove)
  mouseMove(userActivity: UserActivityPayloadDto) {
    this.eventsGateway.server.emit(UserEvent.MouseMove, userActivity.email);
    this.logger.log(
      'Socket event',
      {
        event: UserEvent.MouseMove,
        user: userActivity
      }
    );
  }

    @OnEvent(UserEvent.MouseClick)
    mouseClick(user: UserActivityPayloadDto) {
      this.eventsGateway.server.emit(UserEvent.MouseClick, user.email);
      this.logger.log(
        'Socket event',
        {
          event: UserEvent.MouseClick,
          user: user
        }
      );
    }

    @OnEvent(UserEvent.KeyPress)
    keyPress(user: UserActivityPayloadDto) {
      this.eventsGateway.server.emit(UserEvent.KeyPress, user.email);
      this.logger.log(
        'Socket event',
        {
          event: UserEvent.KeyPress,
          user: user
        }
      );
    }
}
