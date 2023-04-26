import "express-async-errors";
import express, { Express } from "express";
import cors from "cors";
import errorHandler from "./middlewares/errorHandler";
import { appRoutes } from "./routes";

class App {
  server: Express;

  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
    this.errorHandler();
  }

  middlewares() {
    this.server.use(cors());
    this.server.use(express.json());
  }

  routes() {
    appRoutes(this.server);
  }

  errorHandler() {
    this.server.use(errorHandler);
  }
}

export default new App().server;
