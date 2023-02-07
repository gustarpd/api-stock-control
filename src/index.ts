import express, {
  Request,
  Response,
  ErrorRequestHandler,
  NextFunction,
} from "express";
import dotenv from "dotenv";
import router from "./routes/index";
import cors from 'cors'
import AppError from "./shared/error/AppError";
import { AppDataSource } from "./database/data-source";
import "reflect-metadata";

AppDataSource.initialize().then(() => {
  dotenv.config();
  const server = express();
   
  server.use(cors({
    origin: "*"
  }))

  server.use(express.json());

  server.get("/ping", (req: Request, res: Response) =>
    res.json({ ping: "pong" })
  );

  server.use(router);

  server.use(
    (error: Error, req: Request, res: Response, next: NextFunction) => {
      if (error instanceof AppError) {
        return res.status(error.statusCode).json({
          status: "error",
          menssage: error.message,
        });
      }

      return res.status(500).json({
        status: "error",
        menssage: "Internal Server Error",
      });
    }
  );

  const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
    res.status(400); // Bad Request
    console.log(err);
    res.json({ error: "Ocorreu algum erro." });
  };
  server.use(errorHandler);

  server.listen(process.env.PORT);
});


