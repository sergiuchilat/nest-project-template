import {Inject, Injectable} from '@nestjs/common';
import { Cache } from 'cache-manager';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import {FibonacciResultDto} from '@/app/modules/cached/dto/fibonacci.result.dto';

@Injectable()
export class CachedService {

  constructor(
      @Inject(CACHE_MANAGER) private readonly cacheManager: Cache,
  ) {
  }
  private fibonacci(n: number): number {
    if (n <= 1) {
      return n;
    }
    return this.fibonacci(n - 1) + this.fibonacci(n - 2);
  }

  private generateFibonacciSeries(n: number): number[] {
    const fibonacciSeries: number[] = [0, 1];
    for(let i = 2; i <= n; i++) {
      fibonacciSeries.push(fibonacciSeries[i]);
      fibonacciSeries[i] = fibonacciSeries[i - 2] + fibonacciSeries[i - 1];
    }
    return fibonacciSeries;
  }

  async getFibonacci(n: number): Promise<FibonacciResultDto>  {
    const cachedResult: FibonacciResultDto = await this.cacheManager.get(`fibonacci-${n}`);

    if(cachedResult) {
      return {
        number: cachedResult.number,
        series: cachedResult.series,
        cached: true,
      };
    }
    
    const response: FibonacciResultDto = {
      number: this.fibonacci(n),
      series: this.generateFibonacciSeries(n),
      cached: false
    };
    await this.cacheManager.set(`fibonacci-${n}`, response, {
      ttl: 5
    } as any);

    return response;
  }

  async getFibonacciRedis(n: number): Promise<FibonacciResultDto>  {
    const response: FibonacciResultDto = {
      number: this.fibonacci(n),
      series: this.generateFibonacciSeries(n),
      cached: false
    };

    return response;
  }
}
