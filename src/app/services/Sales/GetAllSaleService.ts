
import { SaleRepository } from "../../repositories/SaleProductRepository";

interface IDate {
  start_date: string;
  end_date: string;
}

class GetAllSaleService {
  public async execute({ start_date, end_date }: IDate) {
    const salesFiltered = SaleRepository.findByName(start_date, end_date);

    return salesFiltered
  }
}

export default GetAllSaleService;
