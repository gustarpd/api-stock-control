import { ProductRepository } from "../../repositories/ProductsRepository";
import updatesProductService from "./updateProduct";

class deleteProductService {
   public async deleteProduct(id: number) {
     const product = ProductRepository.findOne(id);
     return { message:'Produto excluído com sucesso' }
   }
}

export default deleteProductService;
