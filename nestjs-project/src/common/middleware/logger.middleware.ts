import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { cyan, underline, yellow } from 'chalk';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {

    // Filter the ApolloServer connections requests
    if (req.body.operationName !== 'IntrospectionQuery') {

      // Request logging
      console.log(cyan(`${req.method} ${req.originalUrl}`));

      // Log headers
      console.log(cyan('Headers:', req.headers));

      // Log request body
      console.log(cyan('Body:', req.body));

      // Log timestamp
      console.log('Timestamp:', new Date().toISOString());
      const { method, originalUrl } = req;

      const startAt = Date.now();
      res.on('finish', () => {
        const { statusCode } = res;
        const finishedAt = Date.now();

        const duration = finishedAt - startAt;
        console.log(yellow([`${method} ${originalUrl} ${statusCode} - ${duration}ms`]));
      });
      next();

      // Response logging
      console.log(underline.green(`Status: ${res.statusCode}`));

      console.log('----------------------------------------------');
    }
    else { next() }
  }
}
