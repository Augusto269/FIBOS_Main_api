import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class LogMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log('process.env.NODE_ENV', process.env.NODE_ENV);
    if (process.env.NODE_ENV === 'test') return next();
    if (process.env.NODE_ENV === 'production') return next();
    if (process.env.NODE_ENV === 'development') {
      console.log('Request...');
      console.log('req.method', req.method);
      console.log('req.url', req.url);
      console.log('req.body', req.body);
      console.log('req.headers', req.headers);
      console.log('req.params', req.params);
      return next();
    }
  }
}
