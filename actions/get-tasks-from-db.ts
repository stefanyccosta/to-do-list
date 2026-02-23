"use server";
import { prisma } from "@/prisma/utils/prisma";

export const getTasks = async () => {
  const tasks = await prisma.tasks.findMany();

  if (!tasks) return;
  console.log(tasks);
  return tasks;
};
