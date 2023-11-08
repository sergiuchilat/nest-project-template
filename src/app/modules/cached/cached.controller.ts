import {Controller, Get, Param, ParseIntPipe} from '@nestjs/common';
import { CachedService } from './cached.service';

@Controller('cached')
export class CachedController {
  constructor(private readonly cachedService: CachedService) {}

  @Get('fibonacci/:number')
  getFibonacci(
      @Param('number', ParseIntPipe) number: number,
  ){
    return this.cachedService.getFibonacci(number);
  }
}
