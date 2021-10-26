import { PrismaClient } from '@prisma/client';
const prisma: PrismaClient = new PrismaClient();

const getCorlors = async (req, res) => {
  const colors = await prisma.colors.findMany({});
  res.status(200).json(colors);
};

export default getCorlors;
