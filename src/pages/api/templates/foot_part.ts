import prisma from 'lib/prisma';

export default async function FootParts(req, res) {
  const footParts: LayoutParts[] = await prisma.footPart.findMany();
  res.status(200).json(footParts);
}
