import { Router } from "express";
import { postController } from "./post.controller";
import { auth } from "../../utils/auth";
import { Role } from "../../../generated/prisma/enums";

const router = Router();

router.post(
  "/",
  auth(Role.ADMIN, Role.AUTHOR, Role.USER),
  postController.createPost,
);
router.get("/", postController.getAllPost);
router.get("/stats", postController.getPostStats);
router.get("/:userId", postController.getSinglePost);
router.get("/:userId", postController.getMyPost);
router.patch("/:userId", postController.updatePost);
router.delete("/:userId", postController.deletePost);

export const postRoutes = router;
