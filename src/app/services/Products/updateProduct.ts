import { isNumberObject } from "util/types";
import { AppDataSource } from "../../../database/data-source";
import { Product } from "../../entities/Product";
import {
  IProduct,
  ProductRepository,
} from "../../repositories/ProductsRepository";

class updatesProductService {
  public async updateProduct({
    id,
    name,
    price,
    sale_price,
    due_date,
  }: IProduct) {
    const ProductRepositorI = AppDataSource.getRepository(Product);
    const products = ProductRepository.findByid({
      id,
      name,
      price,
      sale_price,
      due_date,
    })
    
    return { message: "Produto atualizado com sucesso!" };
  }
}

export default updatesProductService;
