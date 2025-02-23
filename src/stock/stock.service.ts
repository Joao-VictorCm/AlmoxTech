import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Item } from './entities/item.entity';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { PaginationDto } from 'src/common/dto/pagination.dto';

@Injectable()
export class StockService {
  constructor(private prisma: PrismaService) {}

  async listStock(paginationDto?: PaginationDto) {
    const { limit = 10, offset = 0 } = paginationDto || {};

    const allItens = await this.prisma.item.findMany({
      take: limit,
      skip: offset,
      orderBy: {
        createIt: 'desc',
      },
    });

    return allItens;
  }

  async findOneItem(id: number) {
    const item = await this.prisma.item.findFirst({
      where: {
        id: id,
      },
    });

    if (item?.description) return item;

    throw new HttpException('Item não encontrado', HttpStatus.NOT_FOUND);
  }

  async create(createItemDto: CreateItemDto) {
    const newItem = await this.prisma.item.create({
      data: {
        description: createItemDto.description,
        amount: createItemDto.amount,
        ctrlEst: createItemDto.ctrlEst,
      },
    });

    return newItem;
  }

  async update(id: number, updateItemDto: UpdateItemDto) {
    try {
      const findItem = await this.prisma.item.findFirst({
        where: {
          id: id,
        },
      });

      if (!findItem) {
        //se não encontrar
        throw new HttpException('Item não encontrado', HttpStatus.NOT_FOUND);
      }

      const item = await this.prisma.item.update({
        where: {
          id: findItem.id,
        },
        data: updateItemDto,
      });

      return item;
    } catch (err) {
      throw new HttpException(
        'Falha ao atualizar o item.',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async delete(id: number) {
    try {
      const findItem = await this.prisma.item.findFirst({
        where: {
          id: id,
        },
      });

      if (!findItem) {
        //se não encontrar
        throw new HttpException('Item não encontrado', HttpStatus.NOT_FOUND);
      }

      await this.prisma.item.delete({
        where: {
          id: findItem.id,
        },
      });

      return {
        message: 'Item deletado com sucesso',
      };
    } catch (err) {
      throw new HttpException(
        'Falha ao deletar o item.',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
