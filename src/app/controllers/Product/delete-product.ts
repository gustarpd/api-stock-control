import { Response, Request } from "express";
import deleteProductService from "../../services/Products/deleteProductService";

export class DeleteProductController {
  public async handle(request: Request, response: Response) {
    const id = request.params.id
    const product = new deleteProductService();
    const result = await product.deleteProduct(id);

    return response.json(result);
  }
}
