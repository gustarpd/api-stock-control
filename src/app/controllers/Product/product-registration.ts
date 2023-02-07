import { Request, Response } from "express";
import createProductService from "../../services/Products/CreateProductService";

export class ProductRegistrationController {
  async handle(request: Request, response: Response) {
    const { name, price, sale_price, due_date, quantity } = request.body;

    const createProduct = new createProductService();

    const product = await createProduct.execute({
      name,
      price,
      sale_price,
      quantity,
      due_date
    });

    return response.json(product)
  }
}
