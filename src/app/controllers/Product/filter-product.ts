import { Request, Response } from "express";
import FilterProductService from "../../services/Products/FilterproductService";
import updatesProductService from "../../services/Products/updateProduct";

export class updateProductController {
  public async handle(request: Request, response: Response) {
    const { name } = request.query;
    const productExecute = new FilterProductService();
    const product = await productExecute.execute(name);
    console.log(name);
    response.json(product);
  }

  public async getByName(request: Request, response: Response) {
    const { name } = request.params;
    const productExecute = new FilterProductService();
    const product = await productExecute.execute(name);

    response.json(product);
  }

  public async edit(req: Request, res: Response) {
    const { name, price, sale_price, due_date, quantity } = req.body;
    const id = req.params.id;

    const getRepository = new updatesProductService();
    const products = await getRepository.updateProduct({
      id,
      name,
      price,
      sale_price,
      due_date,
      quantity,
    });

    return res.json(products);
  }
}
