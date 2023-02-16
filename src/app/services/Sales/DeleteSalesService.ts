
import { SaleRepository } from "../../repositories/SaleProductRepository";

class DeleteSaleService {
  public async execute(id: string) {
    const repositorie = SaleRepository.deleteById(id)

    return repositorie
  }
}

export default DeleteSaleService;
