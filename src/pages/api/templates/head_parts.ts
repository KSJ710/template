import prisma from 'lib/prisma';

const HeadParts = async (req, res) => {
  const headParts: LayoutParts[] = await prisma.headPart.findMany();
  res.status(200).json(headParts);
};

export default HeadParts;
