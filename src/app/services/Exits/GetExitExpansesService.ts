import { ExitsRepository } from "../../repositories/ExitsExpansesRepository";

class GetExitExpanseService {
  public async execute(start_date: string, end_date: string){
    const product = ExitsRepository.findByDate(start_date, end_date);
    return product;
  }
}

export default GetExitExpanseService;