"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root",
    database: "mBank",
    synchronize: true,
    entities: ["src/entity/*.ts"],
    subscribers: [],
    migrations: ["src/migration/**/*.ts"],
});
//# sourceMappingURL=data-source.js.map