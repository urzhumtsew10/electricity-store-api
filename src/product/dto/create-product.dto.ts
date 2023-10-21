import { IsNotEmpty } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  img: string;

  @IsNotEmpty()
  category: string;

  @IsNotEmpty()
  brand: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  color: string;

  @IsNotEmpty()
  price: number;
}
