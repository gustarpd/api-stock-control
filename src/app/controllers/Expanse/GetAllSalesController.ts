import { Request, Response } from "express";
import GetAllSaleService from "../../services/Sales/GetAllSaleService";

export interface RequestParams {}

export interface ResponseBody {}

export interface RequestBody {}

export interface RequestQuery {
  start_date: string;
  end_date: string;
}

export class GetAllSalesControllers {
  public async handle(
    request: Request<RequestParams, ResponseBody, RequestBody, RequestQuery>,
    response: Response
  ) {
    const { start_date, end_date } = request.query;

    const getSales = new GetAllSaleService();
    const sales = await getSales.execute({ start_date, end_date });

    return response.json(sales);
  }
}
