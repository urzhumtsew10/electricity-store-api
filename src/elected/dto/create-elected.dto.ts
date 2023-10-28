import { IsNotEmpty } from 'class-validator';

export class CreateElectedDto {
  @IsNotEmpty()
  userId: number;

  @IsNotEmpty()
  productId: number;

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
