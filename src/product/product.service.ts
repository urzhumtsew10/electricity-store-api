import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  async create(productDto: CreateProductDto) {
    const newProduct = {
      img: productDto.img,
      category: productDto.category,
      brand: productDto.brand,
      description: productDto.description,
      color: productDto.color,
      price: productDto.price,
    };
    return await this.productRepository.save(newProduct);
  }

  async findAll() {
    return await this.productRepository.find();
  }

  async findOne(id: number) {
    return await this.productRepository.findOneBy({ id: id });
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  async remove(id: number) {
    const products = await this.findAll();
    const currentProduct = products.filter((product) => product.id === id)[0];
    return this.productRepository.remove(currentProduct);
  }
}
