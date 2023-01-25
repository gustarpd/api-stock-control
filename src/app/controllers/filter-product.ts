import { Request, Response } from "express";
import FilterProductService from "../services/Products/FilterproductService";

export class FilterProduct {
  async handle(request: Request, response: Response) {
    const { name } = request.body;
    const productExecute = new FilterProductService();
    const product = await productExecute.execute(name);

    response.json(product);
  }

  async edit(request: Request, response: Response) {
    const { id } = request.body;
  }
}
