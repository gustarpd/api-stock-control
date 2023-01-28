import { Request, Response } from "express";
import ExitProductService from "../../services/Exits/ExitService";
import GetExitExpanseService from "../../services/Exits/GetExitExpansesService";
import createProductService from "../../services/Products/CreateProductService";

export class GetAllExitExpanseController {
  async handle(request: Request, response: Response) {
    const { start_date, and_date } = request.body;

    const createExitProduct = new GetExitExpanseService();
    const product = await createExitProduct.execute(start_date, and_date);

    return response.json(product);
  }
}
