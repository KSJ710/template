import prisma from 'lib/prisma';

export default async function HeadParts(req, res) {
  const headParts: LayoutParts[] = await prisma.headPart.findMany();
  res.status(200).json(headParts);
}
