import bcrypt from "bcryptjs";
import { prisma } from "../../lib/prisma";
import config from "../../config";
import { IRegisterUserPayload } from "./user.interface";

const registerUserIntoDB = async (payload: IRegisterUserPayload) => {
  const { name, email, password, profile_photo } = payload;
  const isUserExists = await prisma.user.findUnique({
    where: { email },
  });

  if (isUserExists) {
    throw new Error("User with this email already exists");
  }

  const hashedPassword = await bcrypt.hash(
    password,
    Number(config.bcrypt_salt_rounds),
  );

  const createdUser = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  await prisma.profile.create({
    data: {
      userId: createdUser.id,
      profile_photo: profile_photo,
    },
  });

  const user = await prisma.user.findUnique({
    where: { id: createdUser.id, email: createdUser.email || email },
    omit: {
      password: true,
    },
    include: {
      profile: true,
    },
  });
  return user;
};

const getMyProfileFromDB = async (userId: string) => {
  const user = await prisma.user.findUniqueOrThrow({
    where: { id: userId },
    omit: { password: true },
    include: { profile: true },
  });
  return user;
};

const updateMyProfileToDB = async (userId: string, payload: any) => {
  const { email, name, bio, profile_photo } = payload;
  const updateProfile = await prisma.user.update({
    where: { id: userId },
    data: {
      name,
      email,
      profile: {
        update: {
          bio,
          profile_photo,
        },
      },
    },
    omit: { password: true },
    include: { profile: true },
  });

  return updateProfile;
};

export const userService = {
  registerUserIntoDB,
  getMyProfileFromDB,
  updateMyProfileToDB,
};
