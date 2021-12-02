import { prismaClient } from "./prisma";

export const modelCreateName = async (name: string) =>
  prismaClient.encrypted_name.create({
    data: {
      name,
    },
  });

export const modelGetNameById = async (id: number) =>
  prismaClient.encrypted_name.findFirst({
    where: {
      id,
    },
  });
