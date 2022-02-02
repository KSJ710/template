import { NextApiRequest, NextApiResponse } from 'next';
import prisma from 'lib/prisma';
import { fetcher } from 'src/helper/common';
import axios from 'axios';

const address = async (req: NextApiRequest, res: NextApiResponse) => {
  await fetcher('https://geolonia.github.io/japanese-addresses/api/ja.json').then((data) => {
    const a = JSON.parse(JSON.stringify(data));
    for (const b in a) {
      console.log(`${b} ： ${a[b]}\n`);
    }
    res.status(200).json(data);
  });
};

export default address;
