import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { Exclude, Expose } from 'class-transformer';
@Exclude()
export class UserPingResponseDto {
  @ApiProperty({
    example: 'root@domain.com',
    description: 'User email',
  })
  @Expose()
  @IsString()
  email: string;
}
