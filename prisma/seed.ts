import { PrismaClient } from '@prisma/client';
import colors from './seed_data/colors';
import fontFamilies from './seed_data/font_families';
import headParts from './seed_data/head_parts';

const prisma = new PrismaClient();

async function main() {
  await prisma.colors.createMany({ data: colors });
  await prisma.fontFamilies.createMany({ data: fontFamilies });
  await prisma.headParts.createMany({ data: headParts });
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
