import { AppDataSource } from "../../../database/data-source";
import { Sale } from "../../entities/Sales";

export interface IProductList {
  id: string;
  name: string;
  quantity: number;
  price: number;
  date: Date;
}

class SoldPoductService {
  public async execute(productList: IProductList[]) {
    const ProductRepository = AppDataSource.getRepository(Sale);
    const maps = productList.map((product: IProductList) => {
      return ProductRepository.create({
        name: product.name,
        price: product.price,
        quantity: product.quantity,
        date: new Date(),
      });
    });

    await ProductRepository.save(maps);

    return maps;
  }
}

export default SoldPoductService;
