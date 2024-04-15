import app, { initializeMiddlewares, initializeRoutes } from "./configs/app";
import appConfig from "./configs";
import { AppDataSource } from "./data-source";

const { port, environment } = appConfig;

(() => {
  initializeMiddlewares();
  initializeRoutes();

  AppDataSource.initialize()
    .then(async () => {
      // await conn.runMigrations();

      app.listen(port, () => {
        console.log(
          `${environment?.toLocaleUpperCase()} is running on port ${port}...`
        );
      });

      console.log("connected to database");
    })
    .catch((error) => {
      throw Error(`Unable to connect to database: ${error}`);
    });
})();
