import { PrismaClient } from '@prisma/client';
import colors from './seed_data/colors';

const prisma = new PrismaClient();

async function main() {
  await prisma.color.createMany({ data: colors });
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
