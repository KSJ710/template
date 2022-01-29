import prisma from 'lib/prisma';

const FontFamilies = async (req, res) => {
  const fontFamilies: FontFamily[] = await prisma.fontFamilies.findMany();
  res.status(200).json(fontFamilies);
};

export default FontFamilies;
