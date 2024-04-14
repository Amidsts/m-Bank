import app, { initializeMiddlewares, initializeRoutes } from "./configs/app";
import appConfig from "./configs";

const { port, environment } = appConfig;

(() => {
    initializeMiddlewares();
    initializeRoutes();

  app.listen(port, () => {
    console.log(
      `${environment?.toLocaleUpperCase()} is running on port ${port}...`
    );
  });
})();
