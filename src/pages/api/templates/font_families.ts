import prisma from 'lib/prisma';

export default async function FontFamilies(req, res) {
  const fontFamilies: FontFamily[] = await prisma.fontFamily.findMany();
  res.status(200).json(fontFamilies);
}
