import { Request, Response } from "express";
import DeleteSaleService from "../../../services/Sales/DeleteSalesService";

export class DeleteSaleController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const sale = new DeleteSaleService();
    const saleService = sale.execute(id);

    return response.json(saleService);
  }
}
