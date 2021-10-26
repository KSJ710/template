import prisma from 'lib/prisma';
// import { PrismaClient } from '@prisma/client';

const Corlors = async (req, res) => {
  // const prisma = new PrismaClient()
  const colors = await prisma.color.findMany({});
  console.log(colors);
  res.status(200).json(colors);
  // res.status(200).json({name: 'taro'});
};
export default Corlors;
