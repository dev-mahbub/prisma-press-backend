import { Application, Request, Response, urlencoded } from "express";
import express from "express";
import cors from "cors";
import config from "./config";
import cookieParser from "cookie-parser";
import { userRouter } from "./modules/user/user.route";
import { authRoutes } from "./modules/auth/login.route";
import { postRoutes } from "./modules/post/post.route";

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
app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);

export default app;
