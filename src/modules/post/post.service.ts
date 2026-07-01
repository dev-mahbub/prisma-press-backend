import { prisma } from "../../lib/prisma";
import { ICreatePostPayload } from "./post.interface";

const createPostToDB = async (payload: ICreatePostPayload, userId: string) => {
  const result = await prisma.post.create({
    data: {
      ...payload,
      authorId: userId,
    },
    include: {
      author: {
        omit: {
          password: true,
        },
      },
      comments: true,
    },
  });

  return result;
};

const getAllPostToDB = async () => {};

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
