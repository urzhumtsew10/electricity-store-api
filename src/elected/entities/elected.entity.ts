import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Elected {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column()
  productId: number;

  @Column()
  img: string;

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
}
