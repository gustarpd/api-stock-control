import { ExitsRepository } from "../../repositories/ExitsExpansesRepository";
import { IDataExits } from "../../repositories/ExitsExpansesRepository";
import { AppDataSource } from "../../../database/data-source";
import { Product } from "../../entities/Product";
import { Exit } from "../../entities/Exits";


class GetExitExpanseService {
  public async execute(start_date: string, end_date: string){
    const product = ExitsRepository.findByDate(start_date, end_date);
    return product;
  }
}

export default GetExitExpanseService;