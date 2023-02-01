import { AppDataSource } from "../../database/data-source";
import { Exit } from "../entities/Exits";

export interface IDataExits {
  id?: number;
  description: string;
  price: number;
  date: Date;
}

export const ExitsRepository = AppDataSource.getRepository(Exit).extend({
  findByid({ id, description, price, date }: IDataExits) {
    return this.createQueryBuilder("exit")
      .update()
      .where("id = :id", { id: id })
      .set({
        description,
        price,
        date,
      })
      .execute();
  },

  deleteById(id: string) {
    return this.createQueryBuilder("exit")
      .delete()
      .where("id = :id", { id })
      .execute();
  },

  findByDate(start_date: string, end_date: string) {
    return this.createQueryBuilder("exit")
      .where("exit.date > :start_date", { start_date })
      .andWhere("exit.date < :end_date", { end_date })
      .getMany();
  },
});
