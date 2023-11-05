import {
  Controller,
  Post,
  Body,
} from '@nestjs/common';
import {
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';

import {UserActivityResponseDto} from "@/app/modules/user/modules/activity/dto/user-activity.response.dto";
import {UserActivityPayloadDto} from "@/app/modules/user/modules/activity/dto/user-activity.payload.dto";
import {EventEmitter2} from "@nestjs/event-emitter";

@ApiTags('User activity tracking')
@Controller('/user-activity')
//@UseFilters(AllExceptionsFilter)

export class UserActivityController {
  constructor(
      private eventEmitter: EventEmitter2
  ) {}

  @Post('')
  @ApiOperation({ summary: 'Track user activity' })
  @ApiOkResponse({
    description: 'User data',
    type: UserActivityResponseDto,
  })
  async trackActivity(@Body() userActivity: UserActivityPayloadDto) {
    this.eventEmitter.emit(userActivity.event, userActivity);
    return userActivity;
  }
}
