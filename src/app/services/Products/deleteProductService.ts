import { ProductRepository } from "../../repositories/ProductsRepository";
import updatesProductService from "./updateProduct";

class DeleteProductService {
   public async deleteProduct(id: string) {
     const product = ProductRepository.findOne(id);
     return { message:'Produto excluído com sucesso' }
   }
}

export default DeleteProductService;
