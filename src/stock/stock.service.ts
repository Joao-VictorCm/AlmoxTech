import { Injectable } from '@nestjs/common';

@Injectable()
export class StockService {
  listStock() {
    return [
      {
        id: 1,
        description: 'Parafuso M12 por 30 mm',
        quantidade: 10,
        ctrlEst: false,
      },
    ];
  }

  findOneItem(id: string) {
    return 'Item teste' + id;
  }
}
