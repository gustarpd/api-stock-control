import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("products")
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column("float")
  price: string;

  @Column("float")
  saleprice: number;

  @Column()
  date: number;
}
