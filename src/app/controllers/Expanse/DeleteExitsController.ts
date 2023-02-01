import { Request, Response } from "express";
import DeleteExitExitService from "../../services/Exits/deleteService";
import ExitProductService from "../../services/Exits/ExitService";

export class ExitExpanseController {
  async handle(request: Request, response: Response) {
    const { id } = request.body;

    const exit = new DeleteExitExitService();
    const exitservice = exit.execute(id)
  

    return response.json(exitservice)
  }
}
