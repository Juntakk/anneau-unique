"use server";

import prisma from "@/lib/prisma";
import { User, Weapon } from "@/types/user";

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
export async function updateWeaponField(
  userId: string,
  index: number,
  field: keyof Weapon,
  value: string | number
) {
  const data = field[0].toUpperCase() + field.slice(1);

  await prisma.weapon.update({
    where: {
      userId_index: {
        userId,
        index,
      },
    },
    data: { [field]: value },
  });
  return { success: true, message: `${data} updated successfully` };
}

export async function updateUserField(
  userId: string,
  field: keyof User | string,
  value: string | number
) {
  const data = field[0].toUpperCase() + field.slice(1);
  await prisma.user.update({
    where: { id: userId },
    data: { [field]: value },
  });
  return { success: true, message: ` ${data} updated successfully` };
}

export async function updateWeaponLevel(
  userId: string,
  field: keyof Weapon,
  index: number,
  value: number
) {
  await prisma.weapon.update({
    where: {
      userId_index: {
        userId,
        index,
      },
    },
    data: { [field]: value },
  });
  return { success: true, message: `Weapon level updated successfully` };
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
