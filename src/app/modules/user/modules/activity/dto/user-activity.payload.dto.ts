import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, Length } from 'class-validator';
import { UserEvent } from '@/app/modules/user/modules/activity/enum/user-event.enum';

export class UserActivityPayloadDto {
  @ApiProperty({ example: 'mail@mail.com', description: 'Username' })
  @Length(10, 50, {
    message: 'Email must contain [$constraint1, $constraint2] characters',
  })
    email: string;

  @ApiProperty({ example: 'MouseMove', description: 'User event' })
  @IsEnum(UserEvent, {
    message: 'User event must be one of [MouseMove|MouseClick|KeyPress]'
  })

    event: string;
}
