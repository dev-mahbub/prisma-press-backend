import { prisma } from "../../lib/prisma";
import { ICreatePostPayload } from "./post.interface";

const createPostToDB = async (payload: ICreatePostPayload, userId: string) => {
  const result = await prisma.post.create({
    data: {
      ...payload,
      authorId: userId,
    },
  });

  return result;
};

const getAllPostToDB = async () => {
  const posts = await prisma.post.findMany({
    include: {
      author: {
        omit: {
          password: true,
        },
      },
      comments: true,
    },
  });
  return posts;
};

const getSinglePostToDB = async () => {};

const getPostStatsToDB = async () => {};

const getMyPostToDB = async () => {};

const updatePostToDB = async () => {};

const deletePostToDB = async () => {};

export const postService = {
  createPostToDB,
  getAllPostToDB,
  getSinglePostToDB,
  getPostStatsToDB,
  getMyPostToDB,
  updatePostToDB,
  deletePostToDB,
};
