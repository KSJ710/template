import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const color = await prisma.user.delete({
    where: { email: 'taro@sample.com' },
  });
  console.log(color);
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
