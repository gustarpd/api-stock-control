import { isNumberObject } from "util/types";
import { AppDataSource } from "../../../database/data-source";
import { Product } from "../../entities/Product";
import {
  IProduct,
  ProductRepository,
} from "../../repositories/ProductsRepository";

class UpdatesProductService {
  public async updateProduct({
    id,
    name,
    price,
    sale_price,
    due_date,
    quantity
  }: IProduct) {

    const products = ProductRepository.findByid({
      id,
      name,
      price,
      sale_price,
      due_date,
      quantity
    })
    
    return { message: "Produto atualizado com sucesso!" };
  }
}

export default UpdatesProductService;
