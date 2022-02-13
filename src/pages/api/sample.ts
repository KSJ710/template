import { NextApiRequest, NextApiResponse } from 'next';
import prisma from 'lib/prisma';

export default async function sample(req: NextApiRequest, res: NextApiResponse) {
  // const member = await prisma.hoby.update({
  //   where: { id: 7 },
  //   data: { name: 'zz', predecessor: { connect: { id: 7 } } },
  // });

  const member = await prisma.prefectures.findFirst({
    where: { id: 11 },
  });
  const data = JSON.stringify(member, null, 2);
  res.status(200).json(data);
}
