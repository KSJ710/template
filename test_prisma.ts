import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
  const color = await prisma.color.findMany({
    where: { id: 1 },
  })
  console.log(color[0].id)
}

main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
