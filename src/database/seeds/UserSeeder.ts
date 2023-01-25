import { DataSource } from "typeorm";
import { Seeder, SeederFactoryManager } from "typeorm-extension";
import { Product } from "../../app/entities/Product";

export class ProductSeeder implements Seeder {
  async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager
  ): Promise<void> {
    const userRepository = dataSource.getRepository(Product);

    const userData = {
      name: "Teclado e mouse gamer",
      price: 134.54,
      sale_price: 120.43,
      quantity: 12,
      due_date: 'sfafa',
    };

    const newUser = userRepository.create(userData);
    await userRepository.save(newUser);
  }
}
