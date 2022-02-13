import prisma from 'lib/prisma';

export default async function Colors(req, res) {
  const colors: Color[] = await prisma.color.findMany();
  res.status(200).json(colors);
}
