import { Controller, Get, Param, Post } from '@nestjs/common';
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

  @Post()
  createIten() {
    return 'Rota de cadastro para itens';
  }
}
