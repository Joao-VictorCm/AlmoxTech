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
} from '@nestjs/common';
import { StockService } from './stock.service';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';

@Controller('stock')
export class StockController {
  constructor(private readonly stockService: StockService) {}
  @Get()
  getStock() {
    return this.stockService.listStock();
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
