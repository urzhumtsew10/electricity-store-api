import { Injectable } from '@nestjs/common';
import { CreateElectedDto } from './dto/create-elected.dto';
import { UpdateElectedDto } from './dto/update-elected.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Elected } from './entities/elected.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ElectedService {
  constructor(
    @InjectRepository(Elected)
    private readonly electedRepository: Repository<Elected>,
  ) {}

  async create(electedDto: CreateElectedDto) {
    const newElectedProduct = {
      productId: electedDto.productId,
      userId: electedDto.userId,
      img: electedDto.img,
      category: electedDto.category,
      brand: electedDto.brand,
      description: electedDto.description,
      color: electedDto.color,
      price: electedDto.price,
    };
    return await this.electedRepository.save(newElectedProduct);
  }

  async findAll() {
    return await this.electedRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} elected`;
  }

  update(id: number, updateElectedDto: UpdateElectedDto) {
    return `This action updates a #${id} elected`;
  }

  async remove(id: number) {
    const electedProducts = await this.findAll();
    const deleteElectedProduct = electedProducts.filter(
      (product) => product.productId === id,
    )[0];
    return this.electedRepository.remove(deleteElectedProduct);
  }
}
