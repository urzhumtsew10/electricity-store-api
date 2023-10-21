import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  category: string;

  @Column()
  brand: string;

  @Column()
  description: string;

  @Column()
  color: string;

  @Column()
  price: number;

  @Column()
  img: string;
}
