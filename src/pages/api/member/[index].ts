import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from 'lib/prisma';
import bcrypt from 'bcrypt';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      if (req.query.index === 'show') {
        res.status(200).json({ message: 'GET_SHOW' });
        break;
      }
      res.status(200).json({ message: 'GET_INDEX' });
      break;

    case 'POST':
      console.log(req.body.name);
      console.log(req.body.password);
      const saltRounds = 10;
      let result;
      bcrypt.hash(req.body.password, saltRounds, async function (err, hash) {
        console.log(hash);
        result = await prisma.member.create({
          data: {
            name: req.body.name,
            email: req.body.email,
            password: hash,
          },
        });
      });
      res.status(200).json(result);
      break;

    case 'PATCH':
      res.status(200).json({ message: 'PATCH' });
      break;

    case 'DELETE':
      res.status(200).json({ message: 'DELETE' });
      break;

    default:
      res.status(405).end();
      break;
  }
}
