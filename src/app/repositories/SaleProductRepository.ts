import { AppDataSource } from "../../database/data-source";
import { Product } from "../entities/Product";
import { Sale } from "../entities/Sales";
import { IProductList } from "../services/Products/soldProductService";

export interface IProduct {
  id: number;
  name: string;
  price: number;
  sale_price: number;
  due_date: string;
}

export const ProductRepository = AppDataSource.getRepository(Sale).extend({
   async createSale(data: IProductList) {
     
   }
});
