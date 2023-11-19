import {IsNumber, IsString} from 'class-validator';

export class CreatePersonDto {
    @IsString()
      name: string;

    @IsNumber()
      age: number;

    @IsString()
      email: string;
}
