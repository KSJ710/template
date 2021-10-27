import prisma from 'lib/prisma';

const Colors = async (req, res) => {
  const colors = await prisma.colors.findMany();
  res.status(200).json(colors);
};
export default Colors;
