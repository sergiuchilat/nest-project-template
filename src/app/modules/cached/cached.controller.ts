import {Controller, Get, Param, ParseIntPipe, UseInterceptors } from '@nestjs/common';
import { CachedService } from './cached.service';
import {FibonacciResultDto} from '@/app/modules/cached/dto/fibonacci.result.dto';
import {ApiTags} from '@nestjs/swagger';
import {CacheInterceptor} from '@nestjs/cache-manager';

@Controller('cached')
@ApiTags('Cached')
export class CachedController {
  constructor(private readonly cachedService: CachedService) {}

  @Get('fibonacci/:number')
  @UseInterceptors(CacheInterceptor)
  getFibonacci(
      @Param('number', ParseIntPipe) number: number,
  ): Promise<FibonacciResultDto>{
    return this.cachedService.getFibonacci(number);
  }

  @Get('fibonacci/:number/redis')
  @UseInterceptors(CacheInterceptor)
  getFibonacciRedis(
      @Param('number', ParseIntPipe) number: number,
  ): Promise<FibonacciResultDto>{
    return this.cachedService.getFibonacciRedis(number);
  }
}
