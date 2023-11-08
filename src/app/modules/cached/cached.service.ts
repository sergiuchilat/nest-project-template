import {Inject, Injectable} from '@nestjs/common';
import { Cache } from 'cache-manager';
import { CACHE_MANAGER } from '@nestjs/cache-manager';

interface Result {
    number: number;
    series: number[];
    cached: boolean;
}

@Injectable()
export class CachedService {

  private readonly fibonacciCacheTTL: number = 15 * 1000;

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

  async getFibonacci(n: number): Promise<Result>  {
    const cachedResult: Result = await this.cacheManager.get(`fibonacci-${n}`);

    if(cachedResult) {
      return {
        number: cachedResult.number,
        series: cachedResult.series,
        cached: true,
      };
    }
    
    const response: Result = {
      number: this.fibonacci(n),
      series: this.generateFibonacciSeries(n),
      cached: false
    };
    await this.cacheManager.set(`fibonacci-${n}`, response, this.fibonacciCacheTTL);

    return response;
  }
}
