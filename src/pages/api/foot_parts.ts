import prisma from 'lib/prisma';

const FootParts = async (req, res) => {
  const footParts: LayoutParts[] = await prisma.footPart.findMany();
  res.status(200).json(footParts);
};

export default FootParts;
