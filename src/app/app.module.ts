import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StockModule } from 'src/stock/stock.module';
import { LoggerMidlleware } from 'src/common/middleware/logger.middleware';

@Module({
  imports: [StockModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMidlleware).forRoutes({
      path: '*',
      method: RequestMethod.DELETE,
    });
  }
}
