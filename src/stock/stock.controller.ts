import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { StockService } from './stock.service';

@Controller('stock')
export class StockController {
  constructor(private readonly stockService: StockService) {}
  @Get()
  getStock() {
    return this.stockService.listStock();
  }

  @Get(':id')
  onIten(@Param('id') id: string) {
    console.log(id);
    return this.stockService.findOneItem(id);
  }

  @Post('/create')
  createIten(@Body() body: any) {
    console.log(body);
    return this.stockService.create(body);
  }

  @Patch(':id')
  updateItem(@Param('id') id: string, @Body() body: any) {
    return this.stockService.update(id, body);
  }

  @Delete(':id')
  deleteItem(@Param('id') id: string) {
    return 'Rota para deletar o item';
  }
}
