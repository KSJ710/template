import { NextApiRequest, NextApiResponse } from 'next';
import prisma from 'lib/prisma';
import { fetcher } from 'src/helper/common';
import axios from 'axios';

const address = async (req: NextApiRequest, res: NextApiResponse) => {
  const data = await prisma.prefectures.findMany({ include: { cities: true } });
  res.status(200).json(data);
};

export default address;
