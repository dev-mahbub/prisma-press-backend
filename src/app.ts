import { Application, Request, Response, urlencoded } from "express";
import express from "express";
import cors from "cors";
import config from "./config";
import cookieParser from "cookie-parser";
import { prisma } from "./lib/prisma";
import bcrypt from "bcryptjs";
import httpStatus from "http-status";
import { userRouter } from "./modules/user/user.route";

const app: Application = express();

app.use(
  cors({
    origin: config.app_url,
    credentials: true,
  }),
);

(app.use(express.json()),
  app.use(express.urlencoded()),
  app.use(cookieParser()));

app.get("/", async (req: Request, res: Response) => {
  res.send("Hello World");
});

app.use("/api/users", userRouter);

export default app;
