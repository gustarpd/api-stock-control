import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("sale")
export class Sale {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("varchar")
  name: string;

  @Column("float")
  price: number;

  @Column("int")
  quantity: number;
}
