import "express-async-errors";
import express, { Express } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import { appRoutes } from "./routes";
import errorHandler from "./middlewares/errorHandler";

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
    this.server.use(cookieParser())
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
