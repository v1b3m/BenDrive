import cors from "cors";
import { Express } from "express";
import pino from "express-pino-logger";

export const middleware = (app: Express): void => {
  app.use(cors());
  app.use(pino());
};
