import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
  const user = await prisma.user.create({
    data: {
      email: "ariadne@prisma.io",
      name: "Ariadne",
      posts: {
        create: [
          {
            title: "My first day at Prisma",
            categories: {
              create: {
                name: "Office",
              },
            },
          },
          {
            title: "How to connect to a SQLite database",
            categories: {
              create: [{ name: "Databases" }, { name: "Tutorials" }],
            },
          },
        ],
      },
    },
  })

  const allUsers = await prisma.user.findMany({
    include: {
      posts: true,
      profile: true,
    },
  })

  console.dir(allUsers, { depth: null })
}

main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
