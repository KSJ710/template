import prisma from 'lib/prisma';
// import { PrismaClient } from '@prisma/client';

const Colors = async (req, res) => {
  // const prisma = new PrismaClient()
  const colors = await prisma.colors.findMany();
  res.status(200).json(colors);
};
export default Colors;
