import { getRepository } from "typeorm";
import { AppDataSource } from "../../database/data-source";
import { Product } from "../entities/Product";

export interface IProduct {
  id: string;
  name: string;
  price: number;
  sale_price: number;
  due_date: string;
  quantity: number;
}

export const ProductRepository = AppDataSource.getRepository(Product).extend({
  findByName(name: string) {
   return this.createQueryBuilder("product")
    .where("product.name like :name", { name: `%${name}%` })
    .getMany();
  },
  findByid({ id, name, price, sale_price, due_date }: IProduct) {
    this.createQueryBuilder("product")
    .update()
    .where("id = :id", { id: id })
    .set({
        name,
        price,
        sale_price,
        due_date,
      })
    .execute();
  },

  findOne(id: string) {
    this.createQueryBuilder("product")
      .delete()
      .from(Product)
      .where("id = :id", { id: id })
      .execute();
  },
});
