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
import { APP_GUARD } from '@nestjs/core';
import { AuthAdminGuard } from 'src/common/guards/admin.guard';

@Module({
  imports: [StockModule],
  controllers: [AppController],
  providers: [
    AppService,
    // {
    //   provide: APP_GUARD,
    //   useClass: AuthAdminGuard,
    // },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMidlleware).forRoutes({
      path: '*',
      method: RequestMethod.DELETE,
    });
  }
}
