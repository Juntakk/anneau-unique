import { PrismaClient } from '@/generated/prisma';

const prisma = new PrismaClient();

async function main() {
  const players = [
    { id: 'firiel', culture: 'Dúnedain' },
    { id: 'raenvild', culture: 'Rohirrim' },
    { id: 'yorick', culture: 'Dwarves of the Blue Mountains' },
    { id: 'varr', culture: 'Bardings' },
    { id: 'nori', culture: 'Dwarves of Erebor' },
  ];

  // Optional: clear existing data first
  await prisma.playerInfo.deleteMany();
  await prisma.player.deleteMany();

  for (const player of players) {
    await prisma.player.create({
      data: {
        id: player.id,
        PlayerInfo: {
          create: {
            id: `${player.id}-info`,
            culture: player.culture,
          },
        },
      },
    });
  }

  console.log('✅ Seeded players with culture');
}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error('❌ Seed failed:', e);
    return prisma.$disconnect().then(() => process.exit(1));
  });
