import { ApiProperty } from '@nestjs/swagger';
import { Length } from 'class-validator';

export class UserLoginPayloadDto {
  @ApiProperty({ example: 'mail@mail.com', description: 'Username' })
  @Length(10, 50, {
    message: 'Email must contain [$constraint1, $constraint2] characters',
  })
    email: string;

  @ApiProperty({ example: 'password', description: 'Password' })
  @Length(8, 50, {
    message: 'Name must contain [$constraint1, $constraint2] characters',
  })
    password: string;
}
