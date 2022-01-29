import prisma from 'lib/prisma';

const FootParts = async (req, res) => {
  const footParts: LayoutParts[] = await prisma.footParts.findMany();
  res.status(200).json(footParts);
};

export default FootParts;
