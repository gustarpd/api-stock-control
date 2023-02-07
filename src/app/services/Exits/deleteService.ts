import AppError from "../../../shared/error/AppError";
import { ExitsRepository } from "../../repositories/ExitsExpansesRepository";

class DeleteExitExitService {
  public async execute(id: string) {
    const product = ExitsRepository.deleteById(id);
    if (!product) {
      throw new AppError("Product does`t exists", 400);
    }

    return { message: "Produto excluído com sucesso!" };
  }
}

export default DeleteExitExitService;
