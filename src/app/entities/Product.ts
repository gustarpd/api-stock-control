import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("products")
export class Product {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("varchar")
  name: string;

  @Column("float")
  price: number;
  
  @Column("int")
  quantity: number;

  @Column("float")
  sale_price: number;

  @Column("date")
  due_date: Date;
}
