import { AppDataSource } from "../../../database/data-source";
import { UserRepository } from "../../repositories/ProductsRepository";

class FilterProductService {
  public async execute(name: string) {
    const product = UserRepository.findByName(name);

    return product;
  }
}

export default FilterProductService;