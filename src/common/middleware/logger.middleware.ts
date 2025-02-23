import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class LoggerMidlleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const authorization = req.headers.authorization;

    if (authorization) {
      if (authorization === '12345') {
        return next();
      }
      res.status(401).json({ message: 'Token Invalido' });
    }
    next();
  }
}
