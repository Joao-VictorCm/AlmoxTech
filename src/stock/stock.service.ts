import { Injectable } from '@nestjs/common';
import { Item } from './entities/item.entity';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';

@Injectable()
export class StockService {
  private item: Item[] = [
    {
      id: 1,
      description: 'Parafuso M12 por 30 mm',
      amount: 10,
      ctrlEst: false,
    },
  ];

  listStock() {
    return this.item;
  }

  findOneItem(id: number) {
    return this.item.find((item) => item.id === id);
  }

  create(createItemDto: CreateItemDto) {
    const newId = this.item.length + 1;

    const newItem = {
      id: newId,
      ...createItemDto,
    };

    this.item.push(newItem);

    return newItem;
  }

  update(id: number, updateItemDto: UpdateItemDto) {}
}
