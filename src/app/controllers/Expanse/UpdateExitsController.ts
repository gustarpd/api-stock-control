import { Request, Response } from "express";
import EditProductExitService from "../../services/Exits/EditExitService";
import GetExitExpanseService from "../../services/Exits/GetExitExpansesService";

export class GetAllExitExpanseController {
  async handle(request: Request, response: Response) {
    const { description, price, date } = request.body;
    const id = parseInt(request.params.id);
    
    const updateExitProduct = new EditProductExitService();
    const product = await updateExitProduct.execute({ id, description, price, date });

    return response.json(product);
  }
}
