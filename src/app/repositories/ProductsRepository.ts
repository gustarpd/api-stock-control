import { Entity, EntityRepository, Repository } from "typeorm";
import { AppDataSource } from "../../database/data-source";
import { Product } from "../entities/Product";

export const UserRepository = AppDataSource.getRepository(Product).extend({
  findByName(name: string) {
    return this.createQueryBuilder("product",)
      .where("product.name like :name", { name: `%${name}%` })
      .getMany();
  },

  findById(id: number) {
    return this.createQueryBuilder("product",)
    .update("product")
    .where("product.id = :id", { id })
  }
});
