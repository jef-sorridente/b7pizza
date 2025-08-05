import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

export const hasEmail = async (email: string) => {
  const user = await prisma.user.findUnique({
    where: { email },
  });

  return user ? true : false;
};

export const validateAuth = async (email: string, password: string) => {
  const user = await prisma.user.findUnique({
    where: { email },
  });
  if (!user) return false;
};

export const createUser = async (
  name: string,
  email: string,
  password: string
) => {};

export const createUserToken = async (userId: number) => {};
