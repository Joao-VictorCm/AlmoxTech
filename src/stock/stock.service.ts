import { Injectable } from '@nestjs/common';
import { Item } from './entities/item.entity';

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

  findOneItem(id: string) {
    return this.item.find((item) => item.id === Number(id));
  }

  create(body: any) {
    const newId = this.item.length + 1;

    const newItem = {
      id: newId,
      ...body,
    };

    this.item.push(newItem);

    return newItem;
  }

  update(id: string, body: any) {}
}
