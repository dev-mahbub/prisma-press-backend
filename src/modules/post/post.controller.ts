import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";

const createPost = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {},
);

const getAllPost = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {},
);

const getSinglePost = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {},
);

const getPostStats = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {},
);

const getMyPost = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {},
);

const updatePost = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {},
);

const deletePost = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {},
);

export const postController = {
  createPost,
  getAllPost,
  getSinglePost,
  getPostStats,
  getMyPost,
  updatePost,
  deletePost,
};
