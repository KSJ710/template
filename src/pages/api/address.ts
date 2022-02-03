import { NextApiRequest, NextApiResponse } from 'next';
import prisma from 'lib/prisma';
import { fetcher } from 'src/helper/common';
import axios from 'axios';

type Fetcher = (url: string) => Promise<any>;

const address = async (req: NextApiRequest, res: NextApiResponse) => {
  await fetcher('https://geolonia.github.io/japanese-addresses/api/ja.json').then((data) => {
    // const obj = JSON.parse(JSON.stringify(data));
    // for (const b in obj) {
    //   console.log({name: b});
    // }
    const address = JSON.parse(JSON.stringify(data));
    let address_array = [];
    for (const ken in address) {
      address_array.push({ name: ken });
    }
    res.status(200).json(address_array);
  });
};

export default address;
