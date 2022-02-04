import { NextApiRequest, NextApiResponse } from 'next';
import prisma from 'lib/prisma';

const sample = async (req: NextApiRequest, res: NextApiResponse) => {
  const member = await prisma.member.create({});
  res.status(200).json(member);
};

export default sample;
