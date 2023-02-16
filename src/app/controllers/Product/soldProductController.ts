import { Request, Response } from "express";
import SoldPoductService from "../../services/Sales/SoldProductService";

export class SoldProductController {
  public async handle(request: Request, response: Response) {
    const { data } = request.body;

    const soldProduct = new SoldPoductService();
    const ProductService = await soldProduct.execute(data);

    return response.json(ProductService);
  }
}
