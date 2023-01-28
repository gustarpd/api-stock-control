import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("exit")
export class Exit {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column("varchar")
  description: string;

  @Column("float")
  price: number;
  
  @Column("date")
  date: Date;
}
