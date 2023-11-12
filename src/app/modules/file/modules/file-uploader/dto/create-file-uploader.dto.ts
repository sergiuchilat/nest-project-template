import {ApiProperty} from '@nestjs/swagger';

export class CreateFileUploaderDto {
    @ApiProperty()
      entity: string;
    @ApiProperty()
      filename: string;
}
