import { Request, Response } from "express";
import DeleteExitExitService from "../../../services/Exits/deleteService";

export class DeleteExitController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
     
    const exit = new DeleteExitExitService();
    const exitservice = exit.execute(id);

    return response.json(exitservice);
  }
}
