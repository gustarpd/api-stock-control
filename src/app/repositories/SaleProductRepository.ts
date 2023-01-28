import { AppDataSource } from "../../database/data-source";
import { Sale } from "../entities/Sales";

export const SaleRepository = AppDataSource.getRepository(Sale).extend({
  findByName(start_date: string, end_date: string) {
    return this.createQueryBuilder("sale")
    .where("sale.date > :start_date", { start_date })
    .andWhere("sale.date < :end_date", { end_date })
    .getMany()
  },
});
