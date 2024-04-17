import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "root",
  database: "mBank",
  synchronize: false,
  entities: ["src/entity/*.ts"],
  subscribers: [],
  migrations: ["src/migrations/**/*.ts"],
  migrationsTableName: "mBank_migration"
});
