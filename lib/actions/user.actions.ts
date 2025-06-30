'use server';

import prisma from '@/lib/prisma';

export async function getUserByName(name: string) {
  const user = await prisma.user.findUnique({
    where: { nom: name },
  });

  return user;
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
