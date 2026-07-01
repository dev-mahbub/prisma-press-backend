import { Router } from "express";
import { postController } from "./post.controller";

const router = Router();

router.post("/", postController.createPost);
router.post("/", postController.getAllPost);
router.post("/stats", postController.getPostStats);
router.post("/:userId", postController.getSinglePost);
router.post("/:userId", postController.getMyPost);
router.post("/:userId", postController.updatePost);
router.post("/:userId", postController.deletePost);

export const postRoutes = router;
