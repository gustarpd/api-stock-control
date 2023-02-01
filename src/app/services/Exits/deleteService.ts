import { ExitsRepository } from "../../repositories/ExitsExpansesRepository";

class DeleteExitExitService {
  public async execute(id: string) {
    const product = ExitsRepository.deleteById(id);
    if (!product) {
      throw new Error("Product does`t exists");
    }

    return { message: "Produto excluído com sucesso!" };
  }
}

export default DeleteExitExitService;
