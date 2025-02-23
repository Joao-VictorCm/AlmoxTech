import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  Patch,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { timestamp } from 'rxjs';

@Catch(HttpException)
export class ApiExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();
    const errorResponse = exception.getResponse();

    response.status(status).json({
      statusCode: status,
      timestamp: new Date().toISOString(),
      message:
        errorResponse !== '' ? errorResponse : 'Erro ao realizar essa operação',
      patch: request.url,
    });
  }
}
