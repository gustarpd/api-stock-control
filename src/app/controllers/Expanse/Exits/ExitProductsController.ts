import { Request, Response } from "express";
import ExitProductService from "../../../services/Exits/ExitService";

export class ExitExpanseController {
  async handle(request: Request, response: Response) {
    const { description, price, date } = request.body;

    const createExitProduct = new ExitProductService();
    const product = await createExitProduct.execute({
      description,
      price,
      date
    });

    return response.json(product)
  }
}
