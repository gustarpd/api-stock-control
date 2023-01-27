import { Request, Response } from "express";
import FilterProductService from "../services/Products/FilterproductService";
import updatesProductService from "../services/Products/updateProduct";

export class FilterProduct {
  public async handle(request: Request, response: Response) {
    const { name } = request.body;
    const productExecute = new FilterProductService();
    const product = await productExecute.execute(name);

    response.json(product);
  }

  public async edit(req: Request, res: Response) {
    const { name, price, sale_price, due_date } = req.body;
    const id = parseInt(req.params.id);

    const getRepository = new updatesProductService();
    const products = await getRepository.updateProduct({ id, name, price, sale_price, due_date})

    return res.json(products);
  }
}
