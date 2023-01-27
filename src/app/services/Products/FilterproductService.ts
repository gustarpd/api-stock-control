import { AppDataSource } from "../../../database/data-source";
import { ProductRepository } from "../../repositories/ProductsRepository";

class FilterProductService {
  public async execute(name: string) {
    const product = ProductRepository.findByName(name);
    
    if(!product) {
      throw new Error("Product not found");
    }

    return product;
  }
}

export default FilterProductService;