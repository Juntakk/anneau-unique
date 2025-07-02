"use server";

import prisma from "@/lib/prisma";
import { User } from "@/types/user";

export async function getUserByName(name: string) {
  const user = await prisma.user.findUnique({
    where: { nom: name },
    include: {
      armes: true,
      equipements: true,
    },
  });

  return user;
}

export async function updateUserField(
  userId: string,
  field: keyof User,
  value: string | number
) {
  return await prisma.user.update({
    where: { id: userId },
    data: { [field]: value },
  });
}

export async function getCompanyRolesByName(nom: string): Promise<{
  guide: string;
  eclaireur: string;
  chasseur: string;
  guetteur: string;
  lien_communaute: string;
} | null> {
  const user = await prisma.user.findUnique({
    where: { nom },
    select: {
      guide: true,
      eclaireur: true,
      chasseur: true,
      guetteur: true,
      lien_communaute: true,
    },
  });

  return user ?? null;
}
