import {Injectable, NestInterceptor, ExecutionContext, CallHandler, Logger} from '@nestjs/common';
import { Observable} from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class RequestLoggingConsoleInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const logs = {
      'URL': context.switchToHttp().getRequest().url,
      'Method': context.switchToHttp().getRequest().method,
      'Headers': context.switchToHttp().getRequest().headers,
      'Body': context.switchToHttp().getRequest().body,
      'Query': context.switchToHttp().getRequest().query,
      'Params': context.switchToHttp().getRequest().params,
      'User': context.switchToHttp().getRequest().user,
    };

    Logger.log('Request start...');
    Logger.log(logs, context.getClass().name);

    const now = Date.now();

    return next
      .handle()
      .pipe(
        tap(() => Logger.log(`Request end... ${Date.now() - now}ms`)),
      );
  }
}