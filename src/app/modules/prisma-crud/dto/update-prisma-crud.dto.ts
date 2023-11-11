import { PartialType } from '@nestjs/swagger';
import { CreatePrismaCrudDto } from './create-prisma-crud.dto';

export class UpdatePrismaCrudDto extends PartialType(CreatePrismaCrudDto) {}
