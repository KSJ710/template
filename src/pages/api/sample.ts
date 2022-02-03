import { NextApiRequest, NextApiResponse } from 'next';
import prisma from 'lib/prisma';

const sample = (req: NextApiRequest, res: NextApiResponse) => {
  const mem = prisma.users.create({});
  res.status(200);
};

export default sample;
