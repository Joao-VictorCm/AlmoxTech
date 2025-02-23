import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
  Query,
  UseInterceptors,
} from '@nestjs/common';
import { StockService } from './stock.service';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { LoggerInterceptor } from 'src/common/interceptors/logger.interceptor';
import { AddHeaderInterceptor } from 'src/common/interceptors/add-header.interceptor';

@Controller('stock')
export class StockController {
  constructor(private readonly stockService: StockService) {}
  @Get()
  @UseInterceptors(LoggerInterceptor)
  @UseInterceptors(AddHeaderInterceptor)
  getStock(@Query() paginationDto: PaginationDto) {
    return this.stockService.listStock(paginationDto);
  }

  @Get(':id')
  onIten(@Param('id', ParseIntPipe) id: number) {
    console.log(id);
    return this.stockService.findOneItem(id);
  }

  @Post('/create')
  createIten(@Body() createItemDto: CreateItemDto) {
    return this.stockService.create(createItemDto);
  }

  @Patch(':id')
  updateItem(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateItemDto: UpdateItemDto,
  ) {
    return this.stockService.update(id, updateItemDto);
  }

  @Delete(':id')
  deleteItem(@Param('id', ParseIntPipe) id: number) {
    return this.stockService.delete(id);
  }
}
