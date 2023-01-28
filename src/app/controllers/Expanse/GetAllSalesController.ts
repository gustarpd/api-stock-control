import { Request, Response } from "express";
import GetAllSaleService from "../../services/Sales/GetAllSaleService";

export class GetAllSalesControllers {
  public async handle(request: Request, response: Response) {
    const { start_date, end_date } = request.body;

    const getSales = new GetAllSaleService();
    const sales = await getSales.execute({ start_date, end_date });
  
    return response.json(sales);
  }
}
