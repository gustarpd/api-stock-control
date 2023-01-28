import { ExitsRepository } from "../../repositories/ExitsExpansesRepository";
import { IDataExits } from "../../repositories/ExitsExpansesRepository";
import { AppDataSource } from "../../../database/data-source";
import { Product } from "../../entities/Product";
import { Exit } from "../../entities/Exits";


class ExitProductService {
  public async execute({ description, price, date }: IDataExits){
    const ProductRepository = AppDataSource.getRepository(Exit);
    const product = ProductRepository.create({ description, price, date });
    
    await ProductRepository.save(product);
    return product;
  }
}

export default ExitProductService;