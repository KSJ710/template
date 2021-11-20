import prisma from 'lib/prisma';

const HeadParts = async (req, res) => {
  const headParts: HeadParts[] = await prisma.headParts.findMany();
  res.status(200).json(headParts);
};

export default HeadParts;
