'use server';

import prisma from '../prisma';

export async function getCulture(name: string) {
  if (!name) {
    throw new Error('Player name is required.');
  }

  const info = await prisma.playerInfo.findUnique({
    where: {
      playerId: name,
    },
    select: {
      culture: true,
    },
  });
  console.log('Culture info:', info);
  return info?.culture ?? null;
}
