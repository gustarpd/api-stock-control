import "dotenv/config";
import { DataSource, DataSourceOptions } from "typeorm";
import { SeederOptions } from "typeorm-extension";
import { MainSeeder } from "./seeds/MainSeeder";

const port = process.env.DB_PORT as unknown as number | undefined;
const options: DataSourceOptions & SeederOptions = {
  type: "postgres",
  host: process.env.DB_HOST,
  port: port,
  username: process.env.DB_USER,
  password: "1234" as string,
  database: process.env.DB_NAME,
  entities: [`${__dirname}/../../src/app/entities/*.ts`],
  migrations: [`${__dirname}/../../src/database/migrations/*.{ts,js}`],
  seeds: [MainSeeder]
}

export const AppDataSource = new DataSource(options);
