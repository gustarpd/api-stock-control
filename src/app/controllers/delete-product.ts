import { Response, Request } from "express";
import deleteProductService from "../services/Products/deleProductService";

export class DeleteProductController {
  public async handle(request: Request, response: Response) {
    const id = parseInt(request.params.id);
    const product = new deleteProductService();
    const result = await product.deleteProduct(id);

    return response.json(result);
  }
}
