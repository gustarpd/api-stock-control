import { Request, Response } from "express";
import GetExitExpanseService from "../../../services/Exits/GetExitExpansesService";


export interface RequestParams {}

export interface ResponseBody {}

export interface RequestBody {}

export interface RequestQuery {
  start_date: string;
  end_date: string;
}


export class GetAllExitExpanseController {
  async handle( 
    request: Request<RequestParams, ResponseBody, RequestBody, RequestQuery>,
    response: Response) {
    const { start_date, end_date } = request.query;

    const createExitProduct = new GetExitExpanseService();
    const product = await createExitProduct.execute(start_date, end_date);

    return response.json(product);
  }
}
