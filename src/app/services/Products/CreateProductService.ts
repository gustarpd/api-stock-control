import { AppDataSource } from "../../../database/data-source";
import { Product } from "../../entities/Product";

interface IRequestData {
  name: string;
  quantity: number;
  price: number;
  sale_price: number;
  due_date: Date;
}

class createProductService {
  public async execute({
    name,
    price,
    due_date,
    quantity,
    sale_price,
  }: IRequestData): Promise<Product> {
    const ProductRepository = AppDataSource.getRepository(Product);
    const products = ProductRepository.create({
      name,
      price,
      sale_price,
      quantity,
      due_date,
    });

    await ProductRepository.save(products);

    return products;
  }
}

export default createProductService;
