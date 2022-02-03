import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const data = await prisma.prefectures.createMany({
    data: [{ name: 'test' }, { name: 'aaa' }],
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
