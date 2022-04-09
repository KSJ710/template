import { PrismaClient } from '@prisma/client';
import axios from 'axios';

const prisma = new PrismaClient();

async function main() {
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(() => {
    prisma.$disconnect();
  });
