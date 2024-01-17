import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { blue, red } from 'chalk';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {

    // Filter the ApolloServer connections requests
    if (req.body.operationName !== 'IntrospectionQuery') {
      // Request logging
      console.log(blue(`${req.method} ${req.originalUrl}`));

      // Log headers
      console.log(blue('Headers:', req.headers));

      // Log request body
      console.log('Body:', req.body);

      // Log timestamp
      console.log('Timestamp:', new Date().toISOString());
      const { method, originalUrl } = req;

      const startAt = Date.now();
      res.on('finish', () => {
        const { statusCode } = res;
        const finishedAt = Date.now();

        const duration = finishedAt - startAt;
        console.log(red([`${method} ${originalUrl} ${statusCode} - ${duration}ms`]));
      });
      next();

      // Response logging
      console.log(`Status: ${res.statusCode}`);

      console.log('----------------------------------------------');
    }
  }
}
