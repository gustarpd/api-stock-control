import {
  ExitsRepository,
  IDataExits,
} from "../../repositories/ExitsExpansesRepository";

class EditProductExitService {
  public async execute({ description, price, date }: IDataExits) {
    const product = ExitsRepository.findByid({ description, price, date });
    return product;
  }
}

export default EditProductExitService;
