import {ApiProperty} from '@nestjs/swagger';

export class FibonacciResultDto {
    @ApiProperty({ example: '5', description: 'Fibonacci number' })
      number: number;

    @ApiProperty({ example: '[0, 1, 1, 2, 3, 5, 8, ...]', description: 'Fibonacci series' })
      series: number[];

    @ApiProperty({ example: 'true', description: 'Indicate if the result is read from cache' })
      cached: boolean;
}