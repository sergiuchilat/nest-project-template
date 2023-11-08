import {Controller, Get, Param, ParseIntPipe} from '@nestjs/common';
import { CachedService } from './cached.service';
import {FibonacciResultDto} from '@/app/modules/cached/dto/fibonacci.result.dto';
import {ApiTags} from '@nestjs/swagger';

@Controller('cached')
@ApiTags('Cached')
export class CachedController {
  constructor(private readonly cachedService: CachedService) {}

  @Get('fibonacci/:number')
  getFibonacci(
      @Param('number', ParseIntPipe) number: number,
  ): Promise<FibonacciResultDto>{
    return this.cachedService.getFibonacci(number);
  }
}
