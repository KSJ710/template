import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const data = await prisma.prefectures.findFirst({
    where: { name: { contains: '川' } },
  });
  console.log(data);
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
