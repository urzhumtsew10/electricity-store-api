import { IsNotEmpty } from 'class-validator';

export class CreateCategoryDto {
  @IsNotEmpty()
  img: string;

  @IsNotEmpty()
  title: string;
}
